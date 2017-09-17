// Standard imports
import { Component } from 'react';

// Local imports
import Controls from '../../modules/controls';
import Classifier from '../../modules/classifier';

class Home extends Component {
  render() {
    return (
      <div id="page">
        <sidebar id="sidebar"><Controls /></sidebar>
        <div id="main">
          <Classifier />
        </div>
      </div>
    );
  }
}

export default Home;
