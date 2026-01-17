import { mongoConnect } from "@/lib/mongoConnect"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
   
     CredentialsProvider({
    //  'Sign in with {name} button'
    name: 'Credentials',
  //  form inputs
    credentials: {
      email: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" },
      // secretCode: { label: "Secret Code", type: "Number" , placeholder: "enter code" },
      
    },
    async authorize(credentials) {
       if (!credentials) return null;
     //my own login logic
    //  find user
    const {email,password} = credentials;
    // const user = userList.find(u=> u.name == email)
    const {db} = await mongoConnect();
    const user = await db.collection("users").findOne({ email });
    if(!user) return null;

    const isPassword = await bcrypt.compare(password,user.password)
    if(isPassword){
      return {
       id: user._id.toString(),
       name: user.fullName,
       email: user.email,
       image:user.photoURL,
       phone:user?.phone
     };
    }

      
      return null
    }
  })
  ],
 pages: {
  signIn: "/login",
}
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

