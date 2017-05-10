import React, { Component } from 'react';
import styles from './Input.less';

class Input extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.placeText);
    this.state = {placeText:this.props.placeText};
  }
  render() {
    return (
      <div className={styles.web_cell}>
        <input className = {styles.web_input} type="text" placeholder={this.state.placeText}/>
      </div>
    );
  }
}

export default Input;