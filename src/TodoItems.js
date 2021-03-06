import React, {Component} from 'react';



class TodoItems extends Component {

  constructor(props, context) {
    super(props, context);
    console.log('props: ', props);
    console.log('context: ', context);

    this.createTasks = this.createTasks.bind(this);
  }


  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return (
      <li className="list-group-item">
        <div>
          <span>{item.text}</span>
          <button type="button" className="close" onClick={() => this.delete(item.key)} key={item.key}>&times;</button>
        </div>
      </li>
    );
  }


  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
}


export default TodoItems;
