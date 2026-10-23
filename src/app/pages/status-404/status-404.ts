import { Component } from "@angular/core";

@Component({
  selector: `app-status_404`,
  template: `
    <main>
      <h1>404</h1>
    </main>
  `,
  styles: `
    main {
      height: 100%;
      width: 100dvw;
      display: grid;
      place-items: center;
      align-content: center;
    }

    h1 {
      font-size: 4rem;
    }
  `,
})
export class Status404 {
  static readonly TITLE = "404";
}
