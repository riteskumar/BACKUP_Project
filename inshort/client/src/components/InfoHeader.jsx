import { Box ,Typography,styled} from "@mui/material";

const Container = styled(Box)`
        background:#f44336;
        color:#fff;
        display:flex;
        align-items:center;
        height:48px;
        margin-bottom:30px;
        
`
const Image = styled('img')({
    height:34,
    '&:last-child':{
        margin:'0 50px 0 20px'
    }
})
const Text = styled(Typography)`
    font-size:14px;
    font-weight:300;
`
const InfoHeader = ()=>{
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';
    return(
        <Container>
            <Text>
                For the best experience use inshort app on your smartphone.
            </Text>
            <Box style ={{display:'flex',marginLeft:'auto'}}>
                <Image src={appleStore} alt="applestore" />
                <Image src={googleStore} alt="googlestore" />
            </Box>
        </Container>
    );
}

export default InfoHeader;