import React from 'react'
import Slider from 'react-slick'
import styles from './Banner.less'

class Banner extends React.Component {
  constructor(props)
  {
    super(props)
    this.bannerHeight = document.body.offsetWidth * 200 / 375
  }
  render() {
    var settings = {
      dots: true,
      autoplay: false,
      autoplaySpeed: 5000,
      initialSlide: 0,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
    };
    return (
      <div className={styles.normal}>
        <Slider {...settings}>
          <img src={require('../assets/yay.jpg')} style={{ height:this.bannerHeight }}/>
          <img src={require('../assets/banner.jpg')} style={{ height:this.bannerHeight }}/>
          <img src={require('../assets/banner.jpg')} style={{ height:this.bannerHeight }}/>
        </Slider>
      </div>
    );
  }
}

export default Banner