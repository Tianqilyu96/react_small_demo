import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  search = () => {
    //get user input
    //const text = this.inputBox.value;
    //连续解构赋值 const {inputBox:{value}} = this;
    //重命名为text
    const {
      inputBox: { value: text },
    } = this;
    //change isFirst before send state
    this.props.setAppState({isFirst:false, isLoading:true});

    //send request
    axios
      .get(`http://localhost:3000/search/users?q=${text}`)
      .then((response) => {
        this.props.setAppState({users:response.data.items,isLoading:false});
      })
      .catch((error) => this.props.setAppState({err:error}));
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => (this.inputBox = c)}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
