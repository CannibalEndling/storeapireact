import React from 'react'
import './Header.css'
import shoplogo from "./shoplogo.png";
import { AiOutlineStar } from 'react-icons/ai'
import {AiFillHome} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import Swal from 'sweetalert2'
import "./fonts/bpg_nino_mtavruli_bold.ttf"

const refresh = () => window.location.reload(true)

function HeaderTitle(){
    return(
        <div className='HeaderTitle'>
                <img src={shoplogo} className="shoplogo" alt='react' onClick={refresh}></img>
            <div>
                <CgProfile className="Icon" onClick={() => Swal.fire({
  title: 'Error!',
  text: 'გთხოვთ გაიარეთ ავტორიზაცია',
  icon: 'warning',
  confirmButtonText: 'Ok',
  timer: 10000
})}/>
                <AiFillHome className='Icon' onClick={() => Swal.fire({
  title: 'Error!',
  text: 'გთხოვთ გაიარეთ ავტორიზაცია',
  icon: 'warning',
  confirmButtonText: 'Ok',
  timer: 10000
})}/>
                <AiOutlineStar className='Icon' onClick={() => Swal.fire({
  title: 'Error!',
  text: 'გთხოვთ გაიარეთ ავტორიზაცია',
  icon: 'warning',
  confirmButtonText: 'Ok',
  timer: 10000
})}/>
            </div>
        </div>

    )
}
export default HeaderTitle;