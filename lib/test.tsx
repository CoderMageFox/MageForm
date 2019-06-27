import * as PropTypes from 'prop-types';
import * as React from 'react';
import Component from './component';

interface IProps {
  name: string;
}

class Test extends Component<IProps, {}> {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
        <div>
          666
        {name}
        </div>
    );
  }
}

export default Test;
