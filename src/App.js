import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import './App.css';
import AddService from './components/Home/AddService/AddService';
import Booking from './components/Home/Booking/Booking';
import Footer from './components/Home/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Home/Login/Login';
import PrivateRoute from './components/Home/Login/PrivateRoute/PrivateRoute';
import ManageServices from './components/Home/ManageServices/ManageServices';
import NotFound from './components/Home/NotFound/NotFound';
import Service from './components/Home/Service/Service';
import Services from './components/Home/Services/Services';
import Header from './components/Home/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            
              <Services></Services>
          </Route>
          
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/booking/:serviceId">
            <Booking></Booking>
          </PrivateRoute>
          
          {/* <Route path="/addService">
            <AddService></AddService>
          </Route> */}
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/manageServices">
            <ManageServices></ManageServices>
          </PrivateRoute>
          <Route path="*">
           <NotFound></NotFound>
          </Route>

          </Switch>
          <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
