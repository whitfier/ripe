import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Markdown from "react-markdown";

const SelfPost = props => {
  return (
    <Card style={{ maxWidth: 800, maxHeight: 600, overflow: "auto" }}>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {props.data.title}
        </Typography>
        <Typography component="div">
          <Markdown source={props.data.selftext} />
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

SelfPost.propTypes = {
  data: PropTypes.object.isRequired
};

export default SelfPost;
