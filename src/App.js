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
// import configureStore from "./configureStore";
// const { store } = configureStore()
// console.log(store.getState())

 class App extends Component {

UNSAFE_componentWillMount() {
    // Get fetch call to localhost:3000/projects, adds to state
    this.props.axiosGetProjects()
}

    state = {
        projects:{
            title: '',
            images: [],
            desc: '',
            id: null,
            //id tbd
            details:[],
           githubRepoUrl: '',
            demoVideoUrl: ''
            //details is an array of strings, to be listed
        }
    }


    render(){

   return (

           <Router>
           <NavBar/>
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