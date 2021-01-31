import React, { Component } from 'react';
import './App.css';

// 컴포넌트(Component를 만드는 부분)
class Subject extends Component { // Subject라는 Component를 만들겠다.
  render() {
    return (
      <header>
          <h1>{this.props.title}</h1>
          {this.props.sub}
      </header>
    );
  }
}

class TOC extends Component {
  render() {
    return(
      <nav>
          <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="1.html">CSS</a></li>
            <li><a href="1.html">JavaScript</a></li>
          </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

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