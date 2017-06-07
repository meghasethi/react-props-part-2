//Import the react liabrary
import React from 'react';

//Create List class. Here we have accessed properties using this.props and childrens using this.props.children
var List = React.createClass({
  render: function () {
    var titleText = 'Favorite ' + this.props.type;
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
});

// Import the component to use in another files
module.exports = List;

