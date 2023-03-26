import StarknetAccount from './components/StarknetAccount';
import { StarknetConfig, InjectedConnector } from '@starknet-react/core';
import { SequencerProvider } from 'starknet';

function App() {
    const connectors = [
        new InjectedConnector({ options: { id: 'braavos' } }),
        new InjectedConnector({ options: { id: 'argentX' } }),
    ];
    const testnet1 = 'https://alpha4.starknet.io/';

    return (
        <StarknetConfig
            connectors={connectors}
            defaultProvider={new SequencerProvider({ baseUrl: testnet1 })}
        >
            <div>
                <StarknetAccount />
                <h1>Hello world!</h1>
            </div>
        </StarknetConfig>
    );
}

export default App;
