import React, { Component } from "react";
import Landing from './Landing';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header";
import {connect} from 'react-redux';
import * as actions from '../actions'; // this will  by default import index.js by convention inside actions folder
//Browser Router is the logic that helps in routing things.
//Browser Router can take max 1 child element.

//const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;



class App extends Component {
   //for initial ajax requests react recommends using componentDidMount and not componentWillMount
   componentDidMount() {
     this.props.fetchUser();
   }
   

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            {/* For always visible things we can directly use it here */}
            <Header />
            <Route exact path="/" component={Landing} />
            {/* we can ignore exact={true}
           Specifying exact will disallow greedy matching of routes.
           <Route exact={true} path="/" component={Landing} /> */}
            <Route path="/Header" component={Header} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null,actions)(App);
