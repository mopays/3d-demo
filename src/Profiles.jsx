import React from 'react'

import './Profile.css'
function Profiles() {
    const first_name = "Santipong";
    const user_name = "Folk";
    const email = "darkness1755@gmail.com";
    const phone_num = "0876541255";
    const address1 = "(610) 828-0895 601 "
    const city = "Hill Farm Ln Springfield"
  return (

    <>
        <div id="gradient"></div>
            <div id="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyesofcorsa.com%2Fwp-content%2Fuploads%2F2017%2F10%2FPortraits-Of-People-Wallpaper-For-PC.jpg&f=1&nofb=1&ipt=bb747f8f1a00e4e6fa9757c4189d04d90d8a3e66a93c435aa15ee2e7d9d6b583&ipo=images"/>
            <h2>Profile</h2>
            <p>username : {user_name}</p>
            <p>first name: {first_name}</p>
            <p >email: {email}</p>
            <p>city: {city}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
    
            <span class="left bottom">{phone_num}</span>
            <span class="right bottom">{address1} </span>
            </div>
    </>
  )
}

export default Profiles