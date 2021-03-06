import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Contactus from './Components/Contactus/Contactus';
import Instructors from './Components/Instructors/Instructors';
import Error from './Components/Error/Error';
import Footer from './Components/Shared/Footer/Footer';
import SrvcDetail from './Components/SrvcDetail/SrvcDetail';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

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
            <PrivateRoute path="/instructors">
              <Instructors></Instructors>
            </PrivateRoute>
            <PrivateRoute path="/contactus">
              <Contactus></Contactus>
            </PrivateRoute>
            <PrivateRoute path="/service/:srvcId">
              <SrvcDetail></SrvcDetail>
            </PrivateRoute>
            <Route path="/signin">
              <Signin></Signin>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
