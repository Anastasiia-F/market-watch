import React, { useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';

const Message = () => {
    const toast = useRef<Toast | null>(null);

    useEffect(() => {
        toast.current!.show({
            severity: 'info',
            detail: 'This website is currently under development. All data displayed is for testing purposes only and not real.',
            sticky: true
        });
    });

    return (<Toast ref={toast} position="bottom-right" />);
};

export default Message;
