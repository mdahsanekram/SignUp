import './App.css';
import {BrowserRouter,Switch ,Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';
import Home from './components/Home';



function App() {
    return (
  
      <BrowserRouter>
      <div className="App">
  
      <Switch>
        <Route path="/" exact component={LoginForm}></Route>
        <Route path="/SignUp" exact component={SignUp} ></Route>
        <Route path="/Home"  exact component={Home} ></Route>
        </Switch>
      </div>
  
      </BrowserRouter>
    );
  }
  
  export default App;
