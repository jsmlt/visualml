// Standard imports
import { connect } from 'react-redux';
import Slider from 'rc-slider';

// Styles
import 'rc-slider/assets/index.css';

// Local imports
import { updateSVMKernel, updateSVMC } from '../../actions';

const SliderWithTooltip = Slider.createSliderWithTooltip(Slider);

const Controls = ({ C, kernel, gamma, onChangeKernel, onChangeC }) => {
  const marks = {
    '-2': <span>10<sup>-2</sup></span>,
    '-1': <span>10<sup>-1</sup></span>,
    0: <strong>10<sup>0</sup></strong>,
    1: <span>10<sup>1</sup></span>,
    2: <span>10<sup>2</sup></span>,
  };

  const formatTip = value => <span>10<sup>{value}</sup> = {(10 ** value).toFixed(2)}</span>;

  return (
    <div>
      <fieldset>
        <label>Kernel</label>
        <select
          onChange={e => onChangeKernel(e.target.value)}
          value={kernel}
        >
          <option value="linear">Linear</option>
          <option value="gaussian">Gaussian</option>
        </select>
      </fieldset>
      <fieldset>
        <label>C (slack parameter)</label>
        <div className="slider">
          <SliderWithTooltip
            included={false}
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
    </div>
  );
};

const mapStateToProps = state => ({
  C: state.controls.svm.C,
  kernel: state.controls.svm.kernel,
  gamma: state.controls.svm.gamma,
});

export default connect(
  mapStateToProps,
  {
    onChangeKernel: updateSVMKernel,
    onChangeC: updateSVMC,
  },
)(Controls);
