import { useState, useEffect } from 'react';
import { useAccount, useConnectors } from '@starknet-react/core';

function CentralButton() {
    // React state
    const [connectors, setConnectors] = useState([]);
    const [minting, setMinting] = useState(false);
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
                className="main-button flex"
                onClick={() => setMinting(true)}
            >
                {minting ? (
                    <span className="m-auto">
                        <img
                            className="w-6 h-6 loading-wheel w-auto"
                            src="./sn_icon.webp"
                            alt="Starknet logo"
                        />
                    </span>
                ) : (
                    <div className="m-auto">Mint</div>
                )}
            </button>
        );
    } else {
        return (
            <button
                type="button"
                className="main-button"
                onClick={() => {
                    if (connectors.length > 0) connect(connectors[0]);
                }}
            >
                Connect account
            </button>
        );
    }
}

export default CentralButton;
