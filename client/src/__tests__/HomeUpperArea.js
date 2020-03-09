import React from 'react';
import ReactDOM from 'react-dom';
import HomeUpperArea from "../component/HomeUpperArea";

it('Render Upper Component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HomeUpperArea/>, div);
  });