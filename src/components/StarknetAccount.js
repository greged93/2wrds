import { useState, useEffect } from 'react';
import { useAccount, useConnectors } from '@starknet-react/core';

function StarknetAccount() {
    // React state
    const [_, setConnectors] = useState([]);
    const [accountText, setAccountText] = useState(
        'Please connect your wallet'
    );
    // React hooks
    const { account, address } = useAccount();
    const { available, disconnect } = useConnectors();

    const handleDisconnect = () => {
        if (account) {
            disconnect();
            setAccountText('Please connect your wallet');
        }
    };

    const handleMousEnter = () => {
        if (account) {
            setAccountText('Disconnect');
        }
    };

    const handleMouseLeave = () => {
        if (account) {
            setAccountText(address.slice(0, 6) + '...' + address.slice(-4));
        }
    };

    useEffect(() => {
        if (available) setConnectors(available);
    }, [available]);

    useEffect(() => {
        if (account) {
            setAccountText(address.slice(0, 6) + '...' + address.slice(-4));
        }
    }, [account, address]);

    return (
        <div
            className={`text-white min-w-[200px] flex font-mono border-2 p-3 ${
                !account
                    ? 'border-transparent'
                    : 'rounded-full border-green-800 transition ease-in-out hover:cursor-pointer hover:border-red-800'
            }`}
            onMouseEnter={handleMousEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleDisconnect}
        >
            <div className="mx-auto">{accountText}</div>
        </div>
    );
}

export default StarknetAccount;
