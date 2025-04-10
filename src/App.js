import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, onAuthUIStateChange } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

function App() {
    useEffect(() => {
        const listener = onAuthUIStateChange((authState, authData) => {
            if (authState === 'signedin') {
                console.log('User signed in:', authData);
                // Optional: Redirect to a specific page after login
                window.location.href = '/dashboard'; // Change '/dashboard' to your desired route
            }

            if (authState === 'signedout') {
                console.log('User signed out');
                // Optional: Redirect to login or home page
                window.location.href = '/login'; // Change '/login' to your desired route
            }
        });

        return () => listener.unsubscribe(); // Clean up the listener on unmount
    }, []);

    const handleSignOut = async () => {
        try {
            await Auth.signOut();
            window.location.reload(); // Refresh the app to trigger the authentication flow
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
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <button onClick={handleSignOut} className="App-button">
                    Sign Out
                </button>
            </header>
        </div>
    );
}

// Wrap the App with AWS Amplify Authenticator
export default withAuthenticator(App, {
    includeGreetings: true, // Display a greeting message after login
});