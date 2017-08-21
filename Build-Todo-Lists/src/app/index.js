var React = require('react');
var ReactDOM = require('react-dom');
//import { Router, Route, browserHistory, Link } from 'react-router';


//Create a component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'et some cheese', 'play sketboard']
        }
    }, //getInitialState
    
    render: function() {
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(<TodoItem key={index} item={item} onDelete={this.onDelete} />);
        }.bind(this));
        return(
            <div id="todo-list">
                 <link to={"/about"}>About</link>
                 <p>The busiest people have the most leisure..</p>
                 <ul>{todos}</ul>
                 <AddItem onAdd={this.onAdd} />    
            </div>
        );
    }, //render

    //Custom functions
    onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !==val;
        });
        this.setState({
            todos: updatedTodos
        });
    },

    onAdd: function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    }
});

      
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));

