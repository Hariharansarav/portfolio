export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="text-white font-bold text-xl tracking-widest">
          HS
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="text-white border-b-2 border-white pb-1">Home</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Skills</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
