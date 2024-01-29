import { RouterPage } from 'pages/RouterPage';
import React from 'react';
import { withProviders } from './providers';
import './styles/normalize.scss';

const App = () => (
  <div className="wrapper">
    <RouterPage />
  </div>
);

export default withProviders(App);
