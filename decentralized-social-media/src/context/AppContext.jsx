import React, { createContext, useState, useContext } from 'react';

// Create Context
const AppContext = createContext();

// Provider Component
export function AppProvider({ children }) {
  const [userProfile, setUserProfile] = useState(() => {
    const savedProfile = localStorage.getItem('userProfile');
    return savedProfile ? JSON.parse(savedProfile) : { username: '', bio: '' };
  });

  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('posts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  const updateProfile = (newProfile) => {
    setUserProfile(newProfile);
    localStorage.setItem('userProfile', JSON.stringify(newProfile)); // Save to localStorage
  };

  const addPost = (post) => {
    const updatedPosts = [...posts, post];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts)); // Save to localStorage
  };

  return (
    <AppContext.Provider value={{ userProfile, posts, updateProfile, addPost }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom Hook to Use Context
export const useAppContext = () => useContext(AppContext);
