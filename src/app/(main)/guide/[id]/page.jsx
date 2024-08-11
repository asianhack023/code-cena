"use client"
import { useState } from 'react';
import { Button } from '../../../../components/ui/button';
import { Facebook, Linkedin, Instagram, icons } from 'lucide-react';
import Image from 'next/image';
import { useParams, usePathname } from 'next/navigation'
import {useRouter} from 'next/navigation'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import {Label} from '../../../../components/ui/label'
const iconStyle='w-6 h-6 hover:text-orange-500 hover:scale-110 transition-all '
function page() {

      const [startBooking, setStartBooking]=useState(false)
      const pathname = usePathname();
      const pathSegments = pathname.split('/');
  const id = pathSegments[pathSegments.length - 1]; // Get the last segment



  async function handlePayButtonClick() {
      e.preventDefault()
      setIsLoading(true)

      if(session===null || session===undefined){
            return;
      }

      //check if the user has already purchased the product or not
      try {
            const email="Babish Chaudhary";
            const name="asd";
            console.log(email)
            const res=await axios.post('/api/checkdownload',{email, product:product.id})
            if(!res.data.success)
                  return toast.error(res.data.message, {duration:4000})
            const uuid=new Date().getTime().toString().slice(-6);
      const jsonData = {
            "amount": product.price.toString(),
            "failure_url": `https://babish9887-ecommerce-nextjs.vercel.app/fail`,
            "product_delivery_charge": "0",
            "product_service_charge": "0",
            "product_code": "EPAYTEST",
            "signature": "",
            "signed_field_names": "total_amount,transaction_uuid,product_code",
            // "success_url": `https://babish9887-ecommerce-nextjs.vercel.app/esewa/purchase-success?id=${product.id}&name=${name}&email=${email}&`,
            // "success_url": `http://localhost:3000/esewa/purchase-success?id=${product.id}&name=${name}&email=${email}&`,
            "success_url": `https://e-commerce-babish9887.vercel.app/esewa/purchase-success?id=${product.id}&name=${name}&email=${email}&`,


            "tax_amount": "0",
            "total_amount": product.price.toString(),
            "transaction_uuid":uuid
      };
      let url="https://rc-epay.esewa.com.np/api/epay/main/v2/form";
      
      const message = "total_amount=" + jsonData.total_amount + ",transaction_uuid=" + jsonData.transaction_uuid + ",product_code=" + jsonData.product_code;
      const signature = createSignature(message);
      jsonData.signature = signature;
      
      
      const form = document.createElement("form");
      for (const key in jsonData) {
            const field = document.createElement("input");
            field.setAttribute("type", "hidden");
            field.setAttribute("name", key);
            field.setAttribute("value", jsonData[key]);
            form.appendChild(field);
      }
      
      form.setAttribute("method", "post");
      form.setAttribute("action", url); 
      document.body.appendChild(form);
      form.submit();

      } catch (error) {
            console.log(error)
            toast.error("Something Unexpected Happen! Please Try Again later")                 
      } finally{
            setIsLoading(false)
      }
  }

  function createSignature(message) {
    const hash = CryptoJS.HmacSHA256(message,"8gBm/:&EnhH.1/q");
    const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
    return hashInBase64;
  }




  return (
      <>
      <div className='w-full  h-[calc(100vh-6rem)] flex justify-center items-center md:px-24 md:py-16 bg-slate-50 '>
            <div className=" relative w-full h-auto min-h-[calc(100vh-4rem)] bg-gray-200 rounded-2xl shadow-xl flex justify-center items-center overflow-hidden">
                  <div className="w-2/5 h-full bg-gray-200">
                        <Image src='https://i.pravatar.cc/34545' className='w-full h-full' width={400} height={400}/>
                  </div>
                  <div className="w-3/5 h-full bg-gray-300 flex justify-center items-center px-12 py-16">
                        <div className='w-full h-full gap-3' >
                              <h1 className='text-5xl font-bold mb-4'>Babish Chaudhary</h1>
                              <p className='text-xl font-light'>Currently In: Kathmandu</p>
                              <p className='text-xl font-light'>ContactNo: +9779098786576</p>
                              <p className='text-xl font-light'></p>

                              <p className='text-xl font-light'>Languages Known: Nepali, English, Hindi</p>
                              <p className='text-xl font-light '>Speciality:  Adventure, Nature, City</p>
                              <p className="mb-4 font-semibold text-base">Price: $123 per Day</p>
                              <p>Know More about guide</p>
                              <div className='flex gap-4 mb-4'>
                                    <FaFacebook className={iconStyle} />
                                    <FaInstagram className={iconStyle}/>
                                    <FaLinkedin className={iconStyle}/>

                                    
                              </div>

                              <Button onClick={()=>setStartBooking(!startBooking)}>Book Guide</Button>
                              <p><b>Note: </b> You need to Pay at least $100 in Advance to Book a Guide</p>
                        {startBooking && (
                              <div className='flex justify-between'>
                              <div className='w-aut py-2 flex justify-center items-center'>
                                    <Label>Start Date</Label>
                                    <input type='date' id='startDate'/>
                              </div>
                              <div className='w-aut py-2 flex justify-center items-center'>
                                    <Label>Start Date</Label>
                                    <input type='date' id='startDate'/>
                              </div>
                              <Button onClick={handlePayButtonClick}>Submit</Button>
                              </div> 

                              
                        )}
                        </div>

                  </div>

            </div>
            
      </div>
      </>
  )
}

export default page