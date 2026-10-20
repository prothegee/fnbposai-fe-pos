import { Component } from "@angular/core";

/**
 * @brief Sign Up Tenant page component
 *
 * @note has jti, if valid go to `/orders/:id_ref_tenant/:id_ref_tenant_branch`
 */
@Component({
  selector: "page-sign_up-tenant",
  imports: [],
  template: ``,
  styles: ``,
})
export class SignUpTenantPage {
  public static readonly TITLE = "Sign Up Tenant";
  public static readonly PATH = "sign-up/tenant";
}
