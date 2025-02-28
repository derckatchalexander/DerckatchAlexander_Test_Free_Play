

import { _decorator, Component, Node, Camera, Quat } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('CameraFollow')
export class CameraFollow extends Component {
    @property({ type: Node })
    player: Node = null;

    @property({ type: Camera })
    camera: Camera = null;

    @property({ type: Number })
    distanceX: number = -2; 
    @property({ type: Number })
    distanceY: number = 10; 
    @property({ type: Number })
    distanceZ: number = 32; 
    @property({ type: Number })
    angleX: number = -11; 
    @property({ type: Number })
    angleY: number = -14; 

    start() {
        let newPosition = this.player.position.clone();
        newPosition.x += this.distanceX;
        newPosition.y += this.distanceY;
        newPosition.z += this.distanceZ;
        this.camera.node.setPosition(newPosition);
        this.camera.node.rotation = new Quat();
        this.camera.node.rotation = Quat.fromEuler(new Quat(), this.angleX, this.angleY, 0);
    }

    update() {
        let newPosition = this.player.position.clone();
        newPosition.x += this.distanceX;
        newPosition.y += this.distanceY;
        newPosition.z += this.distanceZ;
        this.camera.node.setPosition(newPosition);
        this.camera.node.rotation = new Quat();
        this.camera.node.rotation = Quat.fromEuler(new Quat(), this.angleX, this.angleY, 0);
    }
}