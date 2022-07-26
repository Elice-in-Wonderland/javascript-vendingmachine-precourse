/* eslint-disable @typescript-eslint/no-empty-function */
type TState = Record<string, any>;
abstract class Components {
    container: HTMLElement;
    props: TState;
    state: TState;
    ref: TState;
    constructor({ container, props = {} }) {
        this.container = container;
        this.props = props;
        this.state = {};
        this.ref = {};
        this.init();
        this.render();
        this.mounted();
        this.setEvent();
    }

    public init() {}
    public mounted() {}

    setState(nextState) {
        this.state = nextState;
        this.render();
    }

    render() {
        this.container.innerHTML = this.markup();
        this.renderCallback();
        // this.setEvent();
    }
    public abstract markup(): string;
    renderCallback() {}
    setEvent() {}
}
export default Components;
