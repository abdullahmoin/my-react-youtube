import React, { Component } from "react";

class VideoDetail extends Component {
  state = {
    src: "https://www.youtube.com/embed/CLUL2eO9o9w",

  };

  // constructor(props){
  //   super(props);

  //   this.state = {
      
  //   };
  // }

  render() {
    return (
        <React.Fragment>
        <div className="embed-responsive embed-responsive-16by9">
         
          <iframe
            width="100%"
            height="700px"
            src={this.state.src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

        <div className="details" style={{ marginTop: "10px", padding: "10px" }}>
          <h4>Warfaze - Rupkotha</h4>
          <p>2,728,285 views • Apr 30, 2018</p>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default VideoDetail;
