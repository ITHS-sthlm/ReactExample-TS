import {Card, Typography, CardContent} from '@mui/material'
import styled from 'styled-components'

 /* Använder Interface för att typbestämma värdena */
 interface InfoCardProps{
    title: string,
    content: string
}

/* Här lägger vi in Styled components för vårt card */
const StyledCard = styled(Card)`
margin: 1rem 0;
background-color: #f5f5f5;
`

const InfoCard = ({title, content}:InfoCardProps) => {
    return (
        <StyledCard>
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body1">{content}</Typography>

            </CardContent>
        </StyledCard>
    )

}

export default InfoCard
