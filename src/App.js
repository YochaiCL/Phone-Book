// Authors: Yohai Hen Levi and David Jedwabsky
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header h1Heading='Phone Book' />
        <Main />
        <Footer name='Yochai Chen Levi & David Jedwabsky' />
      </div>
    );
  }
}
