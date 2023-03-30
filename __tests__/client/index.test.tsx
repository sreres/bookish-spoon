import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from '../../src/client/index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.createRoot(div).render(<App />);
  //ReactDOM.unmountComponentAtNode(div);
});
