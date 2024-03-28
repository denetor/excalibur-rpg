import {Actor} from "excalibur";

/**
 * Generic base class of every actor
 */
export class EntityActor extends Actor {
    public type: string = 'entity';
    public hp: number;

    public hit(hp: number): void {
        this.hp -= hp;
    }
}