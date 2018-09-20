import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Post from "./components/Post";
import AppBar from "./components/AppBar";

const PAGE_SIZE = 50;

class App extends React.Component {
  state = {
    subreddit: "all",
    posts: [],
    before: null,
    after: null,
    postIndex: 0,
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
          postIndex: 0,
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
          postIndex: 0,
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
          postIndex: PAGE_SIZE - 1,
          loading: false
        })
      );
  };

  onKeyDown = event => {
    const { posts, postIndex, loading } = this.state;
    if (loading) return;
    if (event.key === "ArrowRight") {
      if (postIndex === posts.length - 1) this.fetchNextPage();
      else this.setState({ postIndex: postIndex + 1 });
    } else if (event.key === "ArrowLeft") {
      if (postIndex === 0) this.fetchPrevPage();
      else this.setState({ postIndex: postIndex - 1 });
    }
  };

  onSearch = subreddit =>
    this.setState({ subreddit }, () => this.fetchFirstPage());

  render() {
    const { posts, postIndex, loading } = this.state;
    if (posts.length === 0) return <LinearProgress />;
    const currentPost = posts[postIndex];

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
            <Post key={currentPost.data.id} data={currentPost.data} />
          )}
        </Grid>
      </>
    );
  }
}

export default App;
