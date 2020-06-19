import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from "./containers/HomePage";
import ContactPage from "./containers/ContactPage";
import AboutPage from "./containers/AboutPage";
import ErrorPage from "./containers/ErrorPage";
import Layout from './containers/Layout'
import NavBar from "./components/NavBar";
class App extends Component {
 render(){
   return (
       <React.Fragment>
           <Router>
           <NavBar/>
           <Layout>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/about' component={AboutPage}/>
                    <Route path='/contact' component={ContactPage}/>
                    <Route component={ErrorPage}/>

                </Switch>
           </Layout>

           </Router>
       </React.Fragment>
   )
 }
}

export default App;
