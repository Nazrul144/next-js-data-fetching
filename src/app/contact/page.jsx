import React from 'react';

import { Bungee_Tint} from "next/font/google";

const love = Bungee_Tint({
    variable: "--font-roboto", // Define a CSS variable for Roboto
    weight: ["400"], // Specify the weights you need
    subsets: ["latin"], // Specify the subsets you need
  });

export const metadata = {
    title: {
        absolute: 'Contact'
    },
    description: "This is contact page"
}

const ContactPage = () => {
    return (
        <div>
            <h1 className={`${love.className}`}>This is contact page</h1>
        </div>
    );
}

export default ContactPage;
