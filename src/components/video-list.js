import React, { Component } from "react";

class VideoList extends Component {
  state = {};
  render() {
    const { items } = this.props;
    return (
      <div className="">
        {items.map((item, index) => {
          const imgUrl = item.snippet.thumbnails.high.url;
          const title = item.snippet.title;
          const description = item.snippet.thumbnails.description;
          const videoId = item.id.videoId;

          return (
            <div className="">
              <li className="pb-2 d-flex dl list-feature" onClick={(event) => {
                console.log(videoId);
                this.handleSelect(title, description, videoId);
              }}>
                <div>
                  <img width="180px" height="95px" src={imgUrl} className="mr-3" alt="" />
                </div>
                <div className="media-body ms-2"><span className="side-title-font">{title}</span></div>
              </li>
            </div>
          );
        })}
      </div>
    );
  }
}

export default VideoList;
