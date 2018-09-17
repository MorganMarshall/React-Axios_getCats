import React, { Component } from "react";

import axios from "axios";

export default class Randomcats extends React.Component {
 
  state = {
    persons: [],
    newpersons: []
  };

  handleClick() {
    axios.get(`https://aws.random.cat/meow`).then(res => {
    
return res.data
   
    }).then(function(data) {
      document.getElementById('catpic').innerHTML = `<img src=${data.file} />` 
    });
  }

  render() {
    return (
      <div className="container">
      <div id="catpic">
        <img  className="" style={{ maxWidth: "500px", boxShadow: '0px 3px 15px rgba(0,0,0,0.3)' }} src={this.state.persons.file} />
        </div>
        <br/>    <br/>
        <button onClick={this.handleClick}>
Get news meowmees
        </button>
        <p>Share-Link: <a src={this.state.persons.file} target="_blank"  ><code> {this.state.persons.file} </code></a> </p>
      </div>
    );
  }
}
