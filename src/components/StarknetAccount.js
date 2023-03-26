import { useState, useEffect } from 'react';
import { useAccount, useConnectors } from '@starknet-react/core';

function StarknetAccount() {
    // React state
    const [connectors, setConnectors] = useState([]);
    // React hooks
    const { account, address, status } = useAccount();
    const { available, connect, disconnect } = useConnectors();

    useEffect(() => {
        if (available) setConnectors(available);
    }, [available]);

    let rendered_address = 'Not connected to StarkNet';
    if (account) {
        rendered_address = address.slice(0, 6) + '...' + address.slice(-4);
    } else {
        return connectors.map((connector, index) => {
            return (
                <div key={index}>
                    <button onClick={() => connect(connector)}>
                        Connect account
                    </button>
                </div>
            );
        });
    }

    return (
        <div>
            <div>My address {rendered_address}</div>
        </div>
    );
}

export default StarknetAccount;
