import React from 'react';
import classes from './notFound.module.css';
import { Link } from 'react-router-dom';

export default function NotFound({massage, linkRoute, linkText}) {
  return (
    <div className={classes.container}>
        {massage}
        <Link to={linkRoute}>{linkText}</Link> 
    </div>
  );
}

NotFound.defaultProps = {
    massage: 'Nothing Found!',
    linkRoute: '/',
    linkText: 'Go To Home Page',
};
