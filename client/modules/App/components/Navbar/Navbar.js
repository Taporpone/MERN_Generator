import React from 'react';
import styles from './Navbar.css';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

const Navbar = () => (
    <div className={styles.container}>
        <p className={styles['links']}>
            <Link to="/home" ><FormattedMessage id="linkHome" /></Link>
            <Link to="/" ><FormattedMessage id="linkPosts" /></Link>
            <Link to="/about" ><FormattedMessage id="linkAbout" /></Link>
        </p>
    </div>
);

export default Navbar;
