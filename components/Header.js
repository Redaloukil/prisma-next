import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';



Router.onRouteChangeStart = () => {
    console.log("start changing router");
    NProgress.start();
}

Router.onRouteChangeComplete = () => {
    console.log("finish changing router");
    NProgress.done();
    
}

Router.onRouteChangeError = () => {
    console.log("error changing router");
}

class Header extends React.Component {
    
    render(){
        
        return(
            <div>
                <h2>Header</h2>
            </div>
        )
    }
}

export default Header;