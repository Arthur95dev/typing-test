import React from 'react';
import ChangeLang from './ServiceSubComp/ChangeLang';
import GetTextBtn from './ServiceSubComp/GetTextBtn';
import Start from './ServiceSubComp/Start';

function ServiceMenu() { 

    return (
        <div className='_container'>
            <div className='service-menu'>
                <ChangeLang/>
                <GetTextBtn/>
                <Start/>
            </div>
        </div>
    )
}

export default ServiceMenu;
