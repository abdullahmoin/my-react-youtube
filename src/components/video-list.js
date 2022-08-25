import React, { Component } from "react";
import VideoListItem from "./video-list-item";

class VideoList extends Component {
  state = {};
  render() {
    const { items, handleSelect } = this.props;
    return (
      <div className="">
        {items.map((item, index) => {
          const imgUrl = item.snippet.thumbnails.high.url;
          const title = item.snippet.title;
          const description = item.snippet.description;
          const videoId = item.id.videoId;
          const channelTitle = item.snippet.channelTitle;

          return (
            <div key={index}>
              <VideoListItem
              imgUrl={imgUrl}
              title={title}
              description={description}
              videoId={videoId}
              channelTitle={channelTitle}
              handleSelect={handleSelect}
            />
            </div>
          );
        })}
      </div>
    );
  }
}

export default VideoList;
