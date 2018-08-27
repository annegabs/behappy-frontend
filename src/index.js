import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App texto="Olá mundo!" />,
  document.querySelector("root")
);
registerServiceWorker();
