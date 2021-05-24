import React from "react";
import { Spinner } from "react-bootstrap";
import PropTypes from "prop-types";

// Documentation :
// styleClasses = for Primary/Secondary or custom css
// buttonType = for submit or reset
// onClick = Click event for button
// icon = url of Icon for button
// value = for Button Text
// isProgress = for Progressing Button
// spinnerClasses = for Spinner Style Classes

const Button = (props) => {
  return (
    <>
      <button
        className={`btn ${props.styleClasses}`}
        type={`${props.buttonType}`}
        onClick={props.onClick}
      >
        {props.icon && (
          <div
            className="btn-icon"
            style={{ backgroundImage: `url(${props.icon})` }}
          ></div>
        )}
        <label className="label-txt">{props.value}</label>
        {props.isProgress && (
          <Spinner
            animation={props.spinnerAnimation}
            className={`spinner-style spinner-border-sm ${props.spinnerClasses}`}
          ></Spinner>
        )}
      </button>
    </>
  );
};

Button.defaultProps = {
  isProgress: false,
  buttonType: "button",
  styleClasses: "",
  spinnerClasses: "",
  spinnerAnimation: "border",
};

Button.propTypes = {
  baseStyle: PropTypes.string,
  StyleClasses: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
  isProgress: PropTypes.bool,
  icon: PropTypes.string,
  spinnerAnimation: PropTypes.string,
};

export default Button;
