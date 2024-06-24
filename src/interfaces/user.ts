export interface User{
  username:string ,
  email:string ,
  password:string,
  createDate:Date
}
export interface UserDtoLogin extends Omit< User , "username" | "createDate">{}
export interface UserDtoRegist extends Omit< User , "createDate">{}

export interface userState{
  user:User | null
}