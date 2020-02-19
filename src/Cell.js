import React, { Component } from 'react';
 
export default class Cell extends Component {
 
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
 
  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }
 
  render() {
    return (
      <div onClick={this.handleClick} className="cell"
           style={{backgroundColor: this.state.color}}
      >
      </div>
    )
  }
 
}

// We would like to implement the following behavior: The ColorSelector component provides the user interface to select a specific color. When a particular Cell is clicked, its background color becomes whatever the current selected color is. To achieve this behavior, we need some way for Cell to know about the currently selected color and we also need a way for ColorSelector to modify the selected color based on user input. To do this, we will have the parent component, Matrix, keep track of the current selected color.

// matrix 
// -colorselector
// -cell

//function somewhere (in matrix) that contains the color selector or state? 
//props in matrix about handle click for cell 
//in cell call onclicke function to change color
//