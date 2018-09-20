import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";

const Post = props => {
  return (
    <Card style={{ maxWidth: 800 }}>
      {!!props.data.preview && (
        <CardMedia
          image={props.data.preview.images[0].source.url}
          style={{
            width:
              (props.data.preview.images[0].source.width * 400) /
              props.data.preview.images[0].source.height,
            height: 400,
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
      )}
      <CardContent style={{ maxHeight: 400, overflow: "scroll" }}>
        <Typography gutterBottom variant="headline" component="h2">
          {props.data.title}
        </Typography>
        <Typography component="p">{props.data.selftext}</Typography>
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

Post.propTypes = {
  data: PropTypes.object.isRequired
};

export default Post;
