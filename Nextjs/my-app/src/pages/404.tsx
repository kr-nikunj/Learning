import React, { useEffect } from 'react'
import Link from "next/link"
import {useRouter} from "next/router"

const Error = () => {
  const router = useRouter();

  useEffect(() =>{
    setTimeout(()=> { router.push("/");
  }, 3000);
  },[]);

  return (
    <>
        <div id="notfound">
            <div className="notfount">
                <div className="notfounf-404">
                    <h1>404</h1>
                    <h2 className='Nikunj'>Page Not Found</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iste, expedita sunt a est ducimus deserunt itaque dolores voluptatibus totam atque officia. Debitis, provident impedit! Eligendi accusantium quia sunt vero?</p>
                </div>
                <a onClick={() => router.push("/")}>
                  back To Homepage
                </a>
            </div>
        </div>
    </>
  )
}

export default Error