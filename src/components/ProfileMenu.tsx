import { ChevronDown, LogOut, UserRound } from "lucide-react";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../constants/api";
import { clearUser } from "../utils/userSlice";
import type { RootState } from "../utils/appStore";

const getUserLabel = (user: Record<string, unknown>) => {
  const label = user.name ?? user.username ?? user.email;
  return typeof label === "string" && label ? label : "Profile";
};

export const ProfileMenu = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  const handleLogout = async () => {
    try {
      await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      dispatch(clearUser());
      setIsOpen(false);
      navigate("/");
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex items-center gap-2 rounded-md px-3 py-2 font-semibold text-gray-800 transition hover:bg-white"
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <UserRound size={18} />
        <span>{getUserLabel(user)}</span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-30 mt-2 min-w-44 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg" role="menu">
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              navigate("/profile");
            }}
            className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-gray-700 hover:bg-orange-50"
            role="menuitem"
          >
            <UserRound size={16} />
            Profile
          </button>
          <button
            type="button"
            onClick={() => void handleLogout()}
            className="flex w-full items-center gap-2 border-t border-gray-100 px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50"
            role="menuitem"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};