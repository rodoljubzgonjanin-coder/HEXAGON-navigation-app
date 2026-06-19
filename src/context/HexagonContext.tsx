import React, { createContext, useState, useContext } from 'react';

const HexagonContext = createContext(null);

export const HexagonProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (bookmark) => {
    setBookmarks([...bookmarks, { ...bookmark, id: Date.now().toString() }]);
  };

  const removeBookmark = (id) => {
    setBookmarks(bookmarks.filter((b) => b.id !== id));
  };

  return (
    <HexagonContext.Provider value={{ userLocation, setUserLocation, bookmarks, addBookmark, removeBookmark }}>
      {children}
    </HexagonContext.Provider>
  );
};

export const useHexagon = () => {
  const context = useContext(HexagonContext);
  if (!context) {
    throw new Error('useHexagon must be used within HexagonProvider');
  }
  return context;
};
