import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "../../styles/addmodal.styles.scss";

const AddModal = ({ open, setOpen }) => {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const onCloseModal = () => setOpen(false);

  const colors = [
    { code: "#B38BFA" },
    { code: "#FF79F2" },
    { code: "#43E6FC" },
    { code: "#F19576" },
    { code: "#0047FF" },
    { code: "#6691FF" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!groupName || !selectedColor) {
      alert("Please provide both a group name and select a color.");
      return;
    }

    const newGroup = {
      name: groupName,
      color: selectedColor,
    };

    const existingGroups = JSON.parse(localStorage.getItem("groups")) || [];

    existingGroups.push(newGroup);

    localStorage.setItem("groups", JSON.stringify(existingGroups));

    setGroupName("");
    setSelectedColor("");
    setOpen(false);
    window.location.reload();
  };

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      center
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      showCloseIcon={false}
    >
      <h4>Create New Group</h4>
      <form className="add-group-form" onSubmit={handleSubmit}>
        <div className="add-group-field">
          <div className="label">Group Name</div>
          <input
            className="group-name-input"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </div>
        <div className="add-group-field">
          <div className="label">Choose Colour</div>
          <div className="color-codes">
            {colors.map((color) => (
              <div
                key={color.code}
                className={`color-selector ${
                  selectedColor === color.code ? "selected" : ""
                }`}
                style={{ backgroundColor: color.code }}
                onClick={() => setSelectedColor(color.code)}
              />
            ))}
          </div>
        </div>
        <div className="form-submit">
          <button type="submit" className="submit-button">
            Create
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddModal;
