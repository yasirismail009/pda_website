import React from "react";
import Header from "./header";
import BlogsContainer from "./blogsContainer";

// const useStyles = makeStyles({
//   root: {
//     backgroundColor: "#173371 !important",
//     minHeight: "100vh",
//     width: "100vw",
//     overflowX: "hidden",
//   },
// });

function BlogContainer(props) {
  return (
    <div className="bg-primary-dark min-h-screen  overflow-hidden">
      <Header />
      <BlogsContainer />
    </div>
  );
}

export default BlogContainer;
