import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';
import { useRef } from 'react';

const HeaderSearch = () => {
    const overlayRef = useRef<OverlayPanel | null>(null);
    const wrapRef = useRef<HTMLDivElement | null>(null)

    return (
        <div className="header"
             ref={wrapRef}>
            <Button className="header-search"
                    onClick={(e) => overlayRef.current?.toggle(e)}
                    icon="pi pi-search"
                    rounded
                    outlined
                    plain
                    aria-label="Filter" />
            <OverlayPanel ref={overlayRef}
                          appendTo={wrapRef.current}>
                <InputText placeholder="searc"
                           className="w-[1232px]" />
            </OverlayPanel>
        </div>
    );
};

export default HeaderSearch;
