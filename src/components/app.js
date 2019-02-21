import React, { Component } from "react";
import MyForm from "./MyForm";

export default class App extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps", arguments);
    return state;
  }

  static getDerivedStateFromError() {
    console.log("getDerivedStateFromError", arguments);
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log("in constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate", arguments);
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", arguments);
  }

  getSnapshotBeforeUpdate(thisProp, nextProp) {
    console.log("in get snapshot before update", thisProp, nextProp);
  }

  render() {
    console.log("in render");
    return (
      <div>
        <MyForm />
      </div>
    );
  }

  componentDidCatch() {
    console.log("componentDidCatch", arguments);
  }
}
