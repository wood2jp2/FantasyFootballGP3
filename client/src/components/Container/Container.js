import React from "react";
import "materialize-css";
import "react-materialize";

const Container = props =>
  <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;

export default Container;
