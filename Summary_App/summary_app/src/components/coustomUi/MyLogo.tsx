import { useHelper } from "@/context/ContextHelper";
import { MyPic } from "@/helper"

const MyLogo = () => {
  const {toggleSideBar} = useHelper();
  return (
    <div className=" h-12 w-12 rounded-3xl bg-black object-contain" onClick={() => toggleSideBar()}>
        <img src={MyPic} alt="Not_found" className=" relative "/>
    </div>
  )
}

export default MyLogo