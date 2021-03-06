// Standard imports
import { connect } from 'react-redux';
import { FaGithub, FaHome } from 'react-icons/lib/fa';

// Local imports
import { updateAddDatapointClassIndex, updateAutorunEnabled, updateRunStatus,
  updateClassifier } from '../../actions';
import Classifiers from '../../classifiers';

const Controls = ({
  classifier, classIndex, autorunEnabled, onChangeClassifier, onChangeClassIndex,
  onChangeAutorunEnabled, onClickRun
}) => {
  const ClassifierControls = (Classifiers[classifier] && Classifiers[classifier].Controls)
    ? Classifiers[classifier].Controls : null;

  return (
    <div>
      <div className="content">
        <fieldset>
          <a
            className="iconized left"
            href="http://visualml.io"
            target="_blank"
            title="JSMLT Homepage"
          ><FaHome size={24} /></a>
          <a
            className="iconized right"
            href="https://github.com/jsmlt"
            target="_blank"
            title="GitHub repository"
          ><FaGithub size={24} /></a>
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
          <label>Classifier</label>
          <select
            onChange={e => onChangeClassifier(e.target.value)}
            value={classifier}
          >
            <option value="SVM">SVM</option>
            <option value="Perceptron">Perceptron</option>
            <option value="KNN">KNN</option>
            <option value="LogisticRegression">Logistic Regression</option>
          </select>
        </fieldset>
        {ClassifierControls &&
          <div className="form-sub">
            <header>{classifier}</header>
            <ClassifierControls />
          </div>
        }
      </div>
      <footer>
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
      </footer>
    </div>
  );
};

const mapStateToProps = state => ({
  classifier: state.controls.interaction.classifier,
  currentClassIndex: state.controls.interaction.classIndex,
  autorunEnabled: state.controls.interaction.autorunEnabled,
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
