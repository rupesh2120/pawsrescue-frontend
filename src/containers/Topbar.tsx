import { NavigationBar } from "../components/NavigationBar";
import { PawLogo } from "../components/PawLogo";

const Topbar = () => {
  return (
    <div className="bg-gray-200 p-4">
      <div className="mx-16 flex flex-row justify-between">
        <PawLogo />
        <NavigationBar />
      </div>
    </div>
  )
}

export default Topbar;