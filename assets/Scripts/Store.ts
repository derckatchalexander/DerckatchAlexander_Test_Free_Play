

import { _decorator, Component, Node, sys, EventTouch } from 'cc';
const { ccclass, property } = _decorator;
import * as cc from 'cc';
@ccclass('Store')
export class Store extends Component {
    start() {
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    onTouchEnd(event: EventTouch) {
        
        const isIOS = cc.sys.os === (cc.sys as any).OS_IOS
        const isAndroid = cc.sys.os === (cc.sys as any).OS_ANDROID;

       
        const appStoreLink = "https://apps.apple.com/us/app";  
        const playStoreLink = "https://play.google.com/store"; 

        if (isIOS) {
            sys.openURL(appStoreLink);
        } else if (isAndroid) {
            sys.openURL(playStoreLink);
        } else {
            console.log("Не поддерживаемая платформа");
        }
    }
}