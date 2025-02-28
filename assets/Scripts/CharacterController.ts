
       import { _decorator, Component, Node, Slider, Vec3, Animation, AnimationClip, RigidBody, MeshCollider } from 'cc';

        const { ccclass, property } = _decorator;
        
        @ccclass('CharacterController')
        export class CharacterController extends Component {
            @property({ type: Slider })
            speedSlider: Slider = null;
        
            @property({ type: Number })
            minSpeed: number = 0;
        
            @property({ type: Number })
            maxSpeed: number = 10;

            @property({ type: [RigidBody] })
            rigidbodies: RigidBody[] = [];
        
            @property({ type: [MeshCollider] })
            meshColliders: MeshCollider[] = [];
        
            private speed: number = 0;
        
            start() {
                this.speedSlider.node.on('slide', this.onSliderChanged, this);
                const animation = this.getComponent(Animation);
                if (animation) {
                    animation.on(Animation.EventType.FINISHED, this.onAnimationFinished, this);
                }
            }
        
            onSliderChanged(slider: Slider) {
                const sliderValue = slider.progress;
                this.speed = sliderValue * (this.maxSpeed - this.minSpeed) + this.minSpeed;
            }
        
            update() {
                this.node.position = this.node.position.add(new Vec3(this.speed, 0, 0));
            }
            onAnimationFinished() {
                this.enabled = false;
                for (const rb of this.rigidbodies) {
                    if (rb) {
                        rb.enabled = true;
                }
            }
           
             for (const mc of this.meshColliders) {
                if (mc) {
                    mc.enabled = true;
                }
            }
            }
        }

       