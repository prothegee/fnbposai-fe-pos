import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CompInputField } from "@AppComponents/input_field/input_field";
import { CompOrDivider } from "@AppComponents/or_divider/or_divider";

/**
 * @brief Sign Up page component
 *
 * @note has jti, if valid go to `/orders/:id_ref_tenant/:id_ref_tenant_branch`
 */
@Component({
  selector: "page-sign_up",
  imports: [CompInputField, CompOrDivider, RouterLink],
  templateUrl: `./sign-up.html`,
  styleUrl: `./sign-up.scss`,
})
export class SignUpPage {
  static readonly TITLE = "Sign Up";
  static readonly PATH = "sign-up";

  constructor() {}

  protected async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    alert("TODO: sign-up");
  }
}
