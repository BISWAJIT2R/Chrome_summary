import { QueryClient, useMutation } from "@tanstack/react-query";
import { GetUser, createNewUser, userLogin } from "../_backend/Supabase/api/AuthApi";
import { IamUser, createdUser } from "@/types/Type";
// import FetchApi from "../Engine/RapidApi";

export const queryclient = new QueryClient(
    {
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000
            }
        }
    }
)

export const CreateNewUser = () => {
   return useMutation({
        mutationFn: (data:createdUser) => createNewUser(data)
    })
}

export const LoggedUser = () => {
    return useMutation({
        mutationFn: (data: IamUser) => userLogin(data)
    })
}

export const GetUserFrontend = () => {
    return useMutation({
        mutationFn: () => GetUser()
    })
}
