import './commonStyle/_index.scss';
import React from 'react';
import store from "./store/store"
import App from "./App";
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
  </React.StrictMode>
);



