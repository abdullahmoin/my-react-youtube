import React, { Component } from "react";
import "./search-bar.css";

class SearchBar extends Component {
 
  
  state = {};
  render() {
    const { handleSubmit } = this.props;
   
    

    return (
      <div className="row d-flex justify-content-center">
        <form onSubmit={handleSubmit}
          className="input-group mb-4 "
          style={{ width: "600px", textAlign: "center" }}
        >
          <input type="text" name="search" className="form-control"/>
          <button className="btn btn-outline-secondary" type="submit" value="submit" id="">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
