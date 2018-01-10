import React, { Component } from "react";

import "./styles/todoItem.css";
import Button from "./Button";
import NewTodoFormToggle from "./NewTodoFormToggle";
import EditMode from "./EditMode";

export default class TodoItem extends Component {
  handleRemove = () => {
    this.props.handleRemove(this.props.data.id);
  };

  handleToggleEdit = () => {
    this.props.handleToggleEdit(this.props.data.id);
  };

  handleUpdate = () => {
    this.props.handleUpdate(this.props.data.id);
  };

  handleChangeItem = event => {
    this.props.handleChangeItem(event);
  };

  handleChangeDeadline = event => {
    this.props.handleChangeDeadline(event);
  };

  handleToggleDone = id => {
    this.props.handleToggleDone(id);
  };

  render() {
    return (
      <li className="todoItem">
        <NewTodoFormToggle
          handleChangeDeadline={this.handleChangeDeadline}
          handleToggleEdit={this.props.handleToggleEdit}
          handleChangeItem={this.handleChangeItem}
          data={this.props.data}
          isEditing={this.props.isEditing}
          toBeUpdatedDeadline={this.props.toBeUpdatedDeadline}
          toBeUpdatedItem={this.props.toBeUpdatedItem}
          handleToggleDone={this.handleToggleDone}
        />
        <div className="manageTodo">
          <EditMode
            toBeUpdatedItem={this.props.toBeUpdatedItem}
            toBeUpdatedDeadline={this.props.toBeUpdatedDeadline}
            handleToggleEdit={this.handleToggleEdit}
            handleUpdate={this.handleUpdate}
            handleCancelEdit={this.props.handleCancelEdit}
            isEditing={this.props.isEditing}
          />
          <Button buttonContent="remove" onClick={this.handleRemove} />
        </div>
      </li>
    );
  }
}
