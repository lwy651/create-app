import React from 'react'
import styles from './Home.less'
import Banner from '../components/Banner'
import GeoNav from '../components/GeoNav'

class Home extends React.Component {
  render() {
    return(
      <div className={styles.box}>
        <GeoNav />
        <Banner />
      </div>
    );
  }
}

export default Home;