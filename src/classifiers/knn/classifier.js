// Standard imports
import jsmlt from '@jsmlt/jsmlt';

export default controls => (new jsmlt.Supervised.Neighbors.KNN({
  numNeighbours: controls.knn.numNeighbours
}));
