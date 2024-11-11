import React, { useState } from "react";
import SendIcon from "../../assets/send-icon.svg";
import DisabledSendIcon from "../../assets/disabled-send-icon.svg";

const MessageInput = ({ currentSelectedGroup, setRefreshTrigger }) => {
  const [message, setMessage] = useState("");
  const groupName = currentSelectedGroup?.name;
  const submitMessage = () => {
    if (!message) {
      alert("Please enter a message.");
      return;
    }

    // Retrieve the existing groups from localStorage
    const existingGroups = JSON.parse(localStorage.getItem("groups")) || [];

    // Find the group by name
    const group = existingGroups.find((group) => group.name === groupName);

    if (group) {
      // If messages array does not exist, initialize it
      if (!group.messages) {
        group.messages = [];
      }

      // Create a message object with content and timestamp
      const newMessage = {
        content: message,
        timestamp: new Date().toISOString(), // Store the current date and time
      };

      // Add the new message to the group's messages array
      group.messages.push(newMessage);

      // Update localStorage with the modified groups array
      localStorage.setItem("groups", JSON.stringify(existingGroups));

      // Clear the message input field or reset any necessary state
      setMessage("");
      setRefreshTrigger();
    } else {
      alert("Group not found. Please select an existing group.");
    }
  };

  return (
    <div className="message-input-container">
      <textarea
        className="message-input"
        placeholder="Here’s the sample text for sample work"
        onChange={(event) => setMessage(event.target.value)}
        value={message}
      />
      <button className="send-button" onClick={submitMessage}>
        <img
          className="send-icon"
          src={message ? SendIcon : DisabledSendIcon}
        />
      </button>
    </div>
  );
};

export default MessageInput;
