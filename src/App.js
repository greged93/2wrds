import { StarknetConfig, InjectedConnector } from '@starknet-react/core';
import { SequencerProvider } from 'starknet';
import Body from './components/Body';
import Header from './components/Header';
import './App.css';

function App() {
    const connectors = [
        new InjectedConnector({ options: { id: 'braavos' } }),
        new InjectedConnector({ options: { id: 'argentX' } }),
    ];
    const testnet1 = 'https://alpha4.starknet.io/';

    return (
        <div>
            <StarknetConfig
                connectors={connectors}
                defaultProvider={new SequencerProvider({ baseUrl: testnet1 })}
            >
                <Header />
                <Body />
            </StarknetConfig>
        </div>
    );
}

export default App;
