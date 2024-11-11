import "../../styles/content.styles.scss";
import EmptyState from "../../assets/empty-state.svg";
import Header from "./Header";
import MessageView from "./MessageView";
import MessageInput from "./MessageInput";
import { useState } from "react";

const Content = ({ setShowContent, currentSelectedGroup }) => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const handleTriggerRefresh = () => {
    setRefreshTrigger((prev) => prev + 1);
  };
  return (
    <div className="content-container">
      {currentSelectedGroup ? (
        <>
          <Header
            group={currentSelectedGroup}
            setShowContent={setShowContent}
          />
          <MessageView
            currentSelectedGroup={currentSelectedGroup}
            refreshTrigger={refreshTrigger}
          />
          <MessageInput
            currentSelectedGroup={currentSelectedGroup}
            setRefreshTrigger={handleTriggerRefresh}
          />
        </>
      ) : (
        <div className="emptystate-container">
          <img src={EmptyState} />
          <div className="empty-state-title">Pocket Notes</div>
          <p>
            Send and receive messages without keeping your phone online. <br />{" "}
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
        </div>
      )}
    </div>
  );
};

export default Content;
