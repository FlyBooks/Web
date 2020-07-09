import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: ["大话西游", "情癫大圣"],
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.movies.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <button
          onClick={() => {
            this.addMovies();
          }}
        >
          添加电影
        </button>
      </div>
    );
  }

  addMovies() {
    this.setState({
      movies: [...this.state.movies, "盗梦空间"],
    });
  }
}
