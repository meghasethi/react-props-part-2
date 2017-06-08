//Import the react liabraies
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';
import List from './List.js';

// Create component class named App and call the List and Button class. We have passed event handler as props and gave default props as well
var App = React.createClass({
	
  //set the default props using getDefaultProps method
  getDefaultProps : function(){
    return { text: 'Click me' };
  },
  // Create click handler function
  handleClick: function () {
    alert('I am an event handler.'
    + ' I have been called.');
  },
  
  render: function () {
    return (<div>
        <List type='Fruit'>
          <li>Apple</li>
          <li>Mango</li>
        </List>
        <List type='Vegetable'>
          <li>Cauliflower</li>
        </List>
        <Button buttontext = {this.handleClick} value={this.props.text}/>
        </div>
      );
  }
});

// Rendering App component instance in html body
ReactDOM.render(
  <App />,
  document.getElementById('app')
);

