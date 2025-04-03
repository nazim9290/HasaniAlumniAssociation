import React, { useEffect } from "react";
import Swal from "sweetalert2";
import popupImage from "../../../assets/punormiloniLogo.jpg";

const DefaultPopup = () => {
  useEffect(() => {
    // if (-1 === document.cookie.indexOf("returning=true")) {
    // run only if cookie not found (-1 means not found)

    Swal.fire({
      html: `
        <div style="text-align: center; height:70vh">
          <img src="${popupImage}" alt="Popup Image" style="width: 50%; max-width: 400px; margin-bottom: 10px;"/>
          <h3 style="color: #8B0000; font-weight: bold;">২য় পুনর্মিলনী মেলা</h3>
          <p style="font-size: 15px; color: #333;">
            হাজী মাদবর আলী হাচানিয়া দাখিল মাদ্রাসা অ্যালামনাই অ্যাসোসিয়েশন
          </p>
          <a href="https://forms.gle/K4YHsopr9fZmwFKc6" target="_blank" style="
            display: inline-block;
            background-color: #a83232;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            margin-top: 10px;
          ">REGISTER NOW!</a>
        </div>
        <p style="margin-top: 10px; font-size: 14px; color: #666;">
          This will close in <span id="timer">10</span> seconds
        </p>
      `,
      showConfirmButton: false,
      showCloseButton: true,
      timer: 10000,
      willOpen: () => {
        let timerInterval;
        const timerEl = document.getElementById("timer");
        let timeLeft = 10;
        timerInterval = setInterval(() => {
          timeLeft -= 1;
          if (timerEl) timerEl.textContent = timeLeft;
          if (timeLeft <= 0) clearInterval(timerInterval);
        }, 1000);
      },
    }); // alert
    document.cookie = "returning=true"; // set cookie
    // }
  }, []);

  return <div></div>;
};

export default DefaultPopup;
