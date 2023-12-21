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
            target="_blank" href="https://pay.hotmart.com/U84923107Q?off=p0l0vp8p&checkoutMode=10&ref=T89255880M&bid=1703089375121&hideBillet=1"
        >
            {props.title}
        </Button>
    );
}
