import { Logo, FormText, CustomFrom, PageLinkText } from "@/helper"
import "../../lib/_backend/Supabase/Supabse"
import "../../lib/_backend/Supabase/api/AuthApi"
import { signUpVideo } from "@/helper";

const SignIn = () => {
  return (
    <div className="px-10 sm:w-420 flex-center flex-col ">
      <Logo video={signUpVideo}/>
      <FormText/>
      <CustomFrom/>
      <PageLinkText/>
    </div>
  )
}

export default SignIn;


