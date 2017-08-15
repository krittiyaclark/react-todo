var React = require('react');
var ReactDOM = require('react-dom');

//Create component
var TodoCompnent = React.createClass({
    render: function(){
        return(
            <h1>Hello</h1>
        );
    }
});

// Put component into html page
ReactDOM.render(<TodoCompnent />, document.getElementById('todo-wrapper'));
