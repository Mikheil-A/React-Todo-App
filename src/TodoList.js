import React, {Component} from 'react';
import TodoItems from "./TodoItems";
import "./TodoList.css";


class TodoList extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      items: []
    };

    // this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }


  addItem(e) {
    var itemArray = this.state.items;

    if (this._inputElement.value !== "") {
      itemArray.unshift({
        text: this._inputElement.value,
        key: Date.now()
      });

      this.setState({
        items: itemArray
      });

      this._inputElement.value = "";
    }

    console.log(itemArray);

    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }


  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <h1>React Todo App</h1>
          <h3>Todo's count: {this.state.items.length}</h3>
          <form onSubmit={(e) => this.addItem(e)} className="form-inline">
            {/*<form onSubmit={this.addItem} className="form-inline">*/}
            <input type="text" ref={(a) => this._inputElement = a} className="form-control"
                   placeholder="Enter a task"></input>
            <button type="submit" className="btn btn-default">Add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
                   delete={this.deleteItem}/>
      </div>
    );
  }
}


export default TodoList;
