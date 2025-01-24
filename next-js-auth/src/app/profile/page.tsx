"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function ProfilePage() {

  const router=useRouter();
  const [data,setData]=useState("nothing");

  const logout=async()=>{
     try{
         await axios.get("/api/users/logout");
         toast.success("Logout successful");
         router.push("/login");
     }catch(err:any){
      console.log(err);
      toast.error(err.response.data);
     }
  }

  const getUserDetails=async ()=>{
    const res= await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Profile</CardTitle>
          <CardDescription className="text-gray-500">
            This is your profile page. Manage your account here.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">Welcome to your profile page!</p>
          {/* Edit Profile button with blue color scheme */}
          <Button 
            onClick={getUserDetails}
            variant="default" 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          >
            Get User Details
          </Button>
          {/* Logout button with red color scheme */}
          <Button 
            variant="destructive" 
            className="w-full bg-red-500 hover:bg-red-600 text-white"
            onClick={logout}
          >
            Log Out
          </Button>
          <h2 className="p-3 rounded bg-green-500 text-align-center ">
            <span className="ml-[45%] ">
            {data==="nothing"? "Nothing ":<Link href={`/profile/${data}`}>{data}</Link>}
            </span>
          </h2>
        </CardContent>
      </Card>
    </div>
  );
}
