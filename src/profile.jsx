import React from 'react'

function profile() {
  const first_name = "Santipong";
  const user_name = "Folk";
  const email = "darkness1755@gmail.com";
  const phone_num = "0876541255";
  return (
    <>
    <h1>Profile</h1>
     <div className="container"> 
      <div className="inputs">
      <div className="text">User Name</div>
        <div className="input">
          <input type="text" readOnly value={user_name}/>
        </div>
        <div className="text">Name</div>
        <div className="input">
          <input type="text" readOnly value={first_name}/>
        </div>
        <div className="text">Email</div>
        <div className="input">
          <input type="email" readOnly value={email}/>
        </div>
        <div className="text">Phone Number</div>
        <div className="input">
          <input type="number" readOnly value={phone_num}/>
        </div>
      </div>
      </div>
    </>
  )
}

export default profile