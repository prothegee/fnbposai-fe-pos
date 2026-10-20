import { Component } from "@angular/core";

/**
 * @brief Sign In page component
 *
 * @note has jti, if valid go to `/orders/:id_ref_tenant/:id_ref_tenant_branch`
 */
@Component({
  selector: "page-sign_in",
  imports: [],
  template: ``,
  styles: ``,
})
export class SignInPage {
  public static readonly TITLE = "Sign In";
  public static readonly PATH = "sign-in";
}
