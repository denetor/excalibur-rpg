import {Engine, Scene} from "excalibur";

export class TestScene extends Scene {
    engine: Engine;
    // player: PlayerActor;

    onInitialize(engine: Engine): void {
        this.engine = engine;
    }

    onPostUpdate(engine: Engine, delta: number) {
        super.onPostUpdate(engine, delta);
    }
}