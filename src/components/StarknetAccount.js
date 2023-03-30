import { useState, useEffect } from 'react';
import { useAccount, useConnectors } from '@starknet-react/core';

function StarknetAccount() {
    // React state
    const [_, setConnectors] = useState([]);
    // React hooks
    const { account, address } = useAccount();
    const { available } = useConnectors();

    useEffect(() => {
        if (available) setConnectors(available);
    }, [available]);

    let text = 'Please connect your wallet';
    if (account) {
        text = address.slice(0, 6) + '...' + address.slice(-4);
    }
    return <div className="text-white font-mono">{text}</div>;
}

export default StarknetAccount;
