import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
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
    this.fetchFirstPage();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown, false);
  }

  removeStickied = posts => posts.filter(post => !post.data.stickied);

  fetchFirstPage = () => {
    this.setState({ loading: true });
    fetch(
      `https://www.reddit.com/r/${this.state.subreddit}.json?limit=${PAGE_SIZE}`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          posts: this.removeStickied(data.data.children),
          before: data.data.before,
          after: data.data.after,
          index: 0,
          loading: false
        })
      );
  };

  fetchNextPage = () => {
    const { subreddit, after } = this.state;
    this.setState({ loading: true });
    fetch(
      `https://www.reddit.com/r/${subreddit}.json?limit=${PAGE_SIZE}&count=${PAGE_SIZE}&after=${after}`
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

  fetchPrevPage = () => {
    const { subreddit, before } = this.state;
    if (before === null) return;
    this.setState({ loading: true });
    fetch(
      `https://www.reddit.com/r/${subreddit}.json?limit=${PAGE_SIZE}&count=${PAGE_SIZE}&before=${before}`
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
    const { posts, index, loading } = this.state;

    if (loading || (event.key === "ArrowLeft" && index === 0)) return;

    const relativeIndex = index % PAGE_SIZE;
    if (event.key === "ArrowRight") {
      this.setState({ index: index + 1 });
      if (relativeIndex === posts.length - 1) this.fetchNextPage();
    } else if (event.key === "ArrowLeft") {
      this.setState({ index: index - 1 });
      if (relativeIndex === 0) this.fetchPrevPage();
    }
  };

  onSearch = subreddit =>
    this.setState({ subreddit }, () => this.fetchFirstPage());

  render() {
    const { posts, index, loading } = this.state;
    if (posts.length === 0) return <LinearProgress />;
    const currentPost = posts[index % PAGE_SIZE];

    return (
      <>
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
      </>
    );
  }
}

const AppWithTheme = () => (
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
);

export default AppWithTheme;
