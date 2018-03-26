import React, { Component } from 'react'
import { connect } from 'react-redux'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Card, CardMedia, CardTitle } from 'material-ui/Card';

class AlbumsContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
          selectedAlbum: null
      }
    }

    render() {
        return (
                <Card
                    className="album-list-container"
                >
                    <GridList
                        cellHeight="auto"
                        style={styles.gridList}
                        cols={4}
                        >
                        {this.props.albums && this.props.albums.length > 0 ? this.props.albums.map((tile) => (
                                <Card key={tile.collectionId}>
                                    <CardMedia
                                        overlay={<CardTitle title={tile.collectionCensoredName} subtitle={tile.artistName} />}
                                    >
                                    <img src={tile.artworkUrl100} />
                                    </CardMedia>
                                </Card>
                        )) : <h3>no data</h3> }
                    </GridList>
                </Card>
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
    gridList: {
      width: '100%',
      height: '100%',
      overflowY: 'auto'
    },
    tile: {
        height: 200,
        width: 200
    },
  };