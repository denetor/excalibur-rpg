import {DisplayMode, Engine, Loader} from 'excalibur';
import {Resources} from './resources';
import {ScenesService} from "./services/scenes.service";
import {ServiceTypeEnum} from "./enums/service-type.enum";
import {TestScene} from "./scenes/test.scene";


/**
 * Managed game class
 */
export class Game extends Engine {
  // private player: PlayerActor;
  // private mainMenu: MainMenu;
  // private levelOne: LevelOne;
  // private scrollingLevel: ScrollingLevel;
  private testScene: TestScene;
  scenesService: ScenesService;

  constructor() {
    super({
      width: 1000,
      height: 1000,
      displayMode: DisplayMode.FitScreen,
    });
  }

  /**
   * Add a service to the game
   *
   * @param type
   * @param service
   */
  public addService(type: ServiceTypeEnum, service: any): void {
    if (type === ServiceTypeEnum.ScenesService) {
      this.scenesService = service;
    }
  }

  public start() {
    this.testScene = new TestScene();
    this.add('testScene', this.testScene);

    const loader = new Loader(Object.values(Resources));
    return super.start(loader);
  }

}
