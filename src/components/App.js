import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
     
    axios.get('https://api.unsplash.com/search/photos/',{
        params: { query: term},
        headers: {
        Authorization: 'Client-ID e19041b6c2e5367ecab45c28001595b66e54583946a109fe9a465375d6f7c60b'
    }
    })
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
