import React, { Component } from 'react';
import Slider from "react-slick";
import users from '../../state';
var img_path = '../../images/';
class ImageSlider extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrow: true
        },
            profile_image=this.props.info.profile_image;
            // let source=require('profile_image')
        console.log(users, users.users[0])
        return (
            <div className="imageSlider whitebg">
                <Slider {...settings}>
                    {this.props.info.images.map((data, i) => {
                      return(
                        <div className="images" key={i}>
                            <img src={require('../../images/' + data)} alt="profile"/>
                            <span className="img-date">22-15-2017</span>
                        </div>      
                      )  
                    })}
                </Slider>
            </div>
        );
    }
}

export default ImageSlider;
