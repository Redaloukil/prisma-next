import React from 'react'
import Header from '../components/Header';
import Nav from './Nav';
import Meta from '../components/Meta';
class Page extends React.Component {
    render(){
        return (
            <div>
                <Meta/>
                <Header/>
                <Nav/>
                {this.props.children}
                {console.log(this.props)}
            
            </div>
        )
    }
    
}

export default Page;