import React, { Component } from "react";
import "../css/index.css";

class VideoListItem extends Component {
  state = {};

  constructor (props){
    super(props);

    this.state = {};
  }

  onVideoId = () => {
    

     this.props.onVideoPlay(this.props.videoId);

  }

  render() {
   
    return (
      <div className="">
        <li className="pb-2 d-flex dl list-feature" onClick={this.onVideoId}>
          <div>
            <img width="180px" height="95px" src={this.props.imgUrl} className="mr-3" alt="" />
          </div>
          <div className="media-body ms-2"><span className="side-title-font">{this.props.title}</span></div>
        </li>
      </div>
    );
  }
}

export default VideoListItem;
