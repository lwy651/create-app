import React from 'react';
import ReactDOM from 'react-dom';

import AppRouters from './routers';

const render = (Component) => {
  ReactDOM.render(
      <Component />
    ,document.getElementById('root')
  );
};

render(AppRouters);
