import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './pages/index/index';
import TodoList from './components/TodoList/index';
import './App.css';


class App extends React.Component{
    constructor(props){
        super(props);

    }
  render() {

      return(
          <Router>
              <div>
                  <Route exact path='/' component={Index}/>
                  <Route path='/TodoList' component={TodoList}/>
              </div>
          </Router>
      )
  }
}

export default App;
