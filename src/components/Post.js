import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import Markdown from "react-markdown";

const Post = props => {
  return (
    <Badge badgeContent={`#${props.index + 1}`} color="primary">
      <Card style={{ maxWidth: 800, maxHeight: 800, overflow: "scroll" }}>
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
          <Typography component="p">
            {" "}
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
    </Badge>
  );
};

Post.propTypes = {
  data: PropTypes.object.isRequired
};

export default Post;
