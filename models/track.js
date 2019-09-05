// music track
// -----------
// artist (String)
// year (Integer)
// albumName (String)
// albumArt (String)
// trackNumber (Integer)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TrackSchema = new Schema({
  // artist (String)
  artist: {
    type: String,
    trim: true,
    required: "Artist name is required"
  },
  // year (Integer)
  year: {
    type: Number,
    trim: true,
    required: "Year is required"
  },
  // albumName (String)
  albumName: {
    type: String,
    trim: true,
    required: "Album Name is required"
  },
  // albumArt (String)
  albumArt: {
    type: String,
    trim: true,
    required: false
  },
  // trackNumber (Integer)
  trackNumber: {
    type: Number,
    trim: true,
    required: "Track number is required"
  }
});

const Track = new mongoose.model("Track", TrackSchema);
module.exports = Track;
