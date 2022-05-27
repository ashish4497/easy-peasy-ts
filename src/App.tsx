import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavigationRoot from './navigation/NavigationRoot';
import {StoreProvider  }  from 'easy-peasy';
import Store from './store/store';

const StoreProviderOverride = StoreProvider as any;

function App() {
  return (  
    <>
      <StoreProviderOverride store={Store}>
      <BrowserRouter>
        <NavigationRoot/>
      </BrowserRouter>   
      </StoreProviderOverride> 
    </>
  );
}

export default App;
