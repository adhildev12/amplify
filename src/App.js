import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const currentUser = await Auth.currentAuthenticatedUser();
                setUser(currentUser);
                console.log('User signed in:', currentUser);
            } catch (error) {
                console.log('User is not signed in');
                setUser(null);
            }
        };

        checkUser();
    }, []);

    const handleSignOut = async () => {
        try {
            await Auth.signOut();
            setUser(null);
            window.location.reload(); // Optional: Reload to trigger reauthentication
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                {user && <p>Welcome, {user.username}</p>}
                <button onClick={handleSignOut} className="App-button">
                    Sign Out
                </button>
            </header>
        </div>
    );
}

export default withAuthenticator(App, {
    includeGreetings: true,
});