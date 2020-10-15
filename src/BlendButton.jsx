import React, { useState, useEffect } from "react";

const BlendButton = ({
  btnText,
  colorMain,
  borderRadius,
  padding,
  fontSize,
}) => {
  //buttons require a unique id as each one must be referenced to locate it's parent.
  //function credit https://gist.github.com/gordonbrander/2230317
  const id = (() => Math.random().toString(36).substr(2, 4))();

  const [isHover, setIsHover] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isBackgroundGradient, setIsBackgroundGradient] = useState(false);
  const [parentBackground, setParentBackground] = useState("");

  useEffect(() => {
    const target = document.querySelector(`#blend-btn-${id}`);
    const parent = target.parentElement;
    const background = window.getComputedStyle(parent).backgroundColor;
    const backgroundImage = window.getComputedStyle(parent).backgroundImage;
    // console.log("background:", background);
    // console.log("backgroundImage:", backgroundImage);

    //checks for linear-gradient background
    if (backgroundImage !== "none") {
      setIsBackgroundGradient(true);
      return setParentBackground(backgroundImage);
    }

    if (background === "rgba(0, 0, 0, 0)" && backgroundImage === "none")
      return setParentBackground("white");

    setParentBackground(background);

    //handling if no background color is set
  }, [isBackgroundGradient, id]);
  console.log("isBackgroundGradient:", isBackgroundGradient);
  console.log("parentBackground:", parentBackground);

  const blendBtnStyle = {
    border: "none",
    outline: "none",
    cursor: "pointer",
    color: parentBackground,
    transition: "all 0.3s",
    transform: isMouseDown ? "scale(.9)" : "",

    //props passed in by user
    borderRadius,
    background: colorMain,
    padding,
    fontSize,
  };

  const blendBtnHoverStyle = {
    ...blendBtnStyle,
    background: "transparent",
    color: colorMain,
    border: `solid 1px ${colorMain}`,
  };

  // if (isBackgroundGradient) {
  //   blendBtnStyle.WebKitBackgroundClip = "text";
  //   blendBtnStyle.WebkitTextFillColor = "transparent";
  // }

  const gradientText = {
    backgroundImage: parentBackground,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <button
      className="blend-btn"
      id={`blend-btn-${id}`}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
      style={isHover ? blendBtnHoverStyle : blendBtnStyle}
    >
      {/* if gradient, wrap in TextGradient, if not just text */}
      {isBackgroundGradient ? (
        <p style={isHover ? { color: colorMain } : gradientText}>{btnText}</p>
      ) : (
        btnText
      )}
    </button>
  );
};

BlendButton.defaultProps = {
  padding: "1vw",
  colorMain: "black",
  btnText: "Submit",
};

export default BlendButton;
