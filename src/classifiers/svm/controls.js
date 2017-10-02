// Standard imports
import { connect } from 'react-redux';
import Slider from 'rc-slider';

// Styles
import 'rc-slider/assets/index.css';

// Local imports
import { updateSVMKernel, updateSVMC, updateSVMSigmaSquared, updateSVMDegree, updateSVMGamma,
  updateSVMCoef0 } from '../../actions';

const SliderWithTooltip = Slider.createSliderWithTooltip(Slider);

const ControlsC = ({ C, onChangeC }) => {
  const marks = {
    '-2': <span>10<sup>-2</sup></span>,
    '-1': <span>10<sup>-1</sup></span>,
    0: <strong>10<sup>0</sup></strong>,
    1: <span>10<sup>1</sup></span>,
    2: <span>10<sup>2</sup></span>,
  };

  const formatTip = value => <span>10<sup>{value}</sup> = {(10 ** value).toFixed(2)}</span>;

  return (
    <fieldset>
      <label>C (slack parameter)</label>
      <div className="slider">
        <SliderWithTooltip
          included={true}
          marks={marks}
          value={C}
          min={-2}
          max={2}
          onChange={onChangeC}
          step={0.01}
          tipFormatter={formatTip}
        />
      </div>
    </fieldset>
  );
};

const ControlsSigmaSquared = ({ sigmaSquared, onChangeSigmaSquared }) => {
  const marks = {
    '-2': <span>10<sup>-2</sup></span>,
    '-1': <span>10<sup>-1</sup></span>,
    0: <strong>10<sup>0</sup></strong>,
    1: <span>10<sup>1</sup></span>,
    2: <span>10<sup>2</sup></span>,
  };

  const formatTip = value => <span>10<sup>{value}</sup> = {(10 ** value).toFixed(2)}</span>;

  return (
    <fieldset>
      <label>&sigma;<sup>2</sup> (Gaussian)</label>
      <div className="slider">
        <SliderWithTooltip
          included={true}
          marks={marks}
          value={sigmaSquared}
          min={-2}
          max={2}
          onChange={onChangeSigmaSquared}
          step={0.01}
          tipFormatter={formatTip}
        />
      </div>
    </fieldset>
  );
};

const ControlsDegree = ({ degree, onChangeDegree }) => {
  const marks = {
    0: 0,
    1: 1,
    2: 2,
    5: 5,
    10: 10,
  };

  return (
    <fieldset>
      <label>Polynomial degree</label>
      <div className="slider">
        <SliderWithTooltip
          included={true}
          marks={marks}
          value={degree}
          min={0}
          max={10}
          onChange={onChangeDegree}
        />
      </div>
    </fieldset>
  );
};

const ControlsGamma = ({ gamma, onChangeGamma }) => {
  const marks = {
    0: 0,
    1: 1,
    10: 10,
  };

  return (
    <fieldset>
      <label>Gamma (scaling factor)</label>
      <div className="slider">
        <SliderWithTooltip
          included={true}
          marks={marks}
          value={gamma}
          min={0}
          max={10}
          step={0.01}
          onChange={onChangeGamma}
        />
      </div>
    </fieldset>
  );
};

const ControlsCoef0 = ({ coef0, onChangeCoef0 }) => {
  const marks = {
    0: 0,
    1: 1,
    10: 10,
  };

  return (
    <fieldset>
      <label>Bias (coefficient 0)</label>
      <div className="slider">
        <SliderWithTooltip
          included={true}
          marks={marks}
          value={coef0}
          min={0}
          max={10}
          step={0.01}
          onChange={onChangeCoef0}
        />
      </div>
    </fieldset>
  );
};

const Controls = ({ C, kernel, sigmaSquared, degree, gamma, coef0, onChangeKernel, onChangeC,
  onChangeSigmaSquared, onChangeDegree, onChangeGamma, onChangeCoef0 }) => (
  <div>
    <fieldset>
      <label>Kernel</label>
      <select
        onChange={e => onChangeKernel(e.target.value)}
        value={kernel}
      >
        <option value="linear">Linear</option>
        <option value="gaussian">Gaussian</option>
        <option value="polynomial">Polynomial</option>
      </select>
    </fieldset>
    <ControlsC
      C={C}
      onChangeC={onChangeC}
    />
    {kernel === 'gaussian' &&
      <ControlsSigmaSquared
        sigmaSquared={sigmaSquared}
        onChangeSigmaSquared={onChangeSigmaSquared}
      />
    }
    {kernel === 'polynomial' &&
      <div>
        <ControlsDegree
          degree={degree}
          onChangeDegree={onChangeDegree}
        />
        <ControlsGamma
          gamma={gamma}
          onChangeGamma={onChangeGamma}
        />
        <ControlsCoef0
          coef0={coef0}
          onChangeCoef0={onChangeCoef0}
        />
      </div>
    }
  </div>
);

const mapStateToProps = state => ({
  C: state.controls.svm.C,
  kernel: state.controls.svm.kernel,
  sigmaSquared: state.controls.svm.sigmaSquared,
  degree: state.controls.svm.degree,
  gamma: state.controls.svm.gamma,
  coef0: state.controls.svm.coef0,
});

export default connect(
  mapStateToProps,
  {
    onChangeKernel: updateSVMKernel,
    onChangeC: updateSVMC,
    onChangeSigmaSquared: updateSVMSigmaSquared,
    onChangeDegree: updateSVMDegree,
    onChangeGamma: updateSVMGamma,
    onChangeCoef0: updateSVMCoef0,
  },
)(Controls);
