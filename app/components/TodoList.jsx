var React= require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
 render: function () {
   var {todos} = this.props;
   var renderTodos = () =>{   

     if(todos.length === 0){
       return (
         <p className = "container__message"> Nothing to Do </p>
       );
     }
     return todos.map((todo) => {
       return (
         <Todo key={todo.id} {...todo} onToggle= {this.props.onToggle} /> // using the spread operator istead of text={todo.text}
       );
     });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
