import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Post from "./components/Post";
import AppBar from "./components/AppBar";

const PAGE_SIZE = 50;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff4500"
    }
  }
});

class App extends React.Component {
  state = {
    subreddit: "all",
    posts: [],
    before: null,
    after: null,
    index: 0,
    loading: true
  };

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown, false);
    this.fetchPage(null, null);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown, false);
  }

  removeStickied = posts => posts.filter(post => !post.data.stickied);

  fetchPage = (before, after) => {
    const { subreddit } = this.state;
    this.setState({ loading: true });
    fetch(
      `https://www.reddit.com/r/${subreddit}.json?limit=${PAGE_SIZE}&count=${PAGE_SIZE}&before=${before}&after=${after}`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          posts: this.removeStickied(data.data.children),
          before: data.data.before,
          after: data.data.after,
          loading: false
        })
      );
  };

  onKeyDown = event => {
    const { posts, index, loading, before, after } = this.state;

    if (loading || (event.key === "ArrowLeft" && index === 0)) return;

    const relativeIndex = index % PAGE_SIZE;
    if (event.key === "ArrowRight") {
      this.setState({ index: index + 1 });
      if (relativeIndex === posts.length - 1) this.fetchPage(null, after);
    } else if (event.key === "ArrowLeft") {
      this.setState({ index: index - 1 });
      if (relativeIndex === 0) this.fetchPage(before, null);
    }
  };

  onSearch = subreddit =>
    this.setState({ subreddit, index: 0 }, () => this.fetchPage(null, null));

  render() {
    const { posts, index, loading } = this.state;
    const currentPost = posts[index % PAGE_SIZE];

    return (
      <MuiThemeProvider theme={theme}>
        <AppBar onSubmit={this.onSearch} />
        <Grid
          style={{ height: "100vh" }}
          container
          justify="center"
          alignItems="center"
        >
          {loading ? (
            <CircularProgress />
          ) : (
            <Post
              key={currentPost.data.id}
              data={currentPost.data}
              index={index}
            />
          )}
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
