'use strict';
// import BabelPolyfill from 'babel/polyfill'
// import 'babel-polyfill/dist/polyfill';

// import React from './../lib/react/react';
// import ReactDOM from './../lib/react/react-dom';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('react', document, document.getElementById('root'));
_reactDom2.default.render(_react2.default.createElement(
  'h1',
  null,
  'Hello, world!'
), document.getElementById('root'));
//# sourceMappingURL=app.js.map
