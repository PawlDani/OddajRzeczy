// components/Home/HomeHelpSection/HomeHelpSection.tsx
import React, { useState } from "react";
import styles from "./HomeHelp.module.scss"; //#endregion
import HomeDivider from "../HomeDivider/HomeDivider";
import decoration from "../../../assets/Decoration.svg";

type TabKey = "foundations" | "organizations" | "local";

interface TabContent {
  description: string;
  items: { title: string; detail: string; contents: string }[];
}

const tabs = [
  { id: "foundations", title: "Fundacjom" },
  { id: "organizations", title: "Organizacjom pozarządowym" },
  { id: "local", title: "Lokalnym zbiórkom" },
];

const contentForTabs: { [key in TabKey]: TabContent } = {
  foundations: {
    description:
      "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
    items: [
      {
        title: "Fundacja “Dbam o Zdrowie”",
        detail:
          "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        contents: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
      },
      {
        title: "Fundacja “Dla dzieci”",
        detail: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
        contents: "ubrania, meble, zabawki",
      },
      {
        title: "Fundacja “Bez domu”",
        detail:
          "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
        contents: "ubrania, jedzenie, ciepłe koce",
      },
      {
        // further random content
        title: "Fundacja " + Math.random().toString(36).substr(2, 5),
        detail: "Cel i misja: " + Math.random().toString(36).substr(2, 5),
        contents: "ubrania, jedzenie, ciepłe koce",
      },
      {
        title: "Fundacja " + Math.random().toString(36).substr(2, 5),
        detail: "Cel i misja: " + Math.random().toString(36).substr(2, 5),
        contents: "ubrania, jedzenie, ciepłe koce",
      },
      {
        title: "Fundacja " + Math.random().toString(36).substr(2, 5),
        detail: "Cel i misja: " + Math.random().toString(36).substr(2, 5),
        contents: "ubrania, jedzenie, ciepłe koce",
      },
      {
        title: "Fundacja " + Math.random().toString(36).substr(2, 5),
        detail: "Cel i misja: " + Math.random().toString(36).substr(2, 5),
        contents: "ubrania, jedzenie, ciepłe koce",
      },
      {
        title: "Fundacja " + Math.random().toString(36).substr(2, 5),
        detail: "Cel i misja: " + Math.random().toString(36).substr(2, 5),
        contents: "ubrania, jedzenie, ciepłe koce",
      },
      {
        title: "Fundacja " + Math.random().toString(36).substr(2, 5),
        detail: "Cel i misja: " + Math.random().toString(36).substr(2, 5),
        contents: "ubrania, jedzenie, ciepłe koce",
      },
    ],
  },
  organizations: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    items: [
      {
        title: "Organizacja “Lorem Ipsum 1”",
        detail: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
        contents: "egestas, sed, tempus",
      },
      {
        title: "Organizacja “Lorem Ipsum 2”",
        detail:
          "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
        contents: "ut, aliquam, purus, sit, amet",
      },
      {
        title: "Organizacja “Lorem Ipsum 3”",
        detail: "Scelerisque in dictum non consectetur a erat nam.",
        contents: "morbi, tristique, senectus, et, netus",
      },
      {
        title: "Organizacja “Lorem Ipsum 4”",
        detail: "Scelerisque in dictum non consectetur a erat nam.",
        contents: "morbi, tristique, senectus, et, netus",
      },
      {
        title: "Organizacja “Lorem Ipsum 5”",
        detail: "Scelerisque in dictum non consectetur a erat nam.",
        contents: "morbi, tristique, senectus, et, netus",
      },
      {
        title: "Organizacja “Lorem Ipsum 6”",
        detail: "Scelerisque in dictum non consectetur a erat nam.",
        contents: "morbi, tristique, senectus, et, netus",
      },
    ],
  },
  local: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    items: [
      {
        title: "Zbiórka “Lorem Ipsum 1”",
        detail: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
        contents: "egestas, sed, tempus",
      },
      {
        title: "Zbiórka “Lorem Ipsum 2”",
        detail:
          "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
        contents: "ut, aliquam, purus, sit, amet",
      },
      {
        title: "adasdasdasdpsum 3”",
        detail: "Scelddasdasdasderisque in dictum non consectetur a erat nam.",
        contents: "morbi, tsssssssristique, senectus, et, netus",
      },
    ],
  },
};
const ITEMS_PER_PAGE = 3;
const HomeHelpSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("foundations");
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (tabId: TabKey) => {
    console.log(`Tab changed to: ${tabId}`); // New log
    setActiveTab(tabId);
    setCurrentPage(1);
  };

  const dividerContent = {
    svg: decoration,
    title: "Komu pomagamy?",
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = contentForTabs[activeTab].items.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(
    contentForTabs[activeTab].items.length / ITEMS_PER_PAGE
  );

  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => {
          console.log(`Changing page to: ${i}`); // New log
          setCurrentPage(i);
        }}
        className={currentPage === i ? styles.activePage : ""}
      >
        {i}
      </button>
    );
  }

  return (
    <div className={`${styles.helpSection} container`}>
      <div className={styles.helpSectionTitle}>
        <HomeDivider dividerContent={dividerContent} />
      </div>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${
              activeTab === tab.id ? styles.active : ""
            }`}
            onClick={() => handleClick(tab.id as TabKey)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles.description}>
        {contentForTabs[activeTab].description}
      </div>
      <div className={styles.items}>
        {paginatedItems.map((item, index) => (
          <div key={index} className={styles.item}>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <div className={styles.itemWrapper}>
              <p className={styles.itemDetail}>{item.detail}</p>
              <p className={styles.itemContents}>{item.contents}</p>
            </div>
            <hr className={styles.divider} />
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className={styles.pagination}>{paginationButtons}</div>
      )}
    </div>
  );
};

export default HomeHelpSection;
