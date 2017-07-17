/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Route } from 'react-router';
import GroupsPanel from 'containers/GroupsPanel';
import NotFoundPage from 'containers/NotFoundPage';
import './index.scss';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <GroupsPanel />
        <Route path="/hm" component={NotFoundPage}/>
        { React.Children.toArray(this.props.children) }
      </div>
    );
  }
}
