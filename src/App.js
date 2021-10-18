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

function App() {
  return (
    <div className="App">
      {/* header section */}
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/instructors">
            <Instructors></Instructors>
          </Route>
          <Route path="/contactus">
            <Contactus></Contactus>
          </Route>
          <Route path="/service/:srvcId">
            <SrvcDetail></SrvcDetail>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
