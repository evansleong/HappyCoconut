import React from 'react'
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <div className=' flex flex-row mx-auto w-5/6 items-center justify-center gap-x-2'>
            <a
                className="flex justify-center hover:text-brightColor transition-all cursor-pointer"
                href="https://www.instagram.com/gao_chong_/"
            >
                <BsInstagram size={25} />
            </a>
            <p>@gao_chong_</p>
        </div>

    )
}

export default Footer
