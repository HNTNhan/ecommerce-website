import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

import "../Assets/Styles/breadcrumb.css";

export default function Breadcrumb(props) {
  function createPath() {
    let tempPath = "";
    const paths = props.location.pathname.split("/").map((link, index, arr) => {
      if (link === "") {
        tempPath += "/";
        return (
          <Fragment key={nanoid()}>
            <Link className="breadcrumb-link" to="/">
              Home
            </Link>
            <span>
              <svg
                width="6"
                height="11"
                viewBox="0 0 6 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="black"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                ></path>
              </svg>
            </span>
          </Fragment>
        );
      }
      tempPath = tempPath + link + "/";

      return (
        <Fragment key={nanoid()}>
          <Link className="breadcrumb-link" to={tempPath.slice(0, -1)}>
            {link
              .split("-")
              .map((word) => word[0].toUpperCase() + word.slice(1))
              .join(" ")}
          </Link>
          {index < arr.length - 1 && (
            <span>
              <svg
                width="6"
                height="11"
                viewBox="0 0 6 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="black"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                ></path>
              </svg>
            </span>
          )}
        </Fragment>
      );
    });

    return paths;
  }

  return (
    <section className="breadcrumb">
      <div className="container">
        <div className="breadcumb__content">{createPath()}</div>
      </div>
    </section>
  );
}
