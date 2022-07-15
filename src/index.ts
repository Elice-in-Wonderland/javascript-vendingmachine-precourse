import { $, createElement } from './utils';
import TabView from './view/TabView';

function main() {
  ($('#app') as HTMLDivElement).appendChild(
    createElement('header', { id: 'header' }),
  );

  ($('#app') as HTMLDivElement).appendChild(
    createElement('section', { id: 'section' }),
  );

  new TabView();
}

main();
