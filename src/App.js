import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Route, BrowserRouter as Router, Switch,
} from "react-router-dom";

/*COMPONENTS*/
import NavigationBar from './components/common/NavigationBar';
import Header from './components/common/Header';
import DomainSelectorPage from './components/domainSelection/DomainSelectorPage';
import TemplateSelector from './components/templateSelection/TemplateSelector';
import SiteForm from './components/siteForm/SiteFormPage';
import PageNotFound from './PageNotFound';


function App() {
  return (
      <Router>
        <NavigationBar/>
        <Header/>
        <Switch>
          <Route exact path='/' component={DomainSelectorPage}/>
          <Route path='/templates' component={TemplateSelector}/> 
          <Route path='/site-form' component={SiteForm}/>  
          <Route component={PageNotFound} />
        </Switch> 
      </Router>
  );
}

export default App;
