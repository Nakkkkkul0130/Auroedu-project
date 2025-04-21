import React, { useEffect, useState } from 'react';

function ViewPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  const handleRemovePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">All Posts</h1>

      {posts.length === 0 ? (
        <p className="text-gray-500 text-center">No posts yet!</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-6 border rounded-md shadow-md bg-white space-y-3"
            >
              <p className="text-sm text-gray-500 font-semibold">@{post.username}</p>
              <p className="text-lg">{post.content}</p>

              <button
                onClick={() => handleRemovePost(post.id)}
                className="mt-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md"
              >
                Remove Post
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewPosts;
