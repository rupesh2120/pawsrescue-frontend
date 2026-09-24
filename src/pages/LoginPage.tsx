import { LockKeyhole, PawPrint, UserRound } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../constants/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setUser, clearUser } from "../utils/userSlice";

export const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = async () => {
    setLoginError("");

    if (!userName.trim() || !password) {
      setLoginError("Please enter your username and password.");
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/login`,
        {
          email: userName,
          password: password,
        },
        { withCredentials: true },
      );
      console.log("Login successful:", response.data);
      dispatch(setUser(response.data));
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        setLoginError(error.response.data.error ?? "Invalid username or password.");
      } else {
        console.error("Login failed:", error);
        setLoginError("Unable to log in right now. Please try again.");
      }
      dispatch(clearUser());
    }
  }
  return (
    <main className="min-h-[calc(100vh-80px)] bg-orange-50 px-4 py-12 sm:py-20">
      <div className="mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-xl sm:p-8">
        <div className="mb-8 text-center">
          <div
            className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
            style={{
              backgroundColor: "var(--color-primary-light-bg)",
              color: "rgb(var(--color-primary))",
            }}
          >
            <PawPrint size={28} aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to continue helping pets find a home.
          </p>
        </div>

        <div className="space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-gray-700">
              Name or username
            </span>
            <span className="relative block">
              <UserRound
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
                aria-hidden="true"
              />
              <input
                type="text"
                name="username"
                autoComplete="username"
                placeholder="Enter your name or username"
                required
                className="w-full rounded-md border border-gray-300 py-3 pl-10 pr-3 text-gray-900 outline-none transition focus:border-transparent focus:ring-2 focus:ring-orange-300"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </span>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-gray-700">
              Password
            </span>
            <span className="relative block">
              <LockKeyhole
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
                aria-hidden="true"
              />
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                required
                className="w-full rounded-md border border-gray-300 py-3 pl-10 pr-3 text-gray-900 outline-none transition focus:border-transparent focus:ring-2 focus:ring-orange-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </span>
          </label>

          {loginError && (
            <p className="text-sm font-medium text-red-600" role="alert">
              {loginError}
            </p>
          )}

          <button
            type="button"
            className="w-full rounded-md py-3 font-semibold text-white transition hover:shadow-lg"
            style={{
              backgroundColor: "rgb(var(--color-primary))",
            }}
            onClick={handleLogin}
          >
            Log in
          </button>
        </div>
      </div>
    </main>
  );
};
