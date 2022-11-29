import React from "react";
import Header from "./header";
import BlogsContainer from "./blogsContainer";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    width: "100vw",
    overflowX: "hidden",
  },
});

function BlogContainer(props) {
  const classes = useStyles();
  return (
    <div className={`${classes.root} bg-primary-dark`}>
      <Header />
      <BlogsContainer />
    </div>
  );
}

export default BlogContainer;
