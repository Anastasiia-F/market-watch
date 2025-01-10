import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { SyntheticEvent, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

const UserMenu = () => {
    const menuRef = useRef<Menu | null>(null);
    const menuToast = useRef<Toast | null>(null);

    const clickHandler = (event: SyntheticEvent) => menuRef.current?.toggle(event);

    const items = [
        {
            label: 'Login',
            url: '#'
        },
        {
            label: 'Sign in',
            url: '#'
        }
    ];

    return (
        <div className="user-menu">
            <Toast ref={menuToast}></Toast>
            <Menu ref={menuRef}
                  model={items}
                  popup
                  className="mt-6"
                  popupAlignment="right"
                  id="menu"/>
            <Button
                onClick={clickHandler}
                rounded
                outlined
                plain
                aria-controls="popup_menu_left"
                aria-haspopup>
                <Avatar image="avatar.png"
                        shape="circle"
                        size="normal" />
            </Button>
        </div>
    );
};

export default UserMenu;
