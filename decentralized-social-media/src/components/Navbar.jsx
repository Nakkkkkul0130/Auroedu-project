import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Using lucide-react icons (optional)

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold">Decentralized-social-media</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          <Link to="/" className="hover:underline font-semibold text-lg">Home</Link>
          <Link to="/create-profile" className="hover:underline font-semibold text-lg">Create Profile</Link>
          <Link to="/create-post" className="hover:underline font-semibold text-lg">Create Post</Link>
          <Link to="/view-posts" className="hover:underline font-semibold text-lg">View Posts</Link>
          <Link to="/follow-users" className="hover:underline font-semibold text-lg">Follow Users</Link>
          <Link to="/nft-posts" className="hover:underline font-semibold text-lg">NFT Posts</Link>
          <Link to="/censorship" className="hover:underline font-semibold text-lg">Censorship</Link>
        </div>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div className="flex flex-nowrap overflow-x-auto mt-4 md:hidden gap-6 py-4 px-2">
          <Link to="/" onClick={toggleMenu} className="hover:underline font-semibold text-lg">Home</Link>
          <Link to="/create-profile" onClick={toggleMenu} className="hover:underline font-semibold text-lg">Create Profile</Link>
          <Link to="/create-post" onClick={toggleMenu} className="hover:underline font-semibold text-lg">Create Post</Link>
          <Link to="/view-posts" onClick={toggleMenu} className="hover:underline font-semibold text-lg">View Posts</Link>
          <Link to="/follow-users" onClick={toggleMenu} className="hover:underline font-semibold text-lg">Follow Users</Link>
          <Link to="/nft-posts" onClick={toggleMenu} className="hover:underline font-semibold text-lg">NFT Posts</Link>
          <Link to="/censorship" onClick={toggleMenu} className="hover:underline font-semibold text-lg">Censorship</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
