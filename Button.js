//Import the react liabrary
import React from 'react';

//Create Button class. Here we have accessed click event & default props using this.props
var Button = React.createClass({
  render: function () {
    return (
      <div>
      <h1>{this.props.value}</h1>
      <button onClick={this.props.buttontext}>
        {this.props.value}
      </button>
      </div>
    );
  }
});

// Import the component to use in another files
module.exports = Button;
