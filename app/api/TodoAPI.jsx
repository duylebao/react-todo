var $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try{
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }
    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter( (todo) => {
      return !todo.completed || showCompleted;
    });
    // filter by searchText
    filteredTodos = filteredTodos.filter( (todo) => {
      if (searchText.length === 0){
        return true;
      }
      return todo.text.toLowerCase().indexOf( searchText ) !== -1;
    });
    // sort todos with non-completed first
    filteredTodos.sort( (a, b) =>{
      if (!a.completed && b.completed) {
        return -1;
      }
      if (a.completed && !b.completed){
        return 1;
      }
      return 0;
    });
    return filteredTodos;
  }
};
