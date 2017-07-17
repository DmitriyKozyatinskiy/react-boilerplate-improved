import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectGroupsSorted } from './selectors';
import { Header, Segment } from 'semantic-ui-react';
import BlocksGroup from 'containers/BlocksGroup';
import './index.scss';

class GroupsPanel extends React.Component {
  getGroups() {
    const groups = [];
    this.props.groups.forEach((group, i) => {
      groups.push(<BlocksGroup key={ i } { ...group } />);
    });
    return groups;
  }

  render() {
    return (
      <div className="Erato__GroupsPanel">
        <Header size="large">Bot Structure</Header>
        <Segment.Group>
          { this.getGroups() }
        </Segment.Group>
      </div>
    );
  }
}

GroupsPanel.propTypes = {
};

export function mapDispatchToProps(dispatch) {
  return {

  };
}

const mapStateToProps = createStructuredSelector({
  groups: makeSelectGroupsSorted(),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupsPanel);