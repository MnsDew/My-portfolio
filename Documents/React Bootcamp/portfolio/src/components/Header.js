import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
const style = { display: "inline-block" , margin: 10 ,
    fontSize:35, marginBottom: 30 };

  return (
    <div>
      <div>
        <h3 style={style}>
            <Link to="/" > <p>Home</p></Link> 
            
            </h3>

        <h3 style={style}>
            
          <Link to= "/amthal"><p>Quotes</p></Link>

        </h3>
 
      </div>
    </div>
  );
};

export default Header;
