import { Component, input } from "@angular/core";

@Component({
  selector: "comp-or_divider",
  template: `
    <div class="or">
      <span class="or-line" [class]="line_class()"></span>
      <span class="or-text" [class]="class()">OR</span>
      <span class="or-line" [class]="line_class()"></span>
    </div>
  `,
  styles: `
    @use "../../../styles/type" as type;

    :host {
      display: block;
      width: 100%;
    }

    .or {
      display: flex;
      align-items: center;
      gap: 28px;
      padding: 8px 0 2px;
    }

    .or-line {
      flex: 1 1 auto;
      height: 1px;
    }

    .or-text {
      @include type.text(10.5px, 14px, center);
      font-weight: 600;
      letter-spacing: 0.4px;
    }
  `,
})
export class CompOrDivider {
  readonly class = input<string>("");

  readonly line_class = input<string>("");
}
