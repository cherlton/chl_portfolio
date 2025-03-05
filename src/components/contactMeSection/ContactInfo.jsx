import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4'>
        <SingleInfo text="cherltonmhangwana@gmail.com" Image={HiOutlineMail}/>
        <SingleInfo text="+27 65 242 1927" Image={FiPhone}/>
        <SingleInfo text="Johannesburg, South Africa" Image={IoLocationOutline}/>
    </div>
  );
};

export default ContactInfo
