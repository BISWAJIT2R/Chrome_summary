
import { Button } from "../ui/button";
import MyLogo from "./MyLogo";


const Hero = () => {
  
  
  return (
   <div className=" top-bar flex-between ">
    <MyLogo/>
    <Button className="shad-button_github" onClick={(e) => {
      e.preventDefault()
      window.open("https://github.com/BISWAJIT2R/Chrome_summary", "_blank")
    }}>
      Github
    </Button>
   </div>
  );
};

export default Hero;