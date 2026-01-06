/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button({ variant, children }) {
  let buttonStyle = css``;

  if (variant === "primary") {
    buttonStyle = css`
      background-color: #074EE8;
      color: white;
      padding: 12px 32px;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
    `;
  }

  if (variant === "secondary") {
    buttonStyle = css`
      background-color: #07A4E8;
      color: white;
      padding: 12px 32px;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
    `;
  }

  return <button css={buttonStyle}>{children}</button>;
}

export default Button;