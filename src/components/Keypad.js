// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {
  enter = () => {console.log('Entering password...')}

  render () {
    return (
      <form>
        <input type="password" onKeyUp = {this.enter}/>
      </form>
    )
  }
}
