import { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

function FormPage() {
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); //Hindrar att sidan laddas om
        setSubmitted(true);
    };

    return (
        <>
            <h2>Formulär</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Ditt namn"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained">
                    Skicka
                </Button>
            </form>
            {submitted && <Typography variant="h6">Hej {name}!</Typography>}
        </>
    );
}

export default FormPage;
