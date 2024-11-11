import React, { useEffect, useState } from "react";

const MessageView = ({ currentSelectedGroup, refreshTrigger }) => {
  const [messages, setMessages] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    // Retrieve groups from localStorage
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];

    // Find the selected group and set its messages to state
    const group = storedGroups.find(
      (group) => group.name === currentSelectedGroup?.name
    );
    setMessages(group?.messages || []);
  }, [currentSelectedGroup, refreshTrigger]); // Re-run when selected group or refreshTrigger changes

  useEffect(() => {
    console.log("isFirstRender", isFirstRender);
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
  }, [isFirstRender]);

  return (
    <div className="message-view">
      {messages.map((message, index) => (
        <div key={index} className="message-item">
          <div className="message-content">{message.content}</div>
          <div className="message-meta">
            {new Date(message?.timestamp).toLocaleDateString()}{" "}
            <span className="meta-separator"></span>{" "}
            {new Date(message?.timestamp).toLocaleTimeString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageView;
