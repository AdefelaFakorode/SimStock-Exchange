import React from "react";

const Card = ({ children }) => {
  const borderColor = "rgba(243, 243, 243, 0.3)";

  return (
    <div
      className={"w-full h-full rounded-md relative p-8 border-[.1px] bg-background"}
      style={{ borderColor: borderColor }}
    >
      {children}
    </div>
  );
};

export default Card;
