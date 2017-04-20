import React from 'react'
import Slider from 'react-slick'
import styles from './Banner.less'

class Banner extends React.Component {
  constructor(props) {
    super(props)
    this.bannerHeight = document.body.offsetWidth * 200 / 375
  }
  render() {
    var cm = this;
    var settings = {
      dots: true,
      autoplay: false,
      autoplaySpeed: 5000,
      initialSlide: 0,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
    };
    var links = ["one", "two", "three", "four"];
    var items = links.map(function (link,key) {
      return (<a key={key}>{link}</a>);
    });
    return (
      <div className={styles.normal}>
        <Slider {...settings}>
          {/*<div><img src={require('../assets/yay.jpg')} style={{ height: this.bannerHeight }} /></div>
          <div><img src={require('../assets/yay.jpg')} style={{ height: this.bannerHeight }} /></div>
          <div><img src={require('../assets/yay.jpg')} style={{ height: this.bannerHeight }} /></div>*/}
          {items}
        </Slider>
      </div>
    );
  }
}

export default Banner