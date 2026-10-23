import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CompInputField } from "@AppComponents/input_field/input_field";
import { CompOrDivider } from "@AppComponents/or_divider/or_divider";

/**
 * @brief Sign Up Tenant page component
 *
 * @note has jti, if valid go to `/orders/:id_ref_tenant/:id_ref_tenant_branch`
 */
@Component({
  selector: "page-sign_up-tenant",
  imports: [CompInputField, CompOrDivider, RouterLink],
  templateUrl: `./sign-up-tenant.html`,
  styleUrl: `./sign-up-tenant.scss`,
})
export class SignUpTenantPage {
  static readonly TITLE = "Sign Up Tenant";
  static readonly PATH = "sign-up/tenant";

  constructor() {}

  protected async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    alert("TODO: sign-up");
  }
}
