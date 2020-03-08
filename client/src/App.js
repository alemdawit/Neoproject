import React from 'react';
import { BrowserRouter }  from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/';
import Footerbar from './components/footerbar/';
import Layout from './components/Layout';
import Routes from './routes';
import './App.css';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Layout>
        <Navbar />
        <Routes />
        <Footerbar />
      </Layout>
    </div>
    </BrowserRouter>
  );
}

export default App;
