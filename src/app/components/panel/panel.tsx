import React from 'react';
import { Button } from 'primereact/button';
import { useRef, useState } from 'react';

const Panel: React.FC<React.PropsWithChildren<{label: string}>> = ({children, label}) => {
    const minHeight = 350;
    const panelRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const buttonText = {
        close: 'Show more',
        open: 'Show less',
    }

    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [buttonLabel, setButtonLabel] = useState(buttonText.close);

    const togglePanel = () => {
        let height = 0;
        if(!isPanelOpen) {
            height = contentRef.current!.offsetHeight;
            panelRef.current!.style.height = height + 'px';
            setIsPanelOpen(true);
            setButtonLabel(buttonText.open);
        } else {
            panelRef.current!.style.height = minHeight + 'px';
            setIsPanelOpen(false);
            setButtonLabel(buttonText.close);
        }
    };

    return (
        <div className="panel"
             style={{height: `${minHeight}px`}}
             ref={panelRef}>
            <div className="panel-content"
                 ref={contentRef}>
                <h2 className="flex items-center">
                    <span className="label flex-none">{label}</span>
                    <span className="bg grow"></span>
                    <Button className="flex-none" label={buttonLabel} outlined rounded onClick={togglePanel} />
                </h2>
                {children}
            </div>
            <div className="panel-bg"
                 style={{opacity: isPanelOpen ? 0 : 1}}></div>
        </div>
    );
}

export default Panel;
