
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md text-white py-4 px-6 flex justify-between items-center z-20">

      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <ul className="flex space-x-6">
        <li><a href="#about" className="hover:text-gray-400">About</a></li>
        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

