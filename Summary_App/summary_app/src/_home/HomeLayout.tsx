import Sidebar from "@/components/coustomUi/SideBar";
import { useHelper } from "@/context/ContextHelper";
import { Hero, Home } from "@/helper";

const HomeLayout = () => {
  const {sideBar} = useHelper();

  return (
    <div className="grid-container ">
      <Hero/>
      <Home/>
      {sideBar && <Sidebar/>}
    </div>
  );
};

export default HomeLayout;
