import App , { Container} from 'next/app';
import Page from '../components/Page';
import style from 'styled-components';



const BodyStyle = style.body `
    * { padding : 0 ; margin :0 ; box-sizing : border-box }  
`

class CustomApp extends App {

    // static getInitialProps(){
        
    // }
    
    render(){
        const { Component } = this.props
        return(
            <Container>
                <Page>
                    <Component/>
                </Page>
                
            </Container>
        )
    }
}

export default CustomApp;