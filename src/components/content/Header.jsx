import React from "react";
import { useMediaQuery } from "react-responsive";
import BackIcon from "../../assets/back-icon.svg";

const Header = ({ group, setShowContent }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div className="header">
      {isMobile && <img src={BackIcon} onClick={() => setShowContent(false)} />}
      <div
        className="group-name-initials"
        style={{ backgroundColor: group.color }}
      >
        {group?.name?.slice(0, 2).toUpperCase()}{" "}
        {/* Use the first two letters of the group name */}
      </div>
      <div className="group-title" style={{ color: "white" }}>
        {group.name}
      </div>
    </div>
  );
};

export default Header;
