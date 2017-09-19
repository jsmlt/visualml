// Standard imports
import { connect } from 'react-redux';
import { Component } from 'react';

// Local imports
import jsmlt from '@jsmlt/jsmlt';
import { updateRunStatus } from '../../actions';

class Classifier extends Component {
  componentDidMount() {
    this.initialize();
  }

  canvasClassify(canvas, dataset) {
    // Train classifier
    let classifier = null;

    if (this.props.classifierType === 'knn') {
      classifier = new jsmlt.Classifier.KNN();
    } else if (this.props.classifierType === 'binarysvm') {
      classifier = new jsmlt.Classifier.BinarySVM({
        kernel: new jsmlt.Classification.GaussianKernel(0.5)
      });
      // classifier = new jsmlt.Classifier.SVMJS.SVM();
    } else if (this.props.classifierType === 'svm') {
      classifier = new jsmlt.Classifier.SVM({
        kernel: new jsmlt.Classification.GaussianKernel(0.5)
      });
    } else {
      classifier = new jsmlt.Classifier.Perceptron();
    }

    if (dataset.numDatapoints > 1) {
      classifier.train(dataset.getFeaturesArray(), dataset.getLabelsArray());

      // classifier.train(dataset.getFeaturesArray(), dataset.getLabelsArray().map((x) =>
      // x === "0" ? -1 : 1), {kernel: jsmlt.Classifier.SVMJS.makeRbfKernel(1)});

      // classifier.train(dataset.getFeaturesArray(), dataset.getLabelsArray().map((x) =>
      // x === "0" ? -1 : 1));

      if (this.props.classifierType === 'binarysvm') {
        dataset.getDataPoints().forEach((x, i) => {
          x.setMarked(classifier.supportVectors[i]);
        });
      }

      // Generate predictions for grid
      const boundaries = new jsmlt.Classification.Boundaries();
      canvas.setClassBoundaries(boundaries.calculateClassifierDecisionBoundaries(classifier, 51));
    }
  }

  initialize() {
    // Create canvas
    this.canvas = new jsmlt.UI.Canvas(this.refs.canvas, {
      continuousClick: true
    });

    // Initialize dataset
    this.dataset = new jsmlt.Data.Dataset();

    // Handle canvas clicks
    this.canvas.addListener('click', (x, y) => {
      // Class index of new data point
      const classIndex = this.props.currentClassIndex;

      // Add new data point
      const datapoint = this.dataset.addDatapoint([x, y]);
      datapoint.setClassIndex(classIndex);

      // Add newly added data point to canvas
      this.canvas.addDatapoint(datapoint);

      // Classifier
      if (this.props.autorunEnabled) {
        this.canvasClassify(this.canvas, this.dataset);
      }
    });
  }

  render() {
    if (this.canvas) {
      this.canvasClassify(this.canvas, this.dataset);
    }

    return (
      <canvas ref="canvas"></canvas>
    );
  }
}

const mapStateToProps = state => ({
  currentClassIndex: state.controls.classIndex,
  autorunEnabled: state.controls.autorunEnabled,
  runStatus: state.controls.runStatus,
  classifierType: state.controls.classifier,
});

export default connect(mapStateToProps)(Classifier);
