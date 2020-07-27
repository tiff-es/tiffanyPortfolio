import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from "./containers/HomePage";
import ContactPage from "./containers/ContactPage";
import AboutPage from "./containers/AboutPage";
import ErrorPage from "./containers/ErrorPage";
import Layout from './containers/Layout'
import NavBar from "./components/NavBar";
import ProjectsPage from "./containers/ProjectsPage";
import {connect, Provider} from "react-redux";
import {axiosGetProjects} from "./actions/project";

 class App extends Component {

UNSAFE_componentWillMount() {
    // 1.) Get fetch call to localhost:3000/projects, adds to state
    this.props.axiosGetProjects()

    // telling conditional rendering props have been populated
    this.setState({propsPopulated: true})
}
    state = {
        propsPopulated: false
        // for conditional rendering of props upon population
    }

    render(){

   return (

           <Router>
           {/*  2.)  Pass projects down to NavBar via props */}
           <NavBar projects={this.props.projects} populated={this.state.propsPopulated}/>
           <Layout>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/about' component={AboutPage}/>
                    <Route path='/contact' component={ContactPage}/>
                    <Route path='/projects' component={ProjectsPage}/>
                    <Route component={ErrorPage}/>

                </Switch>
           </Layout>

           </Router>
 )
 }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects.projects
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        axiosGetProjects: (projects) => {
            dispatch(axiosGetProjects(projects))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);