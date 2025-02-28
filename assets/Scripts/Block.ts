import { _decorator, Component, Node, RigidBody, Collider, Vec3, Quat, math } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('Block')
export class Block extends Component {
    @property({ type: Node })
    character: Node = null;
    
    @property({ type: Number })
    delay: number = 2; 

    @property({ type: Number })
    angleThreshold: number = 5

    private rigidbody: RigidBody | null = null;
    private initialRotation: Quat = new Quat();

    start() {
        this.rigidbody = this.getComponent(RigidBody);
        this.initialRotation.set(this.node.rotation);
        this.getComponent(Collider).on('onCollisionEnter', this.onCollisionEnter, this);
    }
    
    onCollisionEnter(event: { selfCollider: Collider, otherCollider: Collider }) {
        if (event.otherCollider.node === this.character) {
            this.destroyBlock();
        }
    }

    update(deltaTime: number) {
        const currentRotation = this.node.rotation;
        const angleY = math.toDegree(Math.acos(Quat.dot(this.initialRotation, currentRotation)));

        if (angleY >= this.angleThreshold) {
            this.enableGravity();
        }
    }
   
    destroyBlock() {
        this.scheduleOnce(() => {
            if (this.rigidbody) {
                this.rigidbody.type = RigidBody.Type.DYNAMIC;
                this.rigidbody.useGravity = true; 
                this.rigidbody.setLinearVelocity(new Vec3(0, -30, 0));
            }
            this.getComponent(Collider).enabled = false;
        }, this.delay);
    }

    enableGravity() {
        if (this.rigidbody) {
            this.rigidbody.useGravity = true; 
        }
    }
}
