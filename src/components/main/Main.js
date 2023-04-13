// Authors: Yohai Hen Levi and David Jedwabsky
import React, { Component } from 'react';
import style from './main.module.css';

import { persons } from '../person-data/person-data';
import Person from '../person-data/Person';
import Button from '../button/Button';
import PopupEdit from '../popup/PopupEdit';
import PopupShow from '../popup/PopupShow';
export default class Main extends Component {
  /**
   * Setting the phonebook properties
   */
  state = {
    // define the array persons
    allPersons: persons,
    // define the amount of persons in the array
    numOfContent: 4,
    search: '',
    editPopup: false,
    showPopup: false,
    addPopup: false,
    person2Display: {},
    newName: '',
    newPhone: '',
    newPicture: '',
    newAddress: '',
    newEmail: '',
    newComment: '',
    showAddPopup: false,
  };

  /**
   * This function deletes all contacts of the phonbook
   */
  deleteArray = () => {
    this.setState({
      allPersons: [],
      numOfContent: 0,
    });
  };

  /**
   * This function deletes element when we push the button delete
   * @param {*} personToDelete - contact to delete
   */
  delete = personToDelete => {
    this.setState(prevState => {
      let amountOfPersons = this.state.numOfContent;
      let currentArray = prevState.allPersons;
      amountOfPersons = amountOfPersons - 1;
      currentArray = currentArray.filter(el => el !== personToDelete);
      return {
        allPersons: currentArray,
        numOfContent: amountOfPersons,
      };
    });
  };

  /**
   * This function display the details of the contact
   * @param {*} el - contact information to display
   */
  showDetails = el => {
    this.setState(prevState => {
      return {
        showPopup: true,
        person2Display: el,
      };
    });
  };

  /**
   * This function edits the contact information
   * @param {*} el - contact to update
   */
  edit = el => {
    this.setState(prevState => {
      return {
        editPopup: true,
        person2Display: el,
      };
    });
  };

  /**
   * This function represents the save and close button in the edit popup
   */
  closeEditShow = () => {
    this.setState(prevState => {
      return {
        editPopup: false,
        showPopup: false,
        showAddPopup: false,
      };
    });
  };

  /**
   * This function searches for a contact in the phone book by key word
   * @param {*} event - the key word to search in the search input
   */
  handleSearch = event => {
    const searchValue = event.target.value;
    this.setState(prevState => {
      const filteredArray = prevState.allPersons.filter(el =>
        el.name.toLowerCase().includes(searchValue.toLowerCase()),
      );
      return {
        search: searchValue,
        numOfContent: filteredArray.length,
      };
    });
  };

  /**
   * This function adds a contact to the phone book
   */
  addPerson = () => {
    const { newName, newPhone, newPicture, newEmail, newComment } = this.state;
    if (!newName || !newPhone) {
      alert('Please provide a name and phone number')
      return;
    }
    if (this.state.allPersons.some(person => person.name === newName)) {
      alert(`${newName} is already in the contact list`);
      return;
    }
      const newPerson = {
        id: this.state.allPersons.length + 1,
        name: newName,
        phone: newPhone,
        picture: newPicture,
        email: newEmail,
        comment: newComment,
      };
      this.setState(prevState => ({
        allPersons: [...prevState.allPersons, newPerson],
        numOfContent: prevState.numOfContent + 1,
        newName: '',
        newAge: '',
        newPicture: '',
        showPopup: false,
        errorMessage: '',
      }));
    
  };
  // addPerson = () => {
  //   const { newName, newPhone, newPicture, newAddress, newEmail, newComment } = this.state;

  //  else {
  //     const newPerson = {
  //       id: this.state.allPersons.length + 1,
  //       name: newName,
  //       phone: newPhone,
  //       picture: newPicture,
  //       address:newAddress,
  //       email: newEmail,
  //       comment: newComment,
  //     };

  //     this.setState(prevState => ({
  //       allPersons: [...prevState.allPersons, newPerson],
  //       numOfContent: prevState.numOfContent + 1,
  //       newName: '',
  //       newPhone: '',
  //       newPicture: '',
  //       showPopup: false,
  //     }));
  //   }
  // };

  render() {
    /**
     * This funciton filters all the keywords into lowercase for the sort function
     */
    const filteredPersons = this.state.allPersons.filter(person =>
      person.name.toLowerCase().includes(this.state.search.toLowerCase()),
    );

    /**
     * This function sorts the contacts in alphabetic order using the filteredPerson function
     */
    const sortedPersons = filteredPersons.sort((a, b) =>
      a.name.localeCompare(b.name),
    );

    /**
     * This function displays all the phonebook(array) contacts including the buttons to the client
     */
    const displayPersons = sortedPersons.map(person => (
      <div className={style.persons} key={person.id}>
        <Person details={person} />
        <div className={style.internButt}>
          <Button
            text='Delete'
            fun={() => {
              this.delete(person);
            }}
          />
          <Button
            text='Edit'
            fun={() => {
              this.edit(person);
            }}
          />
          <Button
            text='Show Details'
            fun={() => {
              this.showDetails(person);
            }}
          />
        </div>
      </div>
    ));

    return (
      <main className={style.main}>
        {/* Search input */}
        <input
          className='search'
          type='text'
          pattern='[A-Za-z]+'
          title='Please enter a-z or A-Z letters'
          placeholder='Search for a name'
          value={this.state.search}
          onChange={this.handleSearch}
        />
        {/* Add contact input button */}
        <div>
          <button
            onClick={() => this.setState({ addPopup: true })}
            className={style.but}
          >
            Add Person
          </button>
        </div>
        {/* The popup of the addPerson input */}
        {this.state.addPopup && (
          <div className={style.popup}>
            <div className={style.popupContent}>
              <span
                className={style.close}
                onClick={() => this.setState({ addPopup: false })}
              >
                &times;
              </span>
              <h3>Add Person</h3>
              <input
                type='text'
                placeholder='Name'
                required
                value={this.state.newName}
                onChange={event =>
                  this.setState({ newName: event.target.value })
                }
              />
              <input
                type='number'
                placeholder='phone'
                required
                value={this.state.newPhone}
                onChange={event =>
                  this.setState({ newPhone: event.target.value })
                }
              />
              <input
                type='Email'
                name='email'
                placeholder='Email'
                value={this.state.newEmail}
                onChange={event =>
                  this.setState({ newEmail: event.target.value })
                }
              />
              <input
                type='text'
                placeholder='Picture URL'
                value={this.state.newPicture}
                onChange={event =>
                  this.setState({ newPicture: event.target.value })
                }
              />
              <textarea
                name='note'
                placeholder='Note'
                value={this.state.newComment}
                onChange={event =>
                  this.setState({ newComment: event.target.value })
                }
              ></textarea>
              <button
                onClick={() => {
                  this.addPerson();
                  this.setState({ addPopup: false });
                }}
              >
                Save
              </button>
            </div>
          </div>
        )}
        {/* Displaying the amount of contacts in the Phonebook */}
        <h2>{this.state.numOfContent} in the list</h2>
        {/* Displaying all the contacts of the phonebook array */}
        <div>{displayPersons}</div>
        {/* This button deletes all the contacts from the phonebook */}
        <div className={style.deleteAll}>
          <Button
            text='Delete List'
            fun={() => {
              this.deleteArray();
            }}
          />
        </div>
        {/* This Activates the popup for adding a new contact */}
        {this.state.showPopup && (
          <PopupShow
            person={this.state.person2Display}
            fun={() => {
              this.closeEditShow();
            }}
          />
        )}
        {/* Activates the edit popup */}
        {this.state.editPopup && (
          <PopupEdit
            person={this.state.person2Display}
            fun={() => {
              this.closeEditShow();
            }}
          />
        )}
      </main>
    );
  }
}
