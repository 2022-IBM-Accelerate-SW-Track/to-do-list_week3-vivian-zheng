import React, { Component } from 'react';
import "./About.css";
import ibm_portrait from "../assets/ibm_portrait.jpeg";
  
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src={ibm_portrait}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Vivian Zheng</div>
          <div className="brief_description">
            Hi, my name is Vivian Zheng and I am a rising junior at Texas A&M (gig 'em!). 
            I am majoring in Computer Science and minoring in Business.
          </div>
          <div className="hobbies">
            Outside of school, I enjoy playing tennis, watching movies, cooking, and hiking. 
          </div>
        </div>
      </div>
      </div>
    )
  }
}
