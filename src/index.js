import React from 'react';
import ReactDOM from 'react-dom';
//import {BrowserRouter}  from 'react-router-dom';

import {AuthContextProvider } from './Context/AuthContext'

import App from './App';


ReactDOM.render(<React.StrictMode>
     <AuthContextProvider>
             <App />
     </AuthContextProvider>
         
</React.StrictMode>,document.getElementById('root'));