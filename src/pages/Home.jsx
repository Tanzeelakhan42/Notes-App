import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/content/Content";
import "../styles/home.styles.scss";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const [currentSelectedGroup, setCurrentSelectedGroup] = useState("");
  const [showContent, setShowContent] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div className="home-page">
      {isMobile ? (
        <>
          {showContent ? (
            <Content
              setShowContent={setShowContent}
              currentSelectedGroup={currentSelectedGroup}
            />
          ) : (
            <Sidebar
              setCurrentSelectedGroup={setCurrentSelectedGroup}
              setShowContent={setShowContent}
            />
          )}
        </>
      ) : (
        <>
          <Sidebar
            setCurrentSelectedGroup={setCurrentSelectedGroup}
            setShowContent={setShowContent}
          />
          <Content
            setShowContent={setShowContent}
            currentSelectedGroup={currentSelectedGroup}
          />
        </>
      )}
    </div>
  );
};

export default Home;
