import Head from 'next/head';

const Meta = (props) => {
    return (
        <Head>
        <title>{props.title ? props.title : 'My little store' }</title>
    </Head>
    )
    
}


export default Meta;