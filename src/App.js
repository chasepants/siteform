import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Route, BrowserRouter as Router, Switch,
} from "react-router-dom";


/*COMPONENTS*/
import DomainSelectorPage from './components/domains/DomainSelectorPage';
import TemplateSelector from './components/templateSelection/TemplateSelector';
import SiteForm from './components/forms/SiteFormPage';
import ImageSelector from './components/images/ImageSelector';
import HomePage from './components/HomePage';
import AccountPage from './components/account/AccountPage';
import PricingPage from './components/pricing/PricingPage';
import SelectPricing from './components/pricing/SelectPricing';
import MySites from './components/account/MySites';
import AccountForm from './components/account/AccountForm';
import PageNotFound from './PageNotFound';
import LoginPage from './components/login/LoginPage';
import RequireAuth from './components/wrappers/RequireAuth';
import AddHeader from './components/wrappers/AddHeader';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={AddHeader(HomePage)}/>
          <Route path='/domains' component={DomainSelectorPage}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/templates' component={TemplateSelector}/> 
          <Route path='/site-form' component={SiteForm}/>  
          <Route path='/images' component={ImageSelector}/>  
          <Route path='/account' component={AddHeader(RequireAuth(AccountPage))}/>
          <Route path='/sites' component={RequireAuth(MySites)}/>
          <Route path='/pricing' component={PricingPage}/>
          <Route path='/choose-plan' component={SelectPricing}/>
          <Route path='/account-form' component={AccountForm}/>
          <Route component={PageNotFound}/>
        </Switch> 
      </Router>
  );
}

export default App;
