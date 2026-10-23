import { Component } from "@angular/core";

/**
 * @brief Sign Out page component
 *
 * @note has jti, if valid go to `/orders/:id_ref_tenant/:id_ref_tenant_branch`
 */
@Component({
  selector: "page-sign_out",
  imports: [],
  template: ``,
  styles: ``,
})
export class SignOutPage {
  static readonly TITLE = "Sign Out";
  static readonly PATH = "sign-out";
}
