import React, { Component } from "react";
import "./search-bar.css"

class SearchBar extends Component {
    state = {};
    render() {
        const { handleChange } = this.props

        return (
            <div className="row d-flex justify-content-center">
                <div
                    className="input-group mb-4 "
                    style={{ width: "600px", textAlign: "center" }}
                >
                    <input
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                    />
                    <button className="btn btn-outline-secondary" type="button" id="">Search</button>
                </div>
            </div>
        );
    }
}

export default SearchBar;
