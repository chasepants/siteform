import './App.css';
import {
  Route, BrowserRouter as Router, Switch,
} from "react-router-dom";

/*COMPONENTS*/
import DomainSelector from './components/DomainSelector';
import TemplateSelector from './components/TemplateSelector';
import SiteForm from './components/SiteForm';


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={DomainSelector}/>
          <Route path='/templates' component={TemplateSelector}/> 
          <Route path='/site-form' component={SiteForm}/> 
        </Switch>              
      </Router>
  );
}

export default App;
