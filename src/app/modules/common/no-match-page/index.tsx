import React from "react";
import { Link } from "react-router-dom";

// cc:refactor this component, inline css need to be moved to proper styled components

export const NoMatchPage = () => {
  const isLoading = document.getElementById("general-loader");
  return (
    <div
      css={`
        position: relative;
        width: 100%;
        height: 100%;
        padding: 50px;
        display: ${isLoading ? "none" : "flex"};
        justify-content: center;
        align-items: center;
        flex-direction: column;
      `}
    >
      <div
        css={`
          font-family: "GothamNarrow-Book", "Helvetica Neue", sans-serif;
          font-size: 14px;
          font-weight: 500;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.71;
          letter-spacing: 0.1px;
          color: #525252;
        `}
      >
        Oops! Page not found
      </div>
      <div
        css={`
          font-size: 120px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: 2.15px;
          color: #525252;
          font-family: "GothamNarrow-Bold", "Helvetica Neue", sans-serif;
        `}
      >
        404
      </div>
      <div
        css={`
          font-family: "GothamNarrow-Book", "Helvetica Neue", sans-serif;
          font-size: 14px;
          font-weight: 600;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.71;
          letter-spacing: 1.25px;
          text-align: center;
          color: #525252;
          margin-bottom: 50px;
        `}
      >
        We are sorry, but the page you requested was not found
      </div>
      <Link
        to="/"
        css={`
          text-decoration: none;
        `}
      >
        <div
          css={`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 204px;
            height: 46px;
            background: #495057;
            border-radius: 20px;
          `}
        >
          <span
            css={`
              font-family: "GothamNarrow-Book", "Helvetica Neue", sans-serif;
              font-size: 14px;
              font-weight: 500;
              font-style: normal;
              font-stretch: normal;
              line-height: 1.5;
              letter-spacing: 0.15px;
              color: white;
            `}
          >
            Back to Home Page
          </span>
        </div>
      </Link>
    </div>
  );
};
