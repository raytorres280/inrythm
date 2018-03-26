import React, { Component } from 'react'
import { fetchAlbumsThunk, resetAlbums } from '../store'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import { blue500 } from 'material-ui/styles/colors';

class Search extends Component {
    constructor(props) {
      super(props)
      this.state = {
          searchField: ''
      }
    }
    handleSearch() {
      console.log('handling search btn')
      // replace spaces with plus for GET
      let artistName = this.state.searchField.replace(' ', '+')
      this.props.fetchAlbums(artistName)
    }
    handleReset() {
      this.setState({ searchField: '' })
      this.props.resetAlbums()
    }
    render() {
      return (
        <Card
          className="search-container"
        >
          <TextField
            id="search-field"
            value={this.state.searchField}
            onChange={(e) => this.setState({ searchField: e.target.value })}
            className="search-field"
            fullWidth={true}
            underlineStyle={{ color: blue500 }}
          />
            <FlatButton
              backgroundColor="#31b3ff"
              hoverColor="#019BF6"
              fullWidth={true}
              label="Search"
              onClick={() => this.handleSearch()} />
            <FlatButton fullWidth={true} label="Reset" onClick={() => this.handleReset()} />
        </Card>
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
