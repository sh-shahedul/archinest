"use client";
import React, { useState } from "react";
import { MailIcon, UserIcon, LockIcon, EyeIcon, EyeOffIcon, Phone } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form"
import Link from "next/link";
import registerUser from "../../../scripts/registerUser";
import { TUser } from "@/types/user";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

type FormValues = {
  fullName: string;
  email: string;
  password: string;
  role: string;
  phone: string;
  photoURL: FileList;
  agreeTerms: boolean;
};

const RegistrationForm: React.FC = () => {
  
  const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
  const { 
    register,
    handleSubmit, 
    formState: { errors }, 
    reset,
     
  } = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      phone: "",
      photoURL: undefined,
      agreeTerms: false,
    },
  });

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

 

// const onSubmit = async (data: FormValues) => {
//   setLoading(true);

//   try {
//     const formData = new FormData();
//     formData.append("image", data.photoURL[0]);

//     const imgRes = await axios.post(
//       `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
//       formData
//     );

//     const userData: TUser = {
//       fullName: data.fullName,
//       email: data.email,
//       password: data.password,
//       phone: data.phone,
//       role: "client",
//       photoURL: imgRes.data.data.url,
//       agreeTerms: data.agreeTerms,
//     };

//     await registerUser(userData);

//     alert("Registration Successful!");
//     reset();     
//     router.push('/')      
//   } catch (error) {
//     console.error(error);
//   } finally {
//     setLoading(false); 
//   }
// };
const onSubmit = async (data: FormValues) => {
  setLoading(true);

  try {
    const formData = new FormData();
    formData.append("image", data.photoURL[0]);

    const imgRes = await axios.post(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      formData
    );

    const userData: TUser = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      phone: data.phone,
      role: "client",
      image: imgRes.data.data.url ,
      photoURL: imgRes.data.data.url,
      agreeTerms: data.agreeTerms,
    };

    // Register user
    await registerUser(userData);

    // Automatic login
    const loginResult = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (!loginResult?.error) {
      alert("Registration and login successful!");
      reset();
      router.push("/"); 
    } else {
      alert("Registration successful, but login failed: " + loginResult.error);
    }

  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="w-full max-w-md bg-white rounded-xl p-8 space-y-6">
{/*       
      {submitted && (
        <div className="bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-lg text-sm">
          ✓ Registration successful!
        </div>
      )} */}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <Label className="mb-2">Full name</Label>
          <InputGroup>
            <InputGroupInput
              {...register("fullName", { required: "Full Name is required" })}
              type="text"
              placeholder="Enter full name"
            />
            <InputGroupAddon>
              <UserIcon />
            </InputGroupAddon>
          </InputGroup>
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Image */}
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="picture">Picture</Label>
          <Input 
            id="picture" 
            type="file"
            {...register("photoURL")}
          />
        </div>

        {/* Email */}
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <InputGroup>
            <InputGroupInput
              id="email"
              {...register('email', {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format"
                }
              })}
              type="email"
              placeholder="Email Address"
            />
            <InputGroupAddon>
              <MailIcon />
            </InputGroupAddon>
          </InputGroup>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <InputGroup>
            <InputGroupInput
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: { 
                  value: 6, 
                  message: "Password must be at least 6 characters" 
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9])/,
                  message: "Password must contain uppercase, lowercase, and special character"
                },
              })}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <InputGroupAddon>
              <LockIcon />
            </InputGroupAddon>
            <InputGroupAddon 
              align="inline-end" 
              className="cursor-pointer" 
              onClick={togglePassword}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </InputGroupAddon>
          </InputGroup>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <InputGroup>
            <InputGroupInput
              id="phone"
              {...register("phone", {
                required: "Phone Number is required",
                pattern: {
                  value: /^[0-9]{10,}$/,
                  message: "Phone number must be at least 10 digits"
                }
              })}
              placeholder="Phone Number"
            />
            <InputGroupAddon>
              <Phone />
            </InputGroupAddon>
          </InputGroup>
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            
            type="checkbox"
            {...register("agreeTerms", {
              required: "You must accept terms and conditions"
            })}
            className="w-4 h-4 rounded"
          />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
        {errors.agreeTerms && (
          <p className="text-red-500 text-sm">
            {errors.agreeTerms.message}
          </p>
        )}

        {/* Register Button */}
        <Button
           type="submit"
            disabled={loading}
            className="w-full bg-orange-400 hover:bg-orange-500 text-white">
             {loading ? "Registering..." : "Register"}
       </Button>
      </form>

      {/* Google Sign Up */}
      <div>
        <Button variant="outline" className="w-full">
          <FcGoogle className="w-5 h-5" />
          Sign up with Google
        </Button>
      </div>

      {/* Login Link */}
      <p className="text-xs text-center text-muted-foreground mt-2">
        Already have an account?
        <Link href="/login" className="font-bold text-black underline hover:text-orange-400">
          Log In
        </Link>
      </p>
    </div>
  );
};

export default RegistrationForm;