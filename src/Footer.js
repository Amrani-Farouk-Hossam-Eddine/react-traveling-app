import { FaRegCommentDots } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1140px] w-full px-4 py-16 mx-auto">
      <div className="flex justify-center items-center pt-4 border-t-[4px] border-gary-700">
        <FaRegCommentDots
          className="mr-2 text-[var(--primary-dark)]"
          size={30}
        />
        <h1 className="font-bold text-xl text-gray-700">WEEKAWAY</h1>
      </div>
    </div>
  );
};

export default Footer;
