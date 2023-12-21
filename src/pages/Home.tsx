import { Button } from 'antd';
import * as React from 'react';
import mockup1 from '../assets/images/mockup1.png'



export default function Home() {
    return (
        <div>
            <div className="flex pd1 columned aligned-center justified-center">
                <Button type="primary" href="/cardapiodobebe" >Cardápio do bebê</Button>
                <img src={mockup1} alt="" className="mg1-auto" />
            </div>
        </div>
    );
}
