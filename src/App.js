import React, { Component } from 'react';
import './App.css';

// 컴포넌트(Component를 만드는 부분)
class Subject extends Component { // Subject라는 Component를 만들겠다.
  render() {
    return (
      <header>
          <h1>WEB</h1>
          world wide web!
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
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    );
  }
}

class App extends Component { // 유사 JS, JS가 아니다.
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;