import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch, 
  Route,
} from "react-router-dom";
import ApiForm from './components/ApiForm';
import SearchStarWarsApi from './components/SearchStarWarsApi';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ApiForm></ApiForm>
        <Switch>
          <Route excat path='/:type/:id'component={SearchStarWarsApi} ></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;