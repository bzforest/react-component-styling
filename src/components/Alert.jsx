/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Alert({ severity = "info", children }) {
  let bgColor = "#F9EBC8";
  let iconSrc = "/icon/alert-circle.png";

  if (severity === "error") {
    bgColor = "#F9C8C8";
    iconSrc = "/icon/frown.png";
  } else if (severity === "warning") {
    bgColor = "#F9D9C8";
    iconSrc = "/icon/alert-triangle.png";
  } else if (severity === "success") {
    bgColor = "#CEF7CD";
    iconSrc = "/icon/check-circle.png";
  }

  return (
    <div
      css={css`
        margin: 10px;
        display: flex;
        align-items: center;
        padding-left: 20px;
        width: 650px;
        height: 76px;
        font-family: "Kanit", sans-serif;
        font-weight: 700;
        font-size: 20px;
        color: #444444;
        border-radius: 10px;
        background-color: ${bgColor};
      `}
    >
      <img
        src={iconSrc}
        alt={severity}
        css={css`
          width: 28px;
          height: 28px;
          margin-right: 20px;
        `}
      />
      {children}
    </div>
  );
}

export default Alert;