import React from 'react'
import styles from './Home.less'
import Banner from '../components/Banner'

class Home extends React.Component {
  render() {
    return(
      <div className={styles.box}>
        <Banner />
        首页
      </div>
    );
  }
}

export default Home;