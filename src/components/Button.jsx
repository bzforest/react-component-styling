/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button({ variant, children }) {
  let bgColor = "";

  if (variant === "primary") {
    bgColor = "#074EE8";
  } else if (variant === "secondary") {
    bgColor = "#07A4E8";
  } else {
    bgColor = "#ccc"; // default
  }

  const buttonStyle = css`
    background-color: ${bgColor};
    color: white;
    padding: 12px 32px;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    border: none;
  `;

  return <button css={buttonStyle}>{children}</button>;
}

export default Button;