import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

export const Facebook = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [userID, setUserID] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [picture, setPicture] = useState<string>('')
  // state = {
  //   isLoggedIn: false,
  //   userID: "",
  //   name: "",
  //   email: "",
  //   picture: ""
  // };

  const responseFacebook = (response: any) => {
    if (response.status !== "unknown") {
      const { userID, name, email, picture } = response
      setIsLoggedIn(true)
      setUserID(userID)
      setName(name)
      setEmail(email)
      setPicture(picture.data.url)
      // this.setState({
      //   isLoggedIn: true,
      //   userID: response.userID,
      //   name: response.name,
      //   email: response.email,
      //   picture: response.picture.data.url
      // });
    }
  };

  const componentClicked = () => {
    console.log("clicked");
  };

  if (isLoggedIn) {
    return (
      <div
        style={{
          width: "400px",
          margin: "auto",
          background: "#f4f4f4",
          padding: "20px"
        }}
      >
        <img src={picture} alt={name} />
        <h2>Welcome {name}</h2>
        Email: {email}
      </div>
    )
  }

  return (
    <FacebookLogin
      appId="4775861809149271"
      // autoLoad={true}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
      icon="fa-facebook"
    />
  )
}
