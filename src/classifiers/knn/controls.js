// Standard imports
import { connect } from 'react-redux';

// Styles
import 'rc-slider/assets/index.css';

// Local imports
import { updateKNNNumNeighbours } from '../../actions';

const Controls = ({ numNeighbours, onChangeNumNeighbours }) => (
  <div>
    <fieldset>
      <label>k (num. neighbours)</label>
      <input
        type="number"
        value={numNeighbours}
        onChange={e => onChangeNumNeighbours(e.target.value)}
      />
    </fieldset>
  </div>
);

const mapStateToProps = state => ({
  numNeighbours: state.controls.knn.numNeighbours,
});

export default connect(
  mapStateToProps,
  {
    onChangeNumNeighbours: updateKNNNumNeighbours,
  },
)(Controls);
