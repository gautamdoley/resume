import React from 'react';
import './App.css';
import './index.css';
import Name from './components/fullName'
import Contacts from './components/contacts'
import Objective from './components/objective'
import Education from './components/education'
import Additional from './components/additional'
import Project from './components/projectHandle'
import InternshipExp from './components/internship'
import Knowledge from './components/knowledge'
import Extra from './components/extra'
import Personal from './components/p_details'
import Declaration from './components/declaration'

class App extends React.Component{

  render(){
    return (
      <div className="body-div">
        <Name />
        <Contacts />
        <Objective />
        <Education />
        <Additional/>
        <Project />
        <InternshipExp />
        <Knowledge />
        <Extra />
        <Personal />
        <Declaration />
      </div>
      );
  }
  
}
export default App;
