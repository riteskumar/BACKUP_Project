import { Card, CardContent , Grid , Typography,styled } from "@mui/material";

const Image = styled('img')({
    height:268,
    width:'88%',
    objectFit:'cover',
    borderRadius:5
});

const Component = styled(Card)`
    margin-bottom:20px;
    box-shadow:0 2px 5px 0 rgba(0 0 0/ 16%),0 2px 10px 0  rgba(0 0 0 / 12%);
`

const Article = ({data})=>{
    return(
        <Component>
            <CardContent>
                <Grid container>
                    <Grid lg={5} sm={5} xs={12} item>
                        <Image src = {data.url} alt="true  " />
                    </Grid>
                    <Grid lg={7}  md={7} sm={7} xs={12} item>
                       <Typography>{data.title}</Typography>
                       <Typography>{data.description}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Component>

    )
}
export default Article;