import React, { Component } from 'react'
import { connect } from 'react-redux'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class AlbumsContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
          selectedAlbum: null
      }
    }

    render() {
        return (
            <div className="album-list-container">
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                    >
                    <Subheader>Results</Subheader>
                    {this.props.albums ? this.props.albums.map((tile) => (
                        <GridTile
                        key={tile.collectionId}
                        title={tile.collectionSensoredName}
                        subtitle={<span>by <b>{tile.artistName}</b></span>}
                        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                        >
                        <img src={tile.artworkUrl100} />
                        </GridTile>
                    )) : <h3>no data</h3> }
                </GridList>
            </div>
        )
  }
}

const mapState = (state) => {
    return {
        albums: state.albums
    }
}

export default connect(mapState, null)(AlbumsContainer)

const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: 750,
      height: '100%',
      overflowY: 'auto',
    },
  };