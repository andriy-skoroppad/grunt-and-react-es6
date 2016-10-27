'use strict'; 
// import BabelPolyfill from 'babel/polyfill'
// import 'babel-polyfill/dist/polyfill';

// import React from './../lib/react/react';
// import ReactDOM from './../lib/react/react-dom';

import React from 'react';
import ReactDOM from 'react-dom';

console.log('react', document, document.getElementById('root'))
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
