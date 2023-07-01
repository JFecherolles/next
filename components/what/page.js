import { Fragment } from 'react';
import classes from './what.module.css';
import mealImage from '../assets/mealsImage.jpg';
import Header from '../Header';
import Image from 'next/image';
import HeaderCartButton from './HeaderCartButton';

export default function Page(props) {
  return (
    <Fragment>
        <div className={classes.header}>
            <h1>Menu</h1>
            <HeaderCartButton onClick={props.onShowCart}/>        
        </div>
        <div className={classes['main-image']}>
            <Image src={mealImage} alt="A table full of delicious food!" />
        </div>
    </Fragment>
  );
}
