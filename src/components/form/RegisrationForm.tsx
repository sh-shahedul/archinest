"use client";

import React, { useState } from "react";
import {  MailIcon, UserIcon, LockIcon, EyeIcon, EyeOffIcon, Phone, Calculator } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form"
import Link from "next/link";
type FormValues = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  photoURL: FileList;
};

const RegistrationForm: React.FC = () => {
      const [showPassword, setShowPassword] = useState(false);
   
      const {   register, formState: { errors }, } = useForm<FormValues>();

  
    const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };




  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 space-y-6">
     
      <form className="space-y-4" >
         {/* Name */}
           <div>
            <Label className="mb-2">Full name</Label>
            <InputGroup>
              <InputGroupInput
                {...register("fullName", { required: true })}
                type="text"
                placeholder="Enter full name"
              />
              <InputGroupAddon>
                <UserIcon />
              </InputGroupAddon>
            </InputGroup>
            {errors.fullName && (
              <p className="text-red-500  text-sm mt-1">
                Full Name is required
              </p>
            )}
          </div>


         {/* Image  */}
       <div className="grid w-full max-w-sm items-center gap-2">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
        </div>

        {/* Email */}
    <div className=" grid gap-2">
        <Label htmlFor="picture">Email</Label>
        <InputGroup>
          <InputGroupInput
            {...register('email',{required:true})}
            type="email"
            placeholder="Email Address"
          />
          <InputGroupAddon>
            <MailIcon />
          </InputGroupAddon>
        </InputGroup>
        {
            errors.email && (
                <p className="text-red-500  text-sm mt-1" >Email is Required</p>
            )
        }
    </div>

        {/* Password */}
         <div className=" grid gap-2">
        <Label htmlFor="Password">Password</Label>
        <InputGroup>
          <InputGroupInput
        
               {...register("password", {
                      required: "Password is required",
                      minLength: { value: 6, message: "Password must be at least 6 characters" },
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
          <InputGroupAddon align="inline-end" className="cursor-pointer" onClick={togglePassword}>
          
             {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </InputGroupAddon>
        </InputGroup>
        {errors.password && (
                  <p className="text-red-500  text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
         </div>
        {/* Phone Number */}
        <div className="grid gap-2">
          
             <Label htmlFor="phone">Phone Number</Label>
            <InputGroup>
          <InputGroupInput
            {...register("phone", {required:true})}
            placeholder="Phone Number"
          />
          <InputGroupAddon>
             <Calculator />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Phone />
          </InputGroupAddon>
        </InputGroup>
        {
            errors.phone && (
                <p className="text-red-500  text-sm mt-1">Phone Number is required</p>
            )
        }
        </div>


           {/* checkbpx  */}
     <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      {/* register button  */}
        <Button type="submit" className="w-full bg-orange-400 hover:bg-orange-500 text-white">
          Register
        </Button>
      </form>
        <div>
        <Button variant="outline" className="w-full">
          <FcGoogle className="w-5 h-5" />
          Sign up with Google
        </Button>
      </div>

      <p className="text-xs text-center text-muted-foreground mt-2">
        Already have an account?
        <Link href="/login" className=" font-bold text-black underline hover:text-orange-400">
          Log In
        </Link>
      </p>
    </div>
  );
};

export default RegistrationForm;


