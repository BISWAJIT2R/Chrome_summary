import AuthLayout from "@/_auth/AuthLayout";
import Login from "@/_auth/AuthPages/Login";
import SignIn from "@/_auth/AuthPages/SignIn";
// Home page 
import Home from "@/_home/page/Home";
import HomeLayout from "@/_home/HomeLayout";
// coustom ui owner
import Logo from "@/components/coustomUi/Logo";
import FormText from "@/components/coustomUi/FormText";
import LoginText from './../components/coustomUi/LoginText';
import CustomFrom from "@/components/coustomUi/CustomFrom";
import CustomLogin from './../components/coustomUi/CustomLogin';
import PageLinkText from './../components/coustomUi/PageLinkText';
import Hero from "@/components/coustomUi/Hero"
import MyLogo from './../components/coustomUi/MyLogo';

// import images or video from assets
import signUpVideo from "../assets/video/sign-up.mp4"
import LogInVideo from "../assets/video/login.mp4"
import PageLoginText from './../components/coustomUi/PageLoginText';
import MyPic from "@/assets/MyLogo.png"



// Export _AuthPages
export {AuthLayout, Login, SignIn};

// Export _Homepages
export {HomeLayout, Home, Hero}
// export images or videos

export {signUpVideo, LogInVideo, MyPic};

// export coustom ui 
export {Logo, FormText, CustomFrom, PageLinkText, LoginText, CustomLogin, PageLoginText, MyLogo}