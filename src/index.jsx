import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './routers';
import './index.less';

const render = (Component) => {
  ReactDOM.render(
      <Component />
    ,document.getElementById('root')
  );
};

render(AppRouters);
