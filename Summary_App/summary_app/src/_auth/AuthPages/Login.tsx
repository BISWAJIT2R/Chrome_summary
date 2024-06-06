import { CustomLogin, LoginText, Logo, PageLoginText } from "@/helper";
import { LogInVideo } from "@/helper";
const Login = () => {
  return (
    <div className="px-10 sm:w-420 flex-center flex-col ">
      <Logo video={LogInVideo}/>
      <LoginText/>
      <CustomLogin/>
      <PageLoginText/>
    </div>
  )
}

export default Login;
