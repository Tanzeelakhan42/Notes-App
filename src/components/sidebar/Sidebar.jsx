import { useState, useEffect } from "react";
import "../../styles/sidebar.styles.scss";
import AddModal from "./AddModal";

const Sidebar = ({ setCurrentSelectedGroup, setShowContent }) => {
  const [open, setOpen] = useState(false);
  const [groups, setGroups] = useState([]);

  const handleClick = (group) => {
    setCurrentSelectedGroup(group);
    setShowContent(true);
  };

  useEffect(() => {
    // Fetch groups from localStorage when the component mounts
    const savedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroups(savedGroups);
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="sidebar-container">
      <h2 className="sidebar-title">Pocket Notes</h2>
      <div className="sidebar-menu-list">
        {groups.map((group, index) => (
          <div
            key={index}
            className="sidebar-menu"
            onClick={() => handleClick(group)}
          >
            <div
              className="group-name-initials"
              style={{ backgroundColor: group.color }}
            >
              {group.name.slice(0, 2).toUpperCase()}{" "}
              {/* Use the first two letters of the group name */}
            </div>
            <div className="group-title">{group.name}</div>
          </div>
        ))}
      </div>
      <AddModal open={open} setOpen={(val) => setOpen(val)} />
      <div className="add-menu-button" onClick={() => setOpen(true)}>
        +
      </div>
    </div>
  );
};

export default Sidebar;
