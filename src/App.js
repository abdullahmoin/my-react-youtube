import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/searchBar";
import VideoList from "./components/video-list";
import VideoDetail from "./components/video-detail";

class App extends Component {
  state = {
    searchTerm: "",
    data: {},
    videoId: "voJuNEKcUXY",
    title: "Playboi Carti - Magnolia ( lofi remix )",
    description:
      "I don't have any rights. Playboi, Carti, Playboi Carti, Magnolia, lofi remix, Playboi Carti Magnolia, remix, vhs, vhs cam, after effects, Carti, rap, american, american rap, trippie redd, love scars, 6ix9ine, Yung Bans, Fatboibari",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ ...this.state, searchTerm: event.target.search.value });
  };

  componentDidMount = () => {};

  handleSelect = (title, description, videoId) =>
    this.setState({ ...this.state, title, description, videoId });

  componentDidUpdate(prevProps, prevState) {
    const getYTVideos = () => {
      const baseUrl = "https://www.googleapis.com/youtube/v3/search";
      const key = "AIzaSyCd4_z0uynrJSvgOWyvF5rSSX091hAzzFA";
      const type = "video";
      const part = "snippet";
      const q = this.state.searchTerm;

      const Url = `${baseUrl}?key=${key}&type=${type}&part=${part}&q=${q}`;

      axios
        .get(Url)
        .then((response) =>
          this.setState({ ...this.state, data: response.data })
        )
        .catch((error) => console.error(error));
    };

    if (prevState.searchTerm !== this.state.searchTerm) getYTVideos();
  }

  render() {
    return (
      <div className="container mt-5">
        <SearchBar handleSubmit={this.handleSubmit} />

        <div className="row">
          <div className="col-md-8">
            <VideoDetail
              title={this.state.title}
              description={this.state.description}
              videoId={this.state.videoId}
            />
          </div>
          <div className="col-md-4">
            <VideoList
              items={this.state.data.items || []}
              handleSelect={this.handleSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
