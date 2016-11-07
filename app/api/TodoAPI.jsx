var $ = require('jquery');

module.exports = {
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
