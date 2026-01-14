import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
type TUser = {
      id: string,
      name: string,
      password: string,
      

}


const userList: TUser[]  = [
  {name: "hablu",password:'1234',id:"1"},
  {name: "bablu",password:'5678',id:"2"},
  {name: "dablu",password:'8910',id:"3"},
]
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
   
     CredentialsProvider({
    //  'Sign in with {name} button'
    name: 'Credentials',
  //  form inputs
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" },
      // secretCode: { label: "Secret Code", type: "Number" , placeholder: "enter code" },
      
    },
    async authorize(credentials) {
       if (!credentials) return null;
     //my own login logic
    //  find user
    const {username,password} = credentials;
    const user = userList.find(u=> u.name == username)
    if(!user) return null;

    const isPassword = user.password == password;
    if(isPassword){
      return user;
    }

      
      return null
    }
  })
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

