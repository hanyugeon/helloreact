import React, { Component } from 'react';
import Content from "./components/Content";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import './App.css';

class App extends Component { // 유사 JS, JS가 아니다.
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web~"></Subject>
        <Subject title="React" sub="For UI!"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language~~"></Content>
      </div>
    );
  }
}

export default App;