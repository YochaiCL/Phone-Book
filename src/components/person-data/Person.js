// Authors: Yohai Hen Levi and David Jedwabsky
import { Component } from 'react';
import style from './person.module.css';

export default class Person extends Component {
  render() {
    const { img, name } = this.props.details;

    return (
      <section className={style.section}>
        <article className={style.article}>
          <img className={style.img} src={img} alt='person' width='150' />
          <div>
            <p>{name}</p>
          </div>
        </article>
      </section>
    );
  }
}
