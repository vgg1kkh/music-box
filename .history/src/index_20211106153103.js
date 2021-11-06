import React from 'react';
import ReactDOM from 'react-dom';


import { Provider } from 'react-redux';
import store from '@/store';
import App from './App';
import "@/assets/css/reset.css"


ReactDOM.render(
<Provider
<App />,
document.getElementById('root')
);


