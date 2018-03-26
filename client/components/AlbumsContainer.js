import React from "react";
import { connect } from "react-redux";
import { GridList } from "material-ui/GridList";
import { Card, CardMedia, CardTitle } from "material-ui/Card";

const AlbumsContainer = props => {
  return (
    <Card className="album-list-container">
      <GridList className="album-list" cellHeight="auto" cols={4}>
        {props.albums && props.albums.length > 0 ? (
          props.albums.map(tile => (
            <Card key={tile.collectionId}>
              <CardMedia
                overlay={
                  <CardTitle
                    title={tile.collectionCensoredName}
                    subtitle={`${tile.artistName} - ${new Date(
                      tile.releaseDate
                    ).toDateString()}`}
                  />
                }
              >
                <img src={tile.artworkUrl100} />
              </CardMedia>
            </Card>
          ))
        ) : (
          <h3>no data</h3>
        )}
      </GridList>
    </Card>
  );
};

const mapState = state => {
  return {
    albums: state.albums
  };
};

export default connect(mapState, null)(AlbumsContainer);
