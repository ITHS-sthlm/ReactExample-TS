import InfoCard from '../components/InfoCard';
import { Container, Typography } from '@mui/material';

function Home() {
    return (
        <>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Välkommen till startsidan!
                </Typography>
                <InfoCard
                    title="Detta är jättekul"
                    content="Blablabla massa text"
                />
                <InfoCard
                    title="Nu håller vi på med typescript"
                    content="Blablabla massa text"
                />
            </Container>
        </>
    );
}

export default Home;
