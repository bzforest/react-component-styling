// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
function Alert({ type, text, imgSrc }) {
  let backgroundColor;
  if (type === "error") {
    backgroundColor = "#FEE2E2";
  } else if (type === "warning") {
    backgroundColor = "#FCE7D6";
  } else if (type === "info-alert") {
    backgroundColor = "#FEF3C7";
  } else if (type === "success") {
    backgroundColor = "#DCFCE7";
  }

  return (
    <div style={{}}>
      <button
        css={css`
          margin: 16px;
          width: 650px;
          height: 76px;
          color: gray;
          background-color: ${backgroundColor};
        `}
      >
        <img
          src={imgSrc}
          alt=""
          css={css`
            width: 24px;
            height: 24px;
          `}
        />
        {text}
      </button>
    </div>
  );
}

export default Alert;
