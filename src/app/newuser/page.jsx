"use client";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { FaShoppingBag } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { Backpack, Binoculars, Map } from "lucide-react";

function NewUserPage() {
  const router = useRouter();
  const [isBuyer, setIsBuyer] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const handleClick = () => {
    if (isBuyer) {
      router.push("/newuser/touristSignup");
    } else {
      router.push("/newuser/guideSignup");
    }
  };

  // useEffect(()=>{
  //     async function GetUser(){
  //        if(session){
  //             //@ts-ignore
  //           if(session?.user?.role!==null){
  //                   //@ts-ignore
  //                 toast.error(` User With this email already exists as a ${session?.user?.role} `)
  //                 setTimeout(()=>{
  //                       router.replace('/')
  //                 },2000)
  //           }
  //           else{
  //                 setIsLoading(false)
  //           }
  //        }
  //     }

  //     GetUser()
  // },[session])
  return (
    <div className="w-11/12 lg:w-1/3 md:w-2/3 h-screen flex justify-center mt-16 mx-auto">
      <div className="flex flex-col">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Explore the World with a Local Guide
        </h2>
        <p className="mt-5 font-medium text-gray-800">
          Discover unique destinations with experienced guides or offer your
          expertise as a local guide.
        </p>

        <div className="mt-10 flex flex-col w-full justify-between gap-10 ">
          <div
            className={`flex w-full items-center gap-3 px-5 py-5 rounded-md bg-white cursor-pointer ${
              isBuyer ? "ring-2 ring-orange/40" : null
            }  ${isLoading ? " text-gray-400 ring-gray-300" : null}`}
            onClick={() => setIsBuyer(true)}
          >
            <Backpack className="w-12 h-10 text-white bg-orange p-2 rounded-lg" />
            <div className="flex flex-col w-full">
              <h2 className="text-lg font-semibold uppercase text-black">
                Tourist
              </h2>
              <p className="text-base text-gray-400 font-medium">
                I want to be Tourist
              </p>
            </div>
            <IoIosArrowForward className="w-6 h-6 justify-self-end" />
          </div>

          <div
            onClick={() => setIsBuyer(false)}
            className={`flex w-full items-center gap-3 px-5 py-5 rounded-md bg-white cursor-pointer ${
              !isBuyer ? "ring-2 ring-orange/40" : null
            }  ${isLoading ? " text-gray-400 ring-gray-300" : null}`}
          >
            <Map className="w-12 h-10 text-white bg-orange p-2 rounded-lg" />
            <div className="flex flex-col w-full">
              <h2 className="text-lg font-semibold text-black uppercase">
                Guide
              </h2>
              <p className="text-base text-gray-400 font-medium">
                I want to Guide the Tourist
              </p>
            </div>
            <IoIosArrowForward className="w-6 h-6 justify-self-end" />
          </div>

          <Button
            className="text-md text-white hover:bg-orange/90"
            onClick={() => handleClick()}
          >
            Continue <IoIosArrowForward className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NewUserPage;
