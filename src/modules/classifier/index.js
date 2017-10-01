// Standard imports
import { connect } from 'react-redux';
import { Component } from 'react';

// Local imports
import jsmlt from '@jsmlt/jsmlt';
import Classifiers from '../../classifiers';
import { updateRunStatus } from '../../actions';

class Classifier extends Component {
  getGridCoordinates() {
    // x1, y1, x2, y2
    return [-5, -5, 5, 5];
  }

  componentDidMount() {
    // Create canvas
    const gridCoordinates = this.getGridCoordinates();
    this.canvas = new jsmlt.UI.Canvas(this.refs.canvas, {
      continuousClick: true,
      x1: gridCoordinates[0],
      y1: gridCoordinates[1],
      x2: gridCoordinates[2],
      y2: gridCoordinates[3],
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

  canvasClassify(canvas, dataset) {
    const classifier = Classifiers[this.props.classifierType].getClassifier(this.props.controls);

    if (dataset.numDatapoints > 1) {
      const X = dataset.getFeaturesArray();

      const labels = dataset.getLabelsArray();
      const encoder = new jsmlt.Preprocessing.LabelEncoder();
      const y = encoder.encode(labels);

      classifier.train(X, y);

      if (this.props.classifierType === 'binarysvm') {
        dataset.getDataPoints().forEach((x, i) => {
          x.setMarked(classifier.supportVectors[i]);
        });
      }

      // Generate predictions for grid
      const boundaries = new jsmlt.Classification.Boundaries();

      const classIndexBoundaries = boundaries.calculateClassifierDecisionBoundaries(
        classifier,
        51,
        this.getGridCoordinates()
      );

      // Convert boundary keys (class indices) to labels
      const labelBoundaries = Object.keys(classIndexBoundaries).reduce((a, x) => ({
        ...a,
        [encoder.decode(x)]: classIndexBoundaries[x],
      }), {});

      // Store class boundaries in canvas
      canvas.setClassBoundaries(labelBoundaries);
    }
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
  currentClassIndex: state.controls.interaction.classIndex,
  autorunEnabled: state.controls.interaction.autorunEnabled,
  runStatus: state.controls.interaction.runStatus,
  classifierType: state.controls.interaction.classifier,
  controls: state.controls,
});

export default connect(mapStateToProps)(Classifier);
