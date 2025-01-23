import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

interface AvatarMenuProps {
  username: string;
  onLogout: () => void;
}

const AvatarMenu: React.FC<AvatarMenuProps> = ({ username, onLogout }) => {
  return (
    <div className="dropdown dropdown-bottom ">
      <div tabIndex={0} role="button" className="btn m-1 btn-ghost text-lg">
        <FaRegUser className="w-5 h-5" />
        <section className="hidden md:inline">{username}</section>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-300  rounded-box z-[1] w-32 p-2 shadow text-base-content"
      >
        <li onClick={onLogout}>
          <a>
            <MdLogout />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AvatarMenu;
