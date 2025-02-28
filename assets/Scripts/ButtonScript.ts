import { _decorator, Component, Node, Button, view } from 'cc';
import * as cc from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ButtonScript')
export class ButtonScript extends Component {
  @property({ type: Button })
  button: Button = null;

  start() {
    this.button.node.on(Button.EventType.CLICK, this.onClick, this);
  }

  onClick() {
    const userAgent = navigator.userAgent;
    if (userAgent.match(/iPhone|iPad|iPod/i)) {
      // Open App Store
      window.location.href = 'https://itunes.apple.com/us/app';
    } else if (userAgent.match(/Android/i)) {
      // Open Google Play
      window.location.href = 'https://play.google.com/store/apps';
    }
  }

}