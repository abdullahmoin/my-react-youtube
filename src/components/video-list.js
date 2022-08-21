import React, { Component } from "react";
import VideoListItem from "./video-item";
class VideoList extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-4">
        <ul className="list-group list-group-flush list-feature">
          <VideoListItem
            src="https://i.ytimg.com/vi/uB2rhjulY4Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDparFPfGvaP_fCFLupqol-ai7log"
            title="Warfaze - Purnota"
          />
          
        </ul>
      </div>
    );
  }
}

export default VideoList;
