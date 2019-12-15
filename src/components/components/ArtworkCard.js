import React from "react";
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

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 345,
    display: "block",
    margin: "auto"
  }
});

const ArtworkCard = ({ imageName }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/super.jpg"
          title="Superman"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {imageName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton>
          <ThumbUpIcon /> 250
        </IconButton>
        <IconButton>
          <ThumbDownIcon /> 50
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ArtworkCard;
