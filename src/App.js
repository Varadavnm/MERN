
import './App.css';
// import { ReactDOM } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './components/Routing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from './components/common/loader/Loader';
// import {successToast, errorToast} from './pluggins/toast/Toast'
import 'bootstrap/dist/css/bootstrap.min.css';
// import store from './redux/sotre'
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Home from './Pages/AuthPage/Home/Home';
import { useSelector } from 'react-redux';
function App() {
  const { showLoader } = useSelector((store)=>store.general); // Access state properly

  // successToast("Hi Hello!!!!!"); // Example usage of successToast
  // errorToast("Something went wrong!!!!"); // Example usage of errorToast

  return (
    <div className="App">
    <ToastContainer />
    {showLoader && <Loader />}
    <Router>    
      <Routing />
    </Router>
  </div>
  );
}

export default App;