import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Route, BrowserRouter as Router, Switch,
} from "react-router-dom";

/*COMPONENTS*/
import NavigationBar from './components/common/NavigationBar';
import Header from './components/common/Header';
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

function App() {

  return (
      <Router>
        <NavigationBar/>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/domains' component={DomainSelectorPage}/>
          <Route path='/templates' component={TemplateSelector}/> 
          <Route path='/site-form' component={SiteForm}/>  
          <Route path='/images' component={ImageSelector}/>  
          <Route path='/account' component={AccountPage}/>
          <Route path='/sites' component={MySites}/>
          <Route path='/pricing' component={PricingPage}/>
          <Route path='/choose-plan' component={SelectPricing}/>
          <Route path='/account-form' component={AccountForm}/>
          <Route component={PageNotFound} />
        </Switch> 
      </Router>
  );
}

export default App;
