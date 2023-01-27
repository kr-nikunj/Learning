import React from 'react';
import ReactDOM from 'react-dom/client';
import  {App}  from './app';
import {ThemeProvider,CSSReset} from '@chakra-ui/react';


ReactDOM.render(
  <React.StrictMode>
    <h1>Hiii</h1>
    <ThemeProvider>
      <CSSReset>
        <App/>
      </CSSReset>
    </ThemeProvider>
  </React.StrictMode>  
);
