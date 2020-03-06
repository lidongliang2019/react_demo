import React,{Component} from 'react';
import {BrowserRouter as Router,Route,} from 'react-router-dom';
import App from '../App';
import TodoList from '../components/TodoList/index';
// import Nav from '../Nav/Nav';

class Routers extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    handle=()=> {
        console.log('什么毛病');
    };
    render() {
        return(
           <Router>
               <div>
                   <Nav />
                   <Route exact path="/" component={App}/>
                   <Route path="/TodoList" component={TodoList}/>
               </div>
           </Router>,
               document.getElementById("root")
        )
    }
}

export default Routers;
