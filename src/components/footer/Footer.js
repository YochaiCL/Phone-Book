// Authors: Yohai Hen Levi and David Jedwabsky
import { Component } from 'react';
import styles from './footer.module.css';

export default class Footer extends Component {
  render() {
    const author = this.props.name;
    const date = new Date().getFullYear();
    return (
      <footer className={styles.pText}>
        <p>
          &copy; {date} {author}
        </p>
      </footer>
    );
  }
}
