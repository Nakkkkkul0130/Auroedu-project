import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateProfile() {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const navigate = useNavigate();

  const handleCreateProfile = () => {
    if (!username.trim() || !bio.trim()) {
      alert('Please fill all fields');
      return;
    }

    const existingProfiles = JSON.parse(localStorage.getItem('profiles')) || [];

    // Check if username already exists
    const usernameExists = existingProfiles.some(
      (profile) => profile.username.toLowerCase() === username.toLowerCase()
    );

    if (usernameExists) {
      alert('Username already exists. Please choose another one.');
      return;
    }

    const newProfile = {
      id: Date.now(), // Unique ID
      username,
      bio,
      followers: [],
      following: [],
    };

    localStorage.setItem('profiles', JSON.stringify([...existingProfiles, newProfile]));
    localStorage.setItem('username', username); // Save for session usage

    alert('Profile created successfully');
    navigate('/'); // Redirect to homepage
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Create Profile</h1>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Username</label>
        <input
          type="text"
          placeholder="Enter a unique username"
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Bio</label>
        <textarea
          placeholder="Tell us something about you..."
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows="4"
        ></textarea>
      </div>

      <button
        onClick={handleCreateProfile}
        className="w-full py-3 bg-green-500 text-white rounded hover:bg-green-600 font-semibold"
      >
        Create Profile
      </button>
    </div>
  );
}

export default CreateProfile;
