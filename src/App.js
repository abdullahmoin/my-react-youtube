import React, { Component } from "react";
import "./App.css";
import VideoListItem from "./components/video-item";
import axios from "axios";

import VideoDetail from "./components/video-detail";

class App extends Component {
  state = {
    searchTerm: "",
    data: {},
    embUrl: [],
  };

  handleChange = (event) => {
    const value = event.target.value;
    const newState = { searchTerm: value, data: this.state.data };
    this.setState(newState);
  };

  componentDidMount = () => {
    console.log("ami component did mount");
  };

  onVideoPlay = (url) => {
    const embbedUrl = "https://www.youtube.com/embed/";
    const videoId = url;

    const targetVideoUrl = `${embbedUrl}${videoId}`;
    const newState = [...this.state.embUrl];
    this.setState({ embbedUrl: newState });
    console.log(targetVideoUrl);
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("ami update component did");

    const getYTVideos = () => {
      const url = "https://www.googleapis.com/youtube/v3/search";
      const key = "";
      const type = "video";
      const part = "snippet";
      const q = this.state.searchTerm;

      const targetUrl = `${url}?key=${key}&type=${type}&part=${part}&q=${q}`;

      axios.get(targetUrl);

      const promise = axios.get(targetUrl);

      const success = (response) => {
        console.log("Success mf");
        console.log(response.data);

        const newState = {
          searchTerm: this.state.searchTerm,
          data: response.data,
        };
        this.setState(newState);
      };

      const error = (error) => {
        console.log("errrror");
        console.error(error);
      };

      promise.then(success).catch(error);
    };

    if (prevState.searchTerm !== this.state.searchTerm) {
      getYTVideos();
    }
  }

  render() {
    const items = this.state.data.items || [];
   

    return (
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div
            className="input-group mb-4 "
            style={{ width: "600px", textAlign: "center" }}
          >
            <input
              type="text"
              className="form-control"
              onChange={this.handleChange}
            />
            <button className="btn btn-outline-secondary" type="button" id="">
              Search
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
          <VideoDetail />
          </div>
          <div className="col-md-4">
            {items.map((item, index) => {
              const imgUrl = item.snippet.thumbnails.high.url;
              const title = item.snippet.title;
              const videoId = item.id.videoId;

              return (
                <div key={index}>
                  <VideoListItem
                    imgUrl={imgUrl}
                    title={title}
                    videoId={videoId}
                    onVideoPlay={this.onVideoPlay}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
