import { FaRegCommentDots, FaPhone, FaClock } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center h-12 px-4 py-2">
      <div className="flex items-center">
        <FaRegCommentDots
          className="mr-2 text-[var(--primary-dark)]"
          size={30}
        />
        <h1 className="font-bold text-xl text-gray-700">WEEKAWAY</h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <FaClock className="mr-2 text-[var(--primary-dark)]" size={20} />
          <p className="text-sm text-gray-700">9AM-5PM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <FaPhone className="mr-2 text-[var(--primary-dark)]" size={20} />
          <p className="text-sm text-gray-700">06-45-45-454</p>
        </div>
        <button>Get a Free Quote</button>
      </div>
    </div>
  );
};

export default TopBar;
