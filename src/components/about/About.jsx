
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/190-1904094_entrepreneur-working-on-his-macbook-business-hands-computer.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Bharathi</Typography>
                <Text variant="h5">If you are interested, you can view some of my projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/Bharathi708698?tab=repositories" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    send me an Email 
                        <Link href="mailto:pmbharathi2000@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;