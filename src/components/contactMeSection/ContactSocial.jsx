import React from 'react'
import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="www.linkedin.com/in/nhlangano-mhangwana-4418612a4" Icon={FaLinkedinIn}/>
      <SingleContactSocial link="https://github.com/cherlton" Icon={FiGithub}/>
      <SingleContactSocial link="https://www.instagram.com/cherl.1111/" Icon={FaInstagram}/>
      
    </div>
  );
};

export default ContactSocial
