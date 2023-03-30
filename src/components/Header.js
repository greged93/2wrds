import StarknetAccount from './StarknetAccount';

export default function Header() {
    return (
        <header className="bg-gray-900 flex">
            <nav
                className="mx-auto lg:flex-1 flex items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <img
                        className="h-10 w-auto"
                        src="./sn_icon.webp"
                        alt="Starknet logo"
                    />
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <StarknetAccount />
                </div>
            </nav>
        </header>
    );
}
