import { makeAutoObservable, observable } from "mobx";
import { observer } from "mobx-react-lite";
 class Counter {
  @observable count: number = 0;

  constructor() {
    makeAutoObservable(this);
  }
}
export const counter = new Counter()
