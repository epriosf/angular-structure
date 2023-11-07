import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { registerLicense } from '@syncfusion/ej2-base';

registerLicense(
	'ORg4AjUWIQA/Gnt2V1hiQllPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXZSdURqWX1fdXJXT2I='
);
platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.catch((err) => console.error(err));
