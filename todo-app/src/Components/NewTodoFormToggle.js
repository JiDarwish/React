import React, { Component, Fragment } from "react";

import InputField from "./InputField";

export default class NewTodoFormToggle extends Component {
  handleToggleDone = id => {
    this.props.handleToggleDone(id);
  };
  render() {
    if (this.props.isEditing) {
      return (
        <Fragment>
          <InputField
            type="text"
            className="todoDate input"
            value={this.props.toBeUpdatedDeadline}
            handleChange={this.props.handleChangeDeadline}
          />
          <InputField
            type="text"
            className="todoText input"
            value={this.props.toBeUpdatedItem}
            handleChange={this.props.handleChangeItem}
          />
        </Fragment>
      );
    }
    const { text, deadline, done, id } = this.props.data;
    const inputId = `item${id}`;
    return (
      <Fragment>
        <div className="todoDate">
          <span>{deadline}</span>
          <label
            htmlFor={inputId}
            className={done ? "markDone" : "markUndone"}
          />
          <input
            className="checkDone"
            type="checkbox"
            id={inputId}
            onClick={() => this.handleToggleDone(this.props.data.id)}
          />
        </div>
        <div className="todoText">
          <p className={done ? "done" : "notDone"}>{text}</p>
        </div>
      </Fragment>
    );
  }
}
