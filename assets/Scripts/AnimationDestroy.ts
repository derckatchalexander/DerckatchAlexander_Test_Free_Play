import { _decorator, Component, Node, Collider, Animation, RigidBody, MeshCollider, Sprite, tween, Vec3, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AnimationDestroy')
export class AnimationDestroy extends Component {
    @property({ type: Node })
    targetNode: Node = null; 

    @property({ type: Animation })
    animation: Animation = null; 

    @property({ type: Node })
    newCanvas: Node = null;

    @property({ type: Sprite })
    pulsingSprite: Sprite = null; 

    @property({ type: Label })
    suddenLabel: Label = null; 

    @property({ type: Sprite })
    finalSprite: Sprite = null; 

  

 


start() {

const collider = this.getComponent(Collider);


if (collider) {
collider.on('onTriggerEnter', this.onTriggerEnter, this);
        }
if (this.animation) {
this.animation.on(Animation.EventType.FINISHED, this.onAnimationFinished, this);
}
    }

onTriggerEnter(event: { selfCollider: Collider, otherCollider: Collider }) {
       
if (event.otherCollider.node === this.targetNode) {

if (this.animation) {
this.animation.play();
            }
        }
    }
onAnimationFinished() {
if (this.animation) {
            this.animation.stop();
        }
if (this.newCanvas) {
this.newCanvas.active = true;
        }
         if (this.pulsingSprite) {
            this.startPulsing(this.pulsingSprite.node);
        }

        
        if (this.suddenLabel && this.finalSprite) {
            this.suddenLabel.node.active = true;
            this.scheduleOnce(() => {
                this.suddenLabel.node.active = false;
                this.finalSprite.node.active = true;
            }, 2);
        }
    }

    startPulsing(node: Node) {
        tween(node)
            .to(0.5, { scale: new Vec3(1.2, 1.2, 1.2) })
            .to(0.5, { scale: new Vec3(1, 1, 1) })
            .union()
            .repeatForever()
            .start();
    }
}

