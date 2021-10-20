
import './App.css';
import Header from './Component/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import ServiceDetails from './Component/Home/ServiceDetails/ServiceDetails';
import Login from './Component/Firebase/Login';
import PrivetRoute from './Component/PrivetRoute/PrivetRoute';
import AuthProvider from './Context/AuthProvider';
// import Register from './Component/Firebase/Registration/Register'
import About from './Component/About/About';
import Departments from './Component/Departments/Departments';
import NotFound from './Component/NotFound/NotFound';
// import AuthProvider from './Context/AuthProvider'
import Service from '../src/Component/Service/Service'
import Contact from './Component/Contact/Contact';
import Register from './Component/Firebase/Registration/Register';
import Shop from './Component/Shop/Shop';
function App() {
  return (
    <div className="App">
     <AuthProvider>
         
     <BrowserRouter>
    <Header></Header>
    <Switch>
      <Route exact path='/'>
       <Home></Home>
      </Route>
      <Route path='/home'>
       <Home></Home>
      </Route>
      <Route path='/login'>
       <Login></Login>
      </Route>
      <Route path='/about'>
       <About></About>
      </Route>
      <Route path='/about'>
       <About></About>
      </Route>
      <Route path='/department'>
       <Departments></Departments>
      </Route>
      <Route path='/service'>
       <Service></Service>
      </Route>
      <Route path='/contact'>
       <Contact></Contact>
      </Route>
      <Route path='/register'>
       <Register></Register>
      </Route>
      <Route path='/shop'>
       <Shop></Shop>
      </Route>
     
      <PrivetRoute path='/serviceDetails/:id'>
        <ServiceDetails></ServiceDetails>
      </PrivetRoute>

      <Route path="*">
        <NotFound></NotFound>
      </Route>
     
    </Switch>
    </BrowserRouter>


     </AuthProvider>
    </div>
  );
}

export default App;
