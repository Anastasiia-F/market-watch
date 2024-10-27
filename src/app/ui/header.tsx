import { Image } from 'primereact/image';
import { Menubar } from 'primereact/menubar';
import UserMenu from '@/app/ui/userMenu/userMenu';
import HeaderSearch from '@/app/ui/headrSearch/headrSearch';

const Header = () => {
    const items = [
        {
            label: 'About us',
            url: '#'
        },
        {
            label: 'Blog',
            url: '#'
        }
    ];

    const end = (
        <div className="flex align-items-center gap-2 ml-8">
            <UserMenu />
            <HeaderSearch />
        </div>
    );

    return (
        <div className="flex items-center container mx-auto max-w-screen-xl">
            <div className="logo frow-0 flex">
                <Image width="170" src='/logo.svg' alt="Logo"/>
            </div>
            <nav className="grow flex justify-end">
                <Menubar className="border-0 pr-0" model={items} end={end} />
            </nav>
        </div>
    )
};

export default Header;
