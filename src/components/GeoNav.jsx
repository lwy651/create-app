import React, { Component } from 'react'
import styles from './GeoNav.less'
import iconStyles from '../styles/iconfont.css';

class GeoNav extends Component {
  render() {
    return (
      <div className={styles.Nav}>
        <i className={iconStyles.iconfont + ' ' + iconStyles.icon_locationfill} />
        <span>江苏常州新北区银河湾第一城</span>
      </div>
    );
  }
}

export default GeoNav;