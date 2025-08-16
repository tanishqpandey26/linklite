import React, { useEffect, useState } from "react";
import { CiLogout } from "react-icons/ci";
import { FaCode } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";
import "../styles/Dashboard.css";

function DboardHeaderSection() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [currDate, setCurrDate] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser") || "User");
    const today = new Date();
    setCurrDate(today.toLocaleDateString(undefined, { 
      weekday: "long", year: "numeric", month: "long", day: "numeric" 
    }));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Logged Out");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };


   const [insights, setInsights] = useState({
  totalBookmarks: 0,
  mostUsedTag: null,
  recentBookmark: null
});

useEffect(() => {
  const fetchInsights = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:8080/account/insights", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", 
        }
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setInsights(data);
    } catch (err) {
      console.error("Failed to fetch insights:", err);
    }
  };

  fetchInsights();
}, []);



  return (
    <div className="dboardHeaderContainer">
      
      <div className="dboardHeaderUser">
        <div className="dboardHeaderUserTopLabel">
          <h1 className="dBoardWebName">LinkLite
          <FaCode className="webIcon" />
          </h1>

          <button className="dboardLogoutBtn" onClick={handleLogout}>
            Logout <CiLogout className="logoutIcon" />
          </button>
        </div>

        <div className="dboardHeaderUserName">
          Hi <span>{loggedInUser}</span>, Welcome to <span>LinkLite!</span>
        </div>

        <div className="dboardCurrDate">{currDate}</div>
      </div>

      
       <div className="dboardHeaderUserInsights">
      <div className="insightCard">
        <h4>Total Bookmarks</h4>
        <p>{insights.totalBookmarks}</p>
      </div>
      <div className="insightCard">
        <h4>Last Bookmark Tag</h4>
        <p>{insights.lastTag || "N/A"}</p>
      </div>
      <div className="insightCard">
        <h4>Recent Bookmark</h4>
        {insights.recentBookmark ? (
          <a href={insights.recentBookmark.url} target="_blank" rel="noreferrer">
            {insights.recentBookmark.title}
          </a>
        ) : (
          <p>N/A</p>
        )}
      </div>
    </div>

    </div>
  );
}

export default DboardHeaderSection;
