import { Component } from "@angular/core";

@Component({
  selector: "comp-or_divider",
  template: `
    <div class="or">
      <span class="or-line"></span>
      <span class="or-text">OR</span>
      <span class="or-line"></span>
    </div>
  `,
  styles: `
    @use "../../../styles/type" as type;

    .or {
      display: flex;
      align-items: center;
      gap: 28px;
      padding: 8px 0 2px;
    }

    .or-line {
      flex: 1 1 auto;
      height: 1px;
      background: var(--c-line);
    }

    .or-text {
      color: var(--c-slate-400);
      @include type.text(10.5px, 14px, center);
      font-weight: 600;
      letter-spacing: 0.4px;
    }
  `,
})
export class CompOrDivider {}
