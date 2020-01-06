import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { deletArtwork } from "../../api/artwork";

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    width: 500
  },
  media: {
    height: 500,
    display: "block",
    margin: "auto"
  }
});

const ArtworkCard = ({
  artworkId,
  imageName,
  description,
  imageUrl = "/images/super.jpg",
  isEditAndDeleteMenu
}) => {
  const classes = useStyles();
  const history = useHistory();

  const handleDelete = artworkId => {
    deletArtwork(artworkId)
      .then(isDeleteSuccess => {
        if (isDeleteSuccess)
          history.push(
            `/deleteartwork?name=${imageName}&description=${description}`
          );
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Card className={classes.card} raised>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://localhost:5001/${imageUrl}`}
          title="Superman"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {imageName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
          onClick={() => console.log(`thumbs up artwork id: ${artworkId}`)}
        >
          <ThumbUpIcon fontSize="small" color="primary" />{" "}
          <Typography variant="body2" display="block" color="secondary">
            250
          </Typography>
        </IconButton>
        <IconButton
          onClick={() => console.log(`thumbs down artwork id: ${artworkId}`)}
        >
          <ThumbDownIcon fontSize="small" color="primary" />{" "}
          <Typography variant="body2" display="block" color="secondary">
            50
          </Typography>
        </IconButton>
        {isEditAndDeleteMenu && (
          <>
            <IconButton
              onClick={() =>
                history.push(
                  `/editartwork?artworkId=${artworkId}&name=${imageName}&description=${description}`
                )
              }
            >
              <EditIcon color="primary" />
            </IconButton>
            <IconButton onClick={() => handleDelete(artworkId)}>
              <DeleteIcon color="primary" />
            </IconButton>
          </>
        )}
      </CardActions>
    </Card>
  );
};

export default ArtworkCard;
