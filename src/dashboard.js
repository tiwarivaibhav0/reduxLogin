import {} from "@shopify/polaris";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import {
  TopBar,
  ActionList,
  Icon,
  VisuallyHidden,
  Frame,
} from "@shopify/polaris";
import { ArrowLeftMinor, QuestionMarkMajor } from "@shopify/polaris-icons";
import { connect } from "react-redux";
import { addInfo } from "./redux/user/userActions";
const Dashboard = (props) => {
  const navigate = useNavigate();

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    []
  );

  const handleSearchChange = useCallback((value) => {
    setSearchValue(value);
    setIsSearchActive(value.length > 0);
  }, []);

  const handleNavigationToggle = useCallback(() => {
    console.log("toggle navigation visibility");
  }, []);

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [
            {
              content: "Logout",
              icon: ArrowLeftMinor,
              onAction: () => {
                sessionStorage.clear();
                navigate("/");
              },
            },
          ],
        },
      ]}
      name={JSON.parse(sessionStorage.getItem("user")).name}
      detail={JSON.parse(sessionStorage.getItem("user")).username}
      initials={JSON.parse(sessionStorage.getItem("user")).name[0]}
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchChange}
      value={searchValue}
      placeholder="Search"
      showFocusBorder
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchField={searchFieldMarkup}
      onNavigationToggle={handleNavigationToggle}
    />
  );
  if (sessionStorage.getItem("apiKey")) {
    return (
      <>
        <div style={{ height: "250px" }}>
          <Frame topBar={topBarMarkup} />
        </div>
        <div className="logo">Dashboard</div> <div className="dashboard"></div>
      </>
    );
  } else {
    return (
      <>
        <h1>Please Login First</h1>
      </>
    );
  }
};

export default Dashboard;
