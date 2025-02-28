import { _decorator, Component, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
  @property({ type: Label })
  scoreLabel: Label = null;

  private score: number = 0;

  incrementScore() {
    this.score++;
    this.scoreLabel.string = `${this.score}`;
  }

}


