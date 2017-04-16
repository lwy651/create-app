import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.less';
import nav_items from '../constants/nav_items';

class Nav extends Component {
  render() {
    return (
      <div className={styles.web_tabbar}>
        {
          nav_items.map((item, key) => {
            return (
              <NavLink key={key} to={item.route} className={styles.web_tabbar_item} activeClassName={styles.web_tabbar_item_on}>
                <span className={styles.web_tabbar_icon}>
                  <img src={item.icon} />
                </span>
                <p className={styles.web_tabbar_label}>{item.title}</p>
              </NavLink>
            )
          })
        }
      </div>
    );
  }
}

export default Nav;