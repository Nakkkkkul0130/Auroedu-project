import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Import Pages
import Home from './pages/Home';
import Profile from './pages/Profile'; // Add Profile Page
import CreateProfile from './pages/CreateProfile';
import CreatePost from './pages/CreatePost';
import ViewPosts from './pages/ViewPosts';
import FollowUsers from './pages/FollowUsers';
import NFTPosts from './pages/NFTPosts';
import Censorship from './pages/Censorship';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:username" element={<Profile />} /> {/* Dynamic profile route */}
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/view-posts" element={<ViewPosts />} />
        <Route path="/follow-users" element={<FollowUsers />} />
        <Route path="/nft-posts" element={<NFTPosts />} />
        <Route path="/censorship" element={<Censorship />} />
      </Routes>
    </Router>
  );
}

export default App;
