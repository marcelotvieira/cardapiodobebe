import { Button } from 'antd';
import * as React from 'react';

type Props = {
    title: string
}

export function ActionButton(props: Props) {

    return (
        <Button
            type="link"
            className='action-button'
            target="_blank" href="https://go.hotmart.com/T89255880M?ap=6076&hideBillet=1"
        >
            {props.title}
        </Button>
    );
}
