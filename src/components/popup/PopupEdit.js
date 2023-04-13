// Authors: Yohai Hen Levi and David Jedwabsky
import React from 'react';
import css from './popup.module.css';

class PopupEdit extends React.Component {
  render() {
    return (
      <div className={css.popup}>
        <h2>write in the inputs the new change:</h2>
        <p>Name: {this.props.person.name}</p>
        <input
          className='changeInput'
          type='text'
          pattern='[A-Za-z]+'
          title='Please enter a-z or A-Z letters'
          placeholder='write new name'
          onChange={event => (this.props.person.name = event.target.value)}
        />

        <p>phone: {this.props.person.phone}</p>
        <input
          type='number'
          placeholder='phone'
          onChange={event => (this.props.person.phone = event.target.value)}
        />
        <p>address: {this.props.person.address}</p>
        <input
          className='changeInput'
          type='text'
          pattern='[A-Za-z]+'
          title='Please enter a-z or A-Z letters'
          placeholder='write new address'
          onChange={event => (this.props.person.address = event.target.value)}
        />
        <p>email: {this.props.person.email}</p>
        <input
          type='Email'
          name='email'
          placeholder='Email'
          onChange={event => (this.props.person.email = event.target.value)}
        />
        <p>comment: {this.props.person.comment}</p>
        <textarea
          name='note'
          placeholder='Note'
          onChange={event => (this.props.person.comment = event.target.value)}
        ></textarea>
        <img src={this.props.person.picture} alt='myPicture' />

        <button onClick={this.props.fun}>Save & Close</button>
      </div>
    );
  }
}

export default PopupEdit;
