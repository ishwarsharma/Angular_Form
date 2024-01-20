import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//bootstrap here in angular means to inject
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
