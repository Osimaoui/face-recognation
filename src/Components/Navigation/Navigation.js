import React from 'react';

const Navigation = ({onRouteChange, isSignin}) => {
            if (isSignin){
                return(
                    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <p onClick={()=>onRouteChange('signout')}
                            className='f3 link dim black underline pa3 pointer'>
                            Sign out1
                        </p>
                    </nav>)
            } else {
                return(
                    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <p onClick={()=>onRouteChange('signin')}
                            className='f3 link dim black underline pa3 pointer'>
                            Signin1
                        </p>
                        <p onClick={()=>onRouteChange('register')}
                            className='f3 link dim black underline pa3 pointer'>
                            Register1
                        </p>
                    </nav>
                    )
            }
}

export default Navigation;