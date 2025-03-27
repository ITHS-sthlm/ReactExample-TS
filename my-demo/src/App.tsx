import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import FormPage from './pages/FormPage';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

function App() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        ReactTS Demo
                    </Typography>
                    <Button color="inherit" component={Link} to="/">
                        Hem
                    </Button>
                    <Button color="inherit" component={Link} to="/users">
                        Användare
                    </Button>
                    <Button color="inherit" component={Link} to="/form">
                        Formulär
                    </Button>
                </Toolbar>
            </AppBar>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/form" element={<FormPage />} />
            </Routes>
        </>
    );
}

export default App;
