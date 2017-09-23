// Standard imports
import { connect } from 'react-redux';

// Local imports
import { updateSVMKernel } from '../../actions';

const Controls = ({ C, kernel, gamma, onChangeKernel }) => (
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
);

const mapStateToProps = state => ({
  C: state.controls.svm.C,
  kernel: state.controls.svm.kernel,
  gamma: state.controls.svm.gamma,
});

export default connect(
  mapStateToProps,
  { onChangeKernel: updateSVMKernel },
)(Controls);
