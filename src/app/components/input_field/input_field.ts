import { Component, input } from "@angular/core";

/**
 * @brief input field component
 */
@Component({
  selector: "comp-input_field",
  template: `
    <div class="relative">
      @if (floating()) {
        <input
          [id]="id()"
          [type]="type()"
          [name]="name()"
          [class]="class()"
          class="border"
          [autocomplete]="autocomplete()"
        />
        <label [for]="id()" [class]="label_class()" class="">
          {{ label() }}
        </label>
      } @else {
        <input
          [id]="id()"
          [type]="type()"
          [name]="name()"
          [class]="class()"
          [autocomplete]="autocomplete()"
          [placeholder]="label()"
        />
      }
    </div>
  `,
  styles: `
    :host ::ng-deep input {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
    }
  `,
})
export class CompInputField {
  readonly id = input<string>("");
  readonly type = input<string>("");
  readonly name = input<string>("");
  readonly class = input<string>("");
  readonly autocomplete = input<string>("");

  readonly label = input<string>("");
  readonly floating = input(false);
  readonly label_class = input<string>("");
}
