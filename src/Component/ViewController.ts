import View from "./View";

class ViewController extends View {
  public changeView(target: string) {}
  protected state = {};
  protected setState(nextState: {}) {}
  protected setEvent(callback?: any) {}
}

export default ViewController;
