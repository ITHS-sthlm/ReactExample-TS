import { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText } from '@mui/material';

interface User {
    id: number;
    name: string;
}

function Users() {
    const [users, setUsers] = useState<User[]>([]);
    // JSX const [users, setUsers] =useState([])

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((res) => setUsers(res.data)) //Spara resultat i state
            .catch((err) => console.error(err)); //Felhantering
    }, []);

    return (
        <>
            <h2>Användare</h2>
            <List>
                {users.map((user) => (
                    <ListItem key={user.id}>
                        <ListItemText primary={user.name} />
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default Users;
