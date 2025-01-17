"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import toast from "react-hot-toast";
import axios from "axios";

export default function SignUp() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  useEffect(()=>{
    if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
      setButtonDisabled(false)
    }
    else{
      setButtonDisabled(true)
    }
  },[user])

  // useEffect(() => {
  //   if (loading) {
  //     router.push("/login");
  //   }
  //   setLoading(false);
  // },[loading] );

  const onSignUp = async () => {
    try{
       setLoading(true);
       const response=await axios.post("/api/users/signup", user);
       console.log("SignUp Success", response.data);
       router.push("/login");
    }catch (error:any) {
      toast.error;
    }finally{

    }

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-4 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">
            <h1>{loading ? "Loading..." : "Sign Up"}</h1>

          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={user.username}
                onChange={(e) =>
                  setUser({ ...user, username: e.target.value })
                }
                placeholder="Enter your username"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Enter your password"
              />
            </div>
            <Button
              onClick={onSignUp}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              {buttonDisabled ? "Please fill all the fields" : "Sign Up"}
            </Button>
            <Link
              href="/login"
              className="text-sm text-blue-500 hover:underline text-center"
            >
              Visit Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
