import { makeAutoObservable } from 'mobx';

class TimerStore {
  secondPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondPassed += 1;
  }
}

export default TimerStore;
