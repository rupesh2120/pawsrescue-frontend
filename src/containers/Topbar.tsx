import { NavigationBar } from "../components/NavigationBar";
import { PawLogo } from "../components/PawLogo";
import { ProfileMenu } from "../components/ProfileMenu";

export const Topbar = () => {
  return (
    <div className="bg-gray-200 p-4">
      <div className="mx-4 flex flex-row items-center justify-between gap-4 sm:mx-16">
        <PawLogo />
        <div className="flex items-center gap-4">
          <NavigationBar />
          <ProfileMenu />
        </div>
      </div>
    </div>
  )
}

export default Topbar;