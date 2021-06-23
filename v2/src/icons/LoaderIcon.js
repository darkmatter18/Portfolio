import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

const LoaderIcon = ({isOnLoader}) => (
  <svg id="logo" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="A" className={clsx(isOnLoader ? "opacity-0" : "opacity-100")}>
      <path
        d="M94.0501 96L88.6501 83.904H62.0101L56.5381 96H48.4741L71.2261 45.6H79.9381L102.546 96H94.0501ZM71.4421 63.168L65.3941 76.416H85.2661L79.0741 62.88C78.4501 61.344 77.8261 59.832 77.2021 58.344C76.5781 56.856 75.9541 55.272 75.3301 53.592C74.6581 55.32 74.0101 56.976 73.3861 58.56C72.7621 60.096 72.1141 61.632 71.4421 63.168Z"
        className={"fill-purple"}/>
    </g>
    <path
      d="M80 8.66025L129.952 37.5C133.046 39.2863 134.952 42.5876 134.952 46.1603V103.84C134.952 107.412 133.046 110.714 129.952 112.5L80 141.34C76.906 143.126 73.094 143.126 70 141.34L20.0481 112.5C16.9541 110.714 15.0481 107.412 15.0481 103.84V46.1603C15.0481 42.5876 16.9541 39.2863 20.0481 37.5L70 8.66025C73.094 6.87393 76.906 6.87393 80 8.66025Z"
      className={"stroke-current text-purple-600"} strokeWidth="10"/>
  </svg>
)

LoaderIcon.propTypes = {
  isOnLoader: PropTypes.bool.isRequired
}


export default LoaderIcon