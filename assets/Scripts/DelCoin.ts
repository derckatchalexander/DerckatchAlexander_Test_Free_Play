import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DelCoin')
export class DelCoin extends Component {
    @property({type:Node})
    private target: Node = null;

    start() {

    }
    destroyCoin() {
        {
            
            setTimeout(function () {
                this.target.destroy();
              }.bind(this), 15000);
        }
  
        
  }
}


