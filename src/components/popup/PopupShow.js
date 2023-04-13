// Authors: Yohai Hen Levi and David Jedwabsky
import React from 'react';
import css from './popup.module.css';

class PopupShow extends React.Component {
  render() {
    return (
      <div className={css.popup}>
        <p>Name: {this.props.person.name}</p>
        <p>phone: {this.props.person.phone}</p>
        <p>address: {this.props.person.address}</p>
        <p>email: {this.props.person.email}</p>
        <p>comment: {this.props.person.comment}</p>
        <img src={this.props.person.picture} alt='myPicture' />

        <button onClick={this.props.fun}>Close</button>
      </div>
    );
  }
}

export default PopupShow;
