export interface User{
  username:string ,
  email:string ,
  password:string 
}
export interface UserRequest extends Omit< User , "username">{}

export interface userState{
  user:User | null
}