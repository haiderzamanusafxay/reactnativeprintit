import React from 'react';
import App from './App';
import {store} from './src/store/store';
import {Provider} from 'react-redux';

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Main;
