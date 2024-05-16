import React from "react";

const CardStyle = {
  padding: "2rem",
};

export default React.memo(function Card({ children }: { children: React.ReactNode }) {
  return <div style={CardStyle}>{children}</div>;
});
