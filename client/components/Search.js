import React, { Component } from 'react'
import { fetchAlbumsThunk, resetAlbums } from '../store'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Search extends Component {
    constructor(props) {
      super(props)
      this.state = {
          searchField: 'Beyonce'
      }
    }
    handleSearch() {
      console.log('handling search btn')
      // replace spaces with plus for GET
      let artistName = this.state.searchField.replace(' ', '+')
      this.props.fetchAlbums(artistName)
    }
    handleReset() {
      console.log('handling search btn')
      this.props.resetAlbums()
    }
    render() {
      return (
        <div className="search-container">
          <TextField
            id="search-field"
            value={this.state.searchField}
            onChange={(e) => this.setState({ searchField: e.target.value })}
            className="search-field"
            fullWidth={true}
          />
          <div className="btn-container">
            <RaisedButton label="Search" primary={true} onClick={() => this.handleSearch()} />
            <RaisedButton label="Reset" />
          </div>
        </div>
      )
    }
}

const mapDispatch = (dispatch) => {
  return {
    fetchAlbums: (artistName) => {
      dispatch(fetchAlbumsThunk(artistName))
    },
    resetAlbums: () => {
      dispatch(resetAlbums())
    }
  }
}
export default connect(null, mapDispatch)(Search)
