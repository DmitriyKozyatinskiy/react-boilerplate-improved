import React from 'react';
import PropTypes from 'prop-types';
import { Header, Segment, Button } from 'semantic-ui-react';
import './index.scss';


export default class BlocksGroup extends React.Component {
  render() {
    const { id, name } = this.props;

    return (
      <Segment>
        <Header size="small">{ name }</Header>
        <Button primary>Welcome message</Button>
        <Button secondary>Default answer</Button>
      </Segment>
    );
  }
}

BlocksGroup.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};