import React from "react"
import "./Header.css"

const Header = () => {
  return (
    <div className="header__container">
      <img
        className="logo_mastermind"
        loading="lazy"
        alt="Mastermind"
        src="http://wpuploads.appadvice.com/wp-content/uploads/2015/06/mastermind_pro_premium_icon.png"
      />
      <h2 className="info_header">Mastermind</h2>
    </div>
  )
}

export default Header
