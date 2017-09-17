// Standard imports
import { connect } from 'react-redux';

// Local imports
import { updateAddDatapointClassIndex, updateAutorunEnabled, updateRunStatus,
  updateClassifier } from '../../actions';

const Controls = ({
  classifier, classIndex, autorunEnabled, onChangeClassifier, onChangeClassIndex,
  onChangeAutorunEnabled, onClickRun
}) => (
  <div>
    <fieldset>
      <label>Classifier</label>
      <select
        onChange={e => onChangeClassifier(e.target.value)}
        value={classifier}
      >
        <option value="svm">SVM</option>
        <option value="perceptron">Perceptron</option>
        <option value="knn">KNN</option>
      </select>
    </fieldset>
    <fieldset>
      <label>Class for new data points:</label>
      <select
        onChange={e => onChangeClassIndex(e.target.value)}
        value={classIndex}
      >
        <option value="0">Class 0</option>
        <option value="1">Class 1</option>
        <option value="2">Class 2</option>
        <option value="3">Class 3</option>
      </select>
    </fieldset>
    <fieldset>
      <button
        onClick={onClickRun}
      >
        Run
      </button>
      <div className="optional">
        <label htmlFor="enable-autorun">
          <input
            checked={autorunEnabled}
            id="enable-autorun"
            type="checkbox"
            value="1"
            onChange={e => onChangeAutorunEnabled(e.target.checked)}
          />
          Enable autorun
        </label>
      </div>
    </fieldset>
  </div>
);

const mapStateToProps = state => ({
  classifier: state.controls.classifier,
  currentClassIndex: state.controls.classIndex,
  autorunEnabled: state.controls.autorunEnabled,
});

export default connect(
  mapStateToProps,
  {
    onChangeClassifier: updateClassifier,
    onChangeAutorunEnabled: updateAutorunEnabled,
    onChangeClassIndex: updateAddDatapointClassIndex,
    onClickRun: updateRunStatus,
  },
)(Controls);
