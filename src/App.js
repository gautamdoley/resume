import React from 'react';
import './App.css';
import './index.css';
import Name from './components/fullName'
import Contacts from './components/contacts'
import Objective from './components/objective'
import Education from './components/education'
import Additional from './components/additional'
import Project from './components/projectHandle'

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
      </div>
      );
  }
  
}
export default App;
