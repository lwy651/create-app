import React, { Component } from 'react'
import Slider from 'react-slick'
import styles from './Banner.less'

class Banner extends Component {
    render () {
    var settings = {
      dots: true
    };
    return (
      <div className={styles.container}>
        <Slider {...settings}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </Slider>
      </div>
    );
  }
}

export default Banner