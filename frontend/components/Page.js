import React from 'react'
import Router from 'next/router';
import Header from '../components/Header';
import Nav from './Nav';
import Meta from '../components/Meta';
import Addtional from '../components/Addtional';
import colors from './styles/constants';




import styled , {ThemeProvider } from 'styled-components';

const Main = styled.div`
    color : ${props => props.theme.ORANGE };
`




class Page extends React.Component {
    render(){
        return (
            <ThemeProvider theme={colors}>
                <Main>
                    <Meta/>
                    <Header/>
                    <Nav/>
                    {this.props.children}

                    <Addtional/>
                </Main>
            </ThemeProvider>
        )
    }
    
}

export default Page;