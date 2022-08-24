import React, { Component } from "react";

class VideoDetail extends Component {
  state = {};

  render() {
    const { title, description, videoId, views, uplDate } = this.props;

    return (
      <React.Fragment>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            width="100%"
            height="700px"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="details " style={{ marginTop: "10px" }}>
            <h6 className="main-title">{title}</h6>
            <p>{views}<span> •{uplDate}</span></p>
            <p>{description}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default VideoDetail;
