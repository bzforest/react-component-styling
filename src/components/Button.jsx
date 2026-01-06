// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// รับ type/text ตรง ๆ จาก props ที่ส่งเข้ามา
function Button({ type, text }) {
  let backgroundColor = "#074ee8";
  if (type === "secondary") {
    backgroundColor = "#07a4e8";
  }

  return (
    <div>
      <button
        css={css`
          padding-left: 16px;
          padding-right: 16px;
          border-radius: 4px;
          color: white;
          width: 171px;
          height: 50px;
          font-size: 16px;
          background-color: ${backgroundColor};
        `}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
