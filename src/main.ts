import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { App } from "./app/app";
import { registerServiceWorker } from "@AppCore/offline/service-worker";

bootstrapApplication(App, appConfig)
  .then(() => {
    registerServiceWorker();
  })
  .catch((err: unknown) => console.error(err));
