import { React, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme/theme'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Detail_view from './views/Detail_view/Detail_view';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/detail' element={<Detail_view />} />
        <Route path='*' element={<App />} />
      </Routes>
    </ChakraProvider>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
