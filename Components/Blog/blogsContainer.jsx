import React, { useState } from "react";
import { Typography } from "@mui/material";
import Blog from "./blog";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

// const useStyles = makeStyles({
//   root: {
//     // backgroundColor: "#021747",
//     borderRadius: "20px",
//   },
//   main: {
//     backgroundColor: "#173371 !important",
//     height: "100vh",
//     width: "100vw",
//     overflowX: "hidden",
//   },
// });

function BlogsContainer(props) {
  const router = useRouter();
  const { lead } = router.query;
  const [loading, setLoading] = useState(false);
  const [blogsList, setBlogsList] = useState({
    results: [],
  });
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getMoreBlogs = async () => {
    if (blogsList.results.length < blogsList.count) {
      const res = await axios.get(
        `https://privacydefender.app:8444/blog/all-blogs/?page=${
          page + 1
        }&user_key=${lead}`
      );
      const data = await res.data;

      setBlogsList((blogs) => ({
        ...blogs,
        results: [...blogs.results, ...data.results],
      }));
      setPage((page) => page + 1);
    } else {
      setHasMore(false);
    }
  };

  const getBlogs = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://privacydefender.app:8444/blog/all-blogs/?user_key=${lead}`
    );
    const data = await res.data;

    setBlogsList(data);
    setLoading(false);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      {loading ? null : (
        <InfiniteScroll
          dataLength={blogsList.results.length}
          next={getMoreBlogs}
          hasMore={hasMore}
          scrollableTarget="scrollableDiv"
          loader={<h3> Loading Blogs...</h3>}
          endMessage={""}
        >
          <div className="flex items-center justify-center p-2 sm:p-4">
            <div
              style={{ backgroundColor: "#021747", borderRadius: "20px" }}
              className={`bg-primary-dark  overflow-y-hidden w-full sm:w-2/3`}
            >
              <div className="flex items-center p-4 sm:p-8">
                <svg
                  width="41"
                  height="38"
                  viewBox="0 0 41 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 31.7753C0 25.6831 0 19.59 0 13.4978C0.0279902 13.4458 0.0727744 13.397 0.0815713 13.3418C0.65337 9.84144 3.55955 7.29594 7.1087 7.27834C12.7075 7.25035 18.3064 7.25995 23.9052 7.28954C24.581 7.29274 25.2847 7.43269 25.9269 7.65261C28.993 8.70184 30.826 11.3209 30.834 14.6342C30.8468 19.9667 30.8348 25.3 30.8388 30.6325C30.8396 32.2024 30.4453 33.6531 29.5216 34.9302C28.0493 36.9663 26.0285 37.9772 23.5277 37.99C19.8042 38.0091 16.0807 37.9947 12.3565 37.9947C10.6411 37.9947 8.92486 38.0067 7.20947 37.9915C4.05617 37.9644 1.4091 36.061 0.375068 33.0821C0.22712 32.655 0.123956 32.212 0 31.7753ZM23.1687 26.1133L23.2118 26.1069C23.1247 25.4911 23.0735 24.8674 22.9431 24.2604C22.4833 22.1131 21.5084 20.2226 19.9874 18.6344C17.6498 16.1936 14.782 14.9564 11.4 14.9293C10.7634 14.9245 10.2676 15.4195 10.2292 16.0529C10.1932 16.6471 10.6419 17.1861 11.2608 17.2628C11.7735 17.326 12.2933 17.3412 12.8043 17.414C14.9284 17.7171 16.7333 18.6647 18.2088 20.209C19.9218 22.0028 20.7783 24.1612 20.8295 26.6419C20.8455 27.4233 21.3765 27.9199 22.125 27.8743C22.7968 27.8335 23.2566 27.2537 23.2062 26.51C23.1974 26.3772 23.1815 26.2453 23.1687 26.1133ZM18.6247 27.0586C18.5927 26.7955 18.5631 26.5324 18.5271 26.2701C18.0105 22.4426 14.662 19.4964 10.8234 19.5052C10.5947 19.5052 10.3452 19.5764 10.1428 19.6852C9.6862 19.9307 9.46947 20.5041 9.60382 20.9855C9.75737 21.5357 10.2004 21.858 10.8218 21.882C12.8939 21.962 14.4613 22.9009 15.5297 24.6714C16.0512 25.5359 16.1967 26.5012 16.2719 27.4896C16.3271 28.2182 16.9692 28.662 17.685 28.5165C18.3208 28.3877 18.6215 27.9095 18.6247 27.0578V27.0586ZM10.3844 24.2652C9.6646 24.2444 9.13359 24.6762 9.08961 25.3192C9.04162 26.0278 9.45348 26.5076 10.1948 26.6075C11.0697 26.7251 11.4016 27.0602 11.4968 27.9231C11.5711 28.5989 12.1237 29.0987 12.7499 29.0563C13.3833 29.0131 13.9055 28.4669 13.8807 27.8423C13.8008 25.7886 12.2485 24.322 10.3844 24.266V24.2652Z"
                    fill="white"
                  />
                  <path
                    d="M8.43896 4.79768C9.49219 2.71441 11.0572 1.28691 13.1925 0.497588C14.121 0.154508 15.0846 0.00496098 16.0771 0.0057607C21.5032 0.0121584 26.9293 0.0337509 32.3554 0.000162664C35.9981 -0.0222295 39.3153 2.26897 40.4437 5.79893C40.694 6.58265 40.842 7.43435 40.8468 8.25646C40.8812 13.8017 40.8828 19.3478 40.8588 24.893C40.842 28.8108 37.923 32.2528 34.0732 32.9654C33.7245 33.0302 33.371 33.0653 33.0191 33.1141C33.5278 29.9744 33.2295 26.8387 33.2774 23.715C33.3254 20.5905 33.3254 17.4644 33.2742 14.3399C33.1991 9.78632 29.6635 5.70216 25.2147 4.97601C24.5093 4.86086 23.7872 4.80727 23.0722 4.80487C18.2179 4.79048 13.3644 4.79688 8.43896 4.79688V4.79768Z"
                    fill="white"
                  />
                </svg>
                <p className="text-lg sm:text-2xl font-semibold ml-2 text-white">
                  News Feeds
                </p>
              </div>
              <div className="flex flex-col p-4 sm:p-6 pt-0 space-y-4 sm:space-y-4">
                {blogsList.results?.map((blog, index) => (
                  <Blog index={index} {...blog} />
                ))}
              </div>
            </div>
          </div>
        </InfiniteScroll>
      )}
    </>
  );
}

export default BlogsContainer;
