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
            <div className="row">
              <div className="col-md-7">
                <h6 className="main-title">{title}</h6>
                <p>
                  {views} <span> •{uplDate}</span>
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-4 d-flex justify-content-end align-items-start">
                <button className="reaction me-3">
                  <i title="I like this" class="ri-thumb-down-line"></i>
                </button>
                <button className="reaction me-3">
                  <i title="I dislike this" class="ri-thumb-up-line"></i>
                </button>
                <button className="reaction">
                  <i title="Share" class="ri-share-forward-line"></i>
                </button>
              </div>
            </div>
            <hr />
            <p>{description}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default VideoDetail;
