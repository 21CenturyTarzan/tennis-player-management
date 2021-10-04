import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Notification = () => {

	return (
    <div className="l-content__ttl">
        <div className="p-notification">
            <div className="p-notification-icon">
                <div className="p-notification-icon-wrap">
                    <div className="count">1</div>
                    <div className="p-notification-icon-bg">
                        <img src="/images/notification.svg" style={{width: '70%', height: '70%', position: 'absolute', left: '14%', top: '12%'}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Notification;

var element = document.querySelector('#notification');
if(element){
    ReactDOM.render(<Notification/>, element);
}

