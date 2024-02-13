// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './components/App';
// import { Provider } from 'react-redux';

// // This method is deprecated
// // import {createStore} from 'redux';

// import configureStore from 're'
// import { rootReducer } from './services/Reducers/index.js';



// console.warn("data store",store);

// //creating store 
// //const store = createStore(rootReducer)
// //above code is not working coz createStore deprecated 


// // Create the Redux store
// const store = configureStore({
//   reducer: rootReducer
// });


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')

// );


// i am using this updated code coz above one createStore is depreciated 

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import rootReducer from './services/Reducers/index.js';
const store = createStore(rootReducer);


// Create the Redux store
// const store = configureStore({
//   reducer: rootReducer
// });

console.warn("data store", store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
