import { useState, useEffect } from 'react';
import { useAccount, useConnectors } from '@starknet-react/core';

function ConnectButton() {
    // React state
    const [connectors, setConnectors] = useState([]);
    // React hooks
    const { account } = useAccount();
    const { available, connect } = useConnectors();

    useEffect(() => {
        if (available) setConnectors(available);
    }, [available]);

    if (account) {
        return (
            <button
                type="button"
                className="main-button"
                onClick={() => console.log('Minting')}
            >
                Mint
            </button>
        );
    } else {
        console.log('connectors[0]:', connectors[0]);
        return (
            <button
                type="button"
                className="main-button"
                onClick={() => connect(connectors[0])}
            >
                Connect account
            </button>
        );
    }
}

export default ConnectButton;
