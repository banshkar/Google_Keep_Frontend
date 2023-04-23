import { myaxios } from "./Help";
export const Register=(user)=>{
    return myaxios.post("/user/register",user);
}
export const LoginDto =(user)=>{
    return myaxios.post("/user/login",user)
}
export const LogOutDto=(token)=>{
    return myaxios.get(`/user/logOut/${token}`)
} 
export const addNote=(note)=>{
    let token =localStorage.getItem("token")
    return myaxios.post(`/user/addPost/${token}`,note);

}
export const getAllNote=()=>{
    let token =localStorage.getItem("token")
    return myaxios.get(`/user/getallPost/${token}`);
}
export const deleteNote=(id)=>{
    let token =localStorage.getItem("token")
    return myaxios.delete(`/user/deleted/${token}/${id}`);

}
export const getArchive=(id)=>{
    let token =localStorage.getItem("token")
    return myaxios.get(`/user/archive/${token}/${id}`);
}
export const getTrash=(id)=>{
    let token =localStorage.getItem("token")
    return myaxios.get(`/user/tarsh/${token}/${id}`);
}