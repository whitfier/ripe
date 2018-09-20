import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactPlayer from "react-player";

const MediaPost = props => {
  return (
    <Card style={{ maxWidth: 800, maxHeight: 600, overflow: "auto" }}>
      <ReactPlayer
        url={props.url}
        controls
        playing
        muted
        style={{
          marginLeft: "auto",
          marginRight: "auto"
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {props.data.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={props.data.url}>
          Source
        </Button>
        <Button
          size="small"
          color="primary"
          href={`https://www.reddit.com${props.data.permalink}`}
        >
          Comments
        </Button>
      </CardActions>
    </Card>
  );
};

MediaPost.propTypes = {
  data: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
};

export default MediaPost;
