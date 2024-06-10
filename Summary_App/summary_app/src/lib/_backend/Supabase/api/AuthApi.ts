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

    if (newUser) {
        AddUser(data)
    }
}

export async function userLogin(data: IamUser) {
    const { email, password } = data;

    const { data: userLogged, error } = await supabase.auth.signInWithPassword({
        email, password
    })

    if (error) throw new Error("There was an Error!")

    return userLogged;
}


export async function GetUser() {
    const value = localStorage.getItem("sb-zimtgqasxoahlmlhbfki-auth-token");
    let tokenObject;
    if (value != null) {
        tokenObject = JSON.parse(value);
    }

    const { access_token, user } = tokenObject;
    return { access_token, user }
}

export async function AddUser(isUser: createdUser) {
    const { name, email, username } = isUser
    const { data, error } = await supabase
        .from('countries')
        .insert({ name, email, user_name: username })

    console.log(data)
}