import { useHelper } from "@/context/ContextHelper";
import { GoSidebarCollapse } from "react-icons/go";
import { GoSidebarExpand } from "react-icons/go";
import { MyPic } from "@/helper";

const MyLogo = () => {
  const { toggleSideBar, sideBar } = useHelper();
  return (
    <div className=" w-[13%] flex-between h2-bold cursor-pointer">
      <div className=" h-12 w-12 rounded-3xl bg-black object-contain">
        <img src={MyPic} alt="Not_found" className=" relative " />
      </div>
      <div onClick={() => toggleSideBar()}>{sideBar ? <GoSidebarExpand /> : <GoSidebarCollapse />}</div>
    </div>
  );
};

export default MyLogo;
