import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    tracks: [],
    artist: "",
    year: "",
    albumName: "",
    albumArt: "",
    trackNumber: ""
  };

  componentDidMount() {
    axios.get("/api/track").then(response => {
      this.setState({ tracks: response.data });
    });
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  handleClick = () => {
    axios
      .post("/api/track", {
        artist: this.state.artist,
        albumName: this.state.albumName,
        albumArt: this.state.albumArt,
        year: this.state.year,
        trackNumber: this.state.trackNumber
      })
      .then(response => {
        const track = response.data;
        const updatedTracks = this.state.tracks;
        updatedTracks.push(track);

        this.setState({
          tracks: updatedTracks
        });
      });
  };

  render() {
    return (
      <div>
        <nav className="nav bg-dark">
          <a className="nav-link" href="#">
            Active
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="jumbotron">
                <h1>Track App 🎹</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              {this.state.tracks.map((track, i) => (
                <div className="col-md-3">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={track.albumArt} className="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title">{track.albumName}</h5>
                      <p className="card-text">Music by: {track.artist}</p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <input
              type="text"
              className="form-control"
              name="artist"
              value={this.state.artist}
              placeholder="artist"
              onChange={this.handleChange}
            />
            <input
              type="text"
              className="form-control"
              name="year"
              value={this.state.year}
              placeholder="year"
              onChange={this.handleChange}
            />
            <input
              type="text"
              className="form-control"
              name="albumName"
              value={this.state.albumName}
              placeholder="albumName"
              onChange={this.handleChange}
            />
            <input
              type="text"
              className="form-control"
              name="albumArt"
              value={this.state.albumArt}
              placeholder="albumArt"
              onChange={this.handleChange}
            />
            <input
              type="text"
              className="form-control"
              name="trackNumber"
              value={this.state.trackNumber}
              placeholder="trackNumber"
              onChange={this.handleChange}
            />
            <button className="btn btn-success" onClick={this.handleClick}>
              Add Track
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
