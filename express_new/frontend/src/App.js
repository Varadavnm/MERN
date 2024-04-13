
import './App.css';
// import { ReactDOM } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './components/Routing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from './components/common/loader/Loader';
import {successToast, errorToast} from './pluggins/toast/Toast'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/common/Navbar/Navbar';
import Home from './Pages/AuthPage/Home/Home';
function App() {
  successToast("Hi Hellow!!!!!")
  errorToast("Something went wrong!!!!")
  return (
    <div>
     
    <div className="App">
      <ToastContainer />
    <Loader />
    <Router>
    <Home />
      <Routing/>
      </Router>
    </div>
    
    </div>
  );
}

export default App;

