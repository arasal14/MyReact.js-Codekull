import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/homePage/Header';
import Navbar from './components/homePage/Navbar';
import Form from './components/form/Form';
import IncrementDecrementCounter from './components/homePage/IncrementDecrementCounter';
import TableHeader from './components/homePage/TableHeader';
import CommonTable from './components/homePage/common/CommonTable';
import { Modal } from '@mui/material';
import ModalTable from './components/homePage/common/ModalTable';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<Navbar/>*/}
    {/* <Header/> */}
    <Form/>
    {/*<IncrementDecrementCounter/>*/}
    {/*<TableHeader/>*/}
    {/* <ModalTable/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
