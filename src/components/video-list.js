import React, { Component } from "react";
import VideoListItem from "./video-list-item";

class VideoList extends Component {
  state = {};
  render() {
    const { items, handleSelect} = this.props;
    return (
      <div className="">
        {items.map((item, index) => {
          const imgUrl = item.snippet.thumbnails.high.url;
          const title = item.snippet.title;
          const description = item.snippet.thumbnails.description;
          const videoId = item.id.videoId;

          return (
            <VideoListItem
              imgUrl={imgUrl}
              title={title}
              description={description}
              videoId={videoId}
              handleSelect={handleSelect}
            />
          );
        })}
      </div>
    );
  }
}

export default VideoList;
