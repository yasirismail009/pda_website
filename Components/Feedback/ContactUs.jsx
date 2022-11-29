import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import emailjs from "emailjs-com";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function FeedbackComponent() {
  const [open, setOpen] = useState(false);
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    if (name === "" || email === "" || message === "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }

  function sendEmail(e) {
    setLoading(true);
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "gmail",
        "template_uk20ewn",
        e.target,
        "user_3TDjSAtSwwjQiWplcCN3R"
      )
      .then(
        (result) => {
          setName("");
          setEmail("");
          setMessage("");
          setDisable(true);
          setOpen(true);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  useEffect(() => {}, []);
  return (
    <div
      className="w-full flex justify-center items-center mt-20 lg:p-24 sm:p-4 p-4 lg:pt-24 sm:pt-20 pt-20 lg:pb-0 sm:pb-20 pb-20"
      id="feedback"
    >
      <div className="bg-primary-dark lg:w-2/3 sm:w-full w-full p-8 lg:px-20 rounded-xl shadow-inner">
        <p className="text-4xl text-primary-main font-bold mb-2">Contact Us</p>
        <p className="ml-4 text-lg text-primary-main font-medium mb-4">
          Tells us what we can improve for you
        </p>
        <div>
          <form onSubmit={sendEmail}>
            <Grid container spacing={2} className="justify-center items-center">
              <Grid item lg={6} xs={12}>
                <div class="lg:mb-6 sm:mb-2 mb-2">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-primary-main dark:text-white"
                  >
                    Full Name<span className="text-[#ffc200]">*</span>
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-card dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your name here"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      handleSubmit();
                    }}
                    required
                  />
                </div>
              </Grid>
              <Grid item lg={6} xs={12}>
                <div class="lg:mb-6 sm:mb-4 mb-4">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email <span className="text-[#ffc200]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      handleSubmit();
                    }}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-card dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </Grid>
            </Grid>

            <div class="lg:mb-6 sm:mb-6 mb-6">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Message<span className="text-[#ffc200]">*</span>
              </label>
              <textarea
                type="text"
                id="message"
                name="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                  handleSubmit();
                }}
                value={message}
                cols="40"
                rows="5"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-card dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your message here"
                required
              />
            </div>
            {loading ? (
              <CircularProgress />
            ) : (
              <button
                type="submit"
                class="text-primary-dark font-bold bg-[#ffc200] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#ffc200] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                value="Send Message"
                disabled={disable}
              >
                Submit
              </button>
            )}
          </form>
        </div>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              style={{ backgroundColor: "#173371", color: "#fff" }}
              sx={{ width: "100%" }}
            >
              Thank you for the message. We will get back to you shortly.
            </Alert>
          </Snackbar>
        </Stack>
      </div>
    </div>
  );
}
