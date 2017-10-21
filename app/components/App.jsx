import React from 'react';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      	<div>
      		<Main />
      	</div>
      </BrowserRouter>
    );
  }
}
