import axios from "axios";

/**
 * ACTION TYPES
 */
const GOT_ABLUMS = "GOT_ABLUMS";
const RESET_ALBUMS = "RESET_ALBUMS";

/**
 * INITIAL STATE
 */
const defaultAlbums = [];

/**
 * ACTION CREATORS
 */
const gotAlbums = albums => ({ type: GOT_ABLUMS, albums });
export const resetAlbums = () => ({ type: RESET_ALBUMS });

/**
 * THUNK CREATORS
 */
export const fetchAlbumsThunk = artistName => dispatch =>
  axios
    .get(`https://itunes.apple.com/search?term=${artistName}&entity=album`)
    .then(res => dispatch(gotAlbums(res.data.results || defaultAlbums)))
    .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function(state = defaultAlbums, action) {
  switch (action.type) {
    case GOT_ABLUMS:
      return action.albums;
    case RESET_ALBUMS:
      return defaultAlbums;
    default:
      return state;
  }
}
