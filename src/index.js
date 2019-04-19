import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import FullCal from './FullCal';
import ClassList from './ClassList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<FullCal />, document.getElementById('fullcal'));
ReactDOM.render(<ClassList />, document.getElementById('classlist'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
