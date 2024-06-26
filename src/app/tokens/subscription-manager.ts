import {Subscription} from "rxjs";

export class SubscriptionManager {
  private subs = [] as Subscription[];

  public add(sub: Subscription): void {
    this.subs.push(sub);
  }

  public clear(): void {
    this.subs.forEach(s => s.unsubscribe());
    this.subs = [];
  }
}
