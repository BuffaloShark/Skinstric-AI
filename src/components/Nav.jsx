import React from "react";
import HomeButton from "./HomeButton";
import CodeButton from "./CodeButton";

const Nav = () => {
  return (
    <header className="nav">
      <HomeButton />
      <CodeButton label="ENTER CODE" />
    </header>
  );
};

export default Nav;
