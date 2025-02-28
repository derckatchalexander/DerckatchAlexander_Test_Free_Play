import { _decorator, Component, Collider, Node, Animation } from 'cc';
const { ccclass, property } = _decorator;
import { GameManager } from './GameManager';
@ccclass('TriggerHandler')
export class TriggerHandler extends Component {
  @property({ type: Node })
  targetNode: Node = null; 
  @property({ type: Animation })
  animation: Animation = null;
  @property({ type: GameManager })
  gameManager: GameManager = null
  start() {
   
    const collider = this.getComponent(Collider);
    if (collider) {
      collider.on('onTriggerEnter', this.onTriggerEnter, this);
    }
  }

  onTriggerEnter(event: { selfCollider: Collider, otherCollider: Collider }) {
    
    if (event.otherCollider.node === this.targetNode) {
      
      if (this.animation) {
        this.animation.play();
        this.node.destroy();
        this.gameManager.incrementScore();
        
        this.scheduleOnce(() => {
          this.node.destroy();
          if (this.gameManager) {
            this.gameManager.incrementScore();
          }
        }, this.animation.defaultClip.duration);
      } else {
       
        this.node.destroy();
        if (this.gameManager) {
          this.gameManager.incrementScore();
        }
      }
    }
  }
}
