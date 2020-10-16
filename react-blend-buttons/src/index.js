import React, { useState, useEffect } from "react";

const BlendButton = ({
  btnText,
  colorMain,
  borderRadius,
  padding,
  fontSize,
  onClick,
}) => {
  //buttons require a unique id as each one must be referenced to locate it's parent.
  //function credit https://gist.github.com/gordonbrander/2230317
  const id = (() => Math.random().toString(36).substr(2, 4))();

  const [isHover, setIsHover] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isBackgroundImage, setIsBackgroundImage] = useState(false);
  const [parentBackground, setParentBackground] = useState("");

  useEffect(() => {
    //locating the target of the rendered Blend Button component
    const target = document.querySelector(`#blend-btn-${id}`);
    const parent = target.parentElement;
    const background = window.getComputedStyle(parent).backgroundColor;
    const backgroundImage = window.getComputedStyle(parent).backgroundImage;

    //checks for linear-gradient background
    if (backgroundImage !== "none") {
      setIsBackgroundImage(true);
      return setParentBackground(backgroundImage);
    }

    //handling if no background color is set
    if (background === "rgba(0, 0, 0, 0)" && backgroundImage === "none")
      return setParentBackground("white");

    setParentBackground(background);
  }, [isBackgroundImage, id]);

  const blendBtnStyle = {
    border: "none",
    outline: "none",
    cursor: "pointer",
    color: parentBackground,
    transition: "all 0.3s",
    transform: isMouseDown && "scale(.9)",

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

  const backgroundImageText = {
    //black fallback color
    backgroundColor: "#000",
    backgroundImage: parentBackground,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <button
      id={`blend-btn-${id}`}
      className="blend-btn"
      onClick={onClick}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
      style={isHover ? blendBtnHoverStyle : blendBtnStyle}
    >
      {isBackgroundImage ? (
        <p style={isHover ? { color: colorMain } : backgroundImageText}>
          {btnText}
        </p>
      ) : (
        btnText
      )}
    </button>
  );
};

BlendButton.defaultProps = {
  btnText: "Submit",
  padding: ".8vw 2vw",
  colorMain: "black",
};

export default BlendButton;
