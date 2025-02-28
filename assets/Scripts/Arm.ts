import { _decorator, Component, Node, Sprite, Animation } from 'cc';


const { ccclass, property } = _decorator;

@ccclass('ArmScript')
export class ArmScript extends Component {
  @property({ type: Sprite })
  handSprite: Sprite = null;

  @property({ type: Sprite })
  handSpritedestroy: Sprite = null;


  @property({ type: Animation })
  handAnimation: Animation = null;

  private hasPlayed = false;

  start() {
    this.handAnimation.play();
    this.hasPlayed = true;
  }


  update() {
    if (this.hasPlayed) {
        this.hasPlayed = false;
    setTimeout(() => this.handAnimation.play(),3000);
    setTimeout(() => this.handAnimation.destroy() && this.handSpritedestroy.destroy() , 5000);
  }
}
}