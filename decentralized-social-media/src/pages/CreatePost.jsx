import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [inputUsername, setInputUsername] = useState('');
  const [verifiedUsername, setVerifiedUsername] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleCheckUsername = () => {
    const storedUsername = localStorage.getItem('username');

    if (storedUsername && storedUsername === inputUsername) {
      setVerifiedUsername(storedUsername);
    } else {
      alert('Username not found! Please create your profile first.');
      navigate('/create-profile');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      id: Date.now(), // unique id
      username: verifiedUsername,
      content,
    };

    const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
    existingPosts.push(post);
    localStorage.setItem('posts', JSON.stringify(existingPosts));

    navigate('/');
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create a Post</h1>

      {/* Enter Username First */}
      {!verifiedUsername && (
        <div className="space-y-4 mb-8">
          <label className="block font-semibold text-lg">Enter your Profile Username</label>
          <input
            type="text"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
            placeholder="Enter username..."
            className="w-full p-3 border rounded-md"
            required
          />
          <button
            onClick={handleCheckUsername}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md"
          >
            Check Username
          </button>
        </div>
      )}

      {/* If username verified, show Create Post Form */}
      {verifiedUsername && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold">Post Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full p-3 border rounded-md"
              placeholder="What's on your mind?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md"
          >
            Create Post
          </button>
        </form>
      )}
    </div>
  );
}

export default CreatePost;
