import React, { Component } from "react";

class VideoListItem extends Component {
  state = {};
  render() {
    const { imgUrl, title, description, videoId, channelTitle, handleSelect } = this.props;

    return (
      <div className="">
        <li
          className="pb-2 d-flex dl list-feature"
          onClick={(event) => {
            handleSelect(title, description, videoId);
          }}
        >
          <div>
            <img
              width="180px"
              height="95px"
              src={imgUrl}
              className="mr-3"
              alt=""
            />
          </div>
          <div className="media-body ms-2">
            <span className="side-title-font">{title}</span>
            <span className="side-channelTitle">{channelTitle}</span>
          </div>
        </li>
      </div>
    );
  }
}

export default VideoListItem;
