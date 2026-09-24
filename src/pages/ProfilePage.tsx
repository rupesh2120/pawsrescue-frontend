import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../constants/api";
import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";

const formatLabel = (key: string) =>
  key.replace(/([A-Z])/g, " $1").replace(/^./, (letter) => letter.toUpperCase());

export const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const [profile, setProfile] = useState<Record<string, unknown> | null>(user);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${API_URL}/profile`, { withCredentials: true });
        const profileData = response.data.user ?? response.data;
        if (profileData && typeof profileData === "object") {
          setProfile(profileData as Record<string, unknown>);
        }
      } catch (requestError) {
        console.error("Profile request failed:", requestError);
        setError("We could not refresh your profile details.");
      }
    };

    void fetchProfile();
  }, []);

  const profileEntries = Object.entries(profile ?? {}).filter(
    ([key]) => !key.toLowerCase().includes("password"),
  );

  return (
    <main className="min-h-[calc(100vh-80px)] bg-orange-50 px-4 py-12">
      <section className="mx-auto w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl sm:p-8">
        <h1 className="text-3xl font-bold text-gray-900">Your profile</h1>
        <p className="mt-2 text-sm text-gray-600">Your account details from Paws Rescue.</p>

        {error && <p className="mt-6 text-sm text-red-600">{error}</p>}

        <div className="mt-8 divide-y divide-gray-100 rounded-md border border-gray-200">
          {profileEntries.length > 0 ? profileEntries.map(([key, value]) => (
            <div key={key} className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:justify-between">
              <span className="text-sm font-semibold text-gray-600">{formatLabel(key)}</span>
              <span className="text-sm text-gray-900">{typeof value === "object" ? JSON.stringify(value) : String(value)}</span>
            </div>
          )) : (
            <p className="px-4 py-6 text-sm text-gray-600">No profile details were returned.</p>
          )}
        </div>
      </section>
    </main>
  );
};