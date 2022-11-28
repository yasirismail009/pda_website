import React from "react";
import BlogApp from "../../components/blog/blogApp";

import Head from "next/head";

function Blog() {
  return (
    <>
      <Head>
        <title>Privacy Defender App</title>
        <meta
          name="description"
          content="Pligence provides secure online use as a Security and Privacy Solutoion Provider. Well known for the Privancy Defender Application. To protect users from online dangers & keeps user information safe and secure."
        />
        <link rel="icon" href="/favicon1.ico" />
        <meta
          name="keywords"
          content="Android Security, Mobile Firewall,Security, Privacy, Privacy Defener, moiblesecurity, mobile threat detection, Mobile Threat Prevention, threat detection, moible protection, security vault, App lock, password manager, Firewall, Mobile App Reputation, Safe Browsing, Vulnerability Management, SIEM, SOAR, Internet security, Security Assessment, Mobile Security Assessment app for privacy
            ,
            android security,
            surveillance,
            mobile security,
            privacy ,
            ad block,
            app lock,
            anti spyware,
            anti malware,
            security apps,
            antivirus  ,     
            anti spy    ,     
            mic block,
            camera block,
            android security app,
            best antivirus for android,
            android antivirus,
            best free antivirus for android,
            free antivirus for android,
            best antivirus for iphone,
            iphone antivirus free,
            best iphone security app,
            free antivirus app,
            antivirus for phones,
            anti spyware android,
            anti spyware ios,
            "
        />
      </Head>

      <BlogApp />
    </>
  );
}

export default Blog;

// import React from "react";
// import { makeStyles } from "@mui/styles";
// import BlogApp from "../../components/blog/blogApp";
// import Head from "next/head";
// import { useRouter } from "next/router";
// import { useState } from "react";
// import { useEffect } from "react";
// import axios from "axios";

// const useStyles = makeStyles({
//   root: {
//     backgroundColor: "#173371 !important",
//     height: "100vh",
//     width: "100vw",
//     overflowX: "hidden",
//   },
// });

// function Blog() {
//   const classes = useStyles();
//   const router = useRouter();
//   const { lead } = router.query;
//   const [loading, setLoading] = useState(false);
//   const [blogsList, setBlogsList] = useState([]);
//   const getBlogs = async () => {
//     setLoading(true);
//     const res = await axios.get(
//       `https://privacydefender.app:8444/blog/all-blogs/?user_key=${lead}`
//     );
//     const data = await res.data;

//     setBlogsList(data.results);
//     setLoading(false);
//     console.info(data);
//   };

//   useEffect(() => {
//     getBlogs();
//   }, []);
//   return (
//     <>
//       <Head>
//         <title>Privacy Defender App</title>
//         <meta
//           name="description"
//           content="Pligence provides secure online use as a Security and Privacy Solutoion Provider. Well known for the Privancy Defender Application. To protect users from online dangers & keeps user information safe and secure."
//         />
//         <link rel="icon" href="/favicon1.ico" />
//         <meta
//           name="keywords"
//           content="Android Security, Mobile Firewall,Security, Privacy, Privacy Defener, moiblesecurity, mobile threat detection, Mobile Threat Prevention, threat detection, moible protection, security vault, App lock, password manager, Firewall, Mobile App Reputation, Safe Browsing, Vulnerability Management, SIEM, SOAR, Internet security, Security Assessment, Mobile Security Assessment app for privacy
//             ,
//             android security,
//             surveillance,
//             mobile security,
//             privacy ,
//             ad block,
//             app lock,
//             anti spyware,
//             anti malware,
//             security apps,
//             antivirus  ,
//             anti spy    ,
//             mic block,
//             camera block,
//             android security app,
//             best antivirus for android,
//             android antivirus,
//             best free antivirus for android,
//             free antivirus for android,
//             best antivirus for iphone,
//             iphone antivirus free,
//             best iphone security app,
//             free antivirus app,
//             antivirus for phones,
//             anti spyware android,
//             anti spyware ios,
//             "
//         />
//       </Head>
//       {loading ? null : (
//         <div className={classes.root}>
//           <BlogApp blogsList={blogsList} />
//         </div>
//       )}
//     </>
//   );
// }

// export default Blog;
