import { Component, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CompInputField } from "@AppComponents/input_field/input_field";
import { CompOrDivider } from "@AppComponents/or_divider/or_divider";

/**
 * @brief Sign In page component
 *
 * @note has jti, if valid go to `/orders/:id_ref_tenant/:id_ref_tenant_branch`
 */
@Component({
  selector: "page-sign_in",
  imports: [CompInputField, CompOrDivider, RouterLink],
  templateUrl: `./sign-in.html`,
  styleUrl: `./sign-in.scss`,
})
export class SignInPage {
  static readonly TITLE = "Sign In";
  static readonly PATH = "sign-in";

  readonly busy = signal<boolean>(false);

  constructor() {}

  protected async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    alert("TODO: sign-in");
  }
}
