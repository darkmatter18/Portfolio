import React from 'react';
import ReactDOM from 'react-dom';
import HomeUpperArea from "../pages/Home/HomeUpperArea";

it('Render Upper Component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HomeUpperArea/>, div);
  });