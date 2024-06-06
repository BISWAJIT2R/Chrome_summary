import { IamUser, createdUser } from "@/types/Type";
import { supabase } from "../Supabse";

export async function createNewUser(data: createdUser) {
    const { email, password, name, username } = data;

    const { data: newUser, error } = await supabase.auth.signUp({
        email, password, options: {
            data: {
                name, username
            }
        }
    })
    if (error) throw new Error;

    return newUser;
}

export async function userLogin(data: IamUser) {
    const { email, password } = data;

    const { data: userLogged, error } = await supabase.auth.signInWithPassword({
       email, password
    })
    
    if (error) throw new Error("There was an Error!")
        
    return userLogged;
}