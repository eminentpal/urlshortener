import React from 'react'
import './styles.css'
const Header = () => {
    return (
        <>
            <nav className="navBar" >

            <div className="navContainer" >
                <div className="firstBar" >
                    <div>
                    <img src="/images/logo.svg"   />
                    </div>

                
                    <div  className="win" >
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                    </div>
                  
                </div>

                <div className="secondBar" >
                    
                        <li>Login</li>
                       
                        <button>Sign Up</button>
                 
                </div>

              </div>  
            </nav>
        </>
    )
}

export default Header
