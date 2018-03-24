import React, { Component }from 'react'
import '../css/About.css';

class About extends Component {
    render() {
        return (
            <div className="about-wrap clearfix">
                <div className="left">
                    <img src="https://static1.squarespac.com/static/56d4a125e707eb7a02e4055f/t/56d4a5eaf699bba7a12bc589/1456776694139/?format=750w" alt=""/>
                </div>
                <div className="right">
                    <div className="title">About</div>
                    <div className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda culpa distinctio harum, quam quia quod repudiandae sunt? Aspernatur eaque, maxime minima molestias non perferendis quaerat sapiente totam ut. Sed?</div>
                </div>
            </div>
        )
    }
}

export default About;
