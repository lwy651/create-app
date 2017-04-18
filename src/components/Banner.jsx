var React = require('react');
var Slider = require('react-slick');

class Banner extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div><img src='../assets/banner.jpg'/></div>
        <div><img src='../assets/banner.jpg'/></div>
        <div><img src='../assets/banner.jpg'/></div>
      </Slider>
    );
  }
}

export default Banner