import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";

const styles = {
  card: {
    maxWidth: 500
  },
  media: {
    height: 300
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      {!!props.data.preview && (
        <CardMedia
          className={classes.media}
          image={props.data.preview.images[0].source.url}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {props.data.title}
        </Typography>
        <Typography component="p">{props.data.selftext}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={props.data.url}>
          View Original
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
