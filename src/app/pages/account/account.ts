import { Component } from "@angular/core";

/**
 * @brief account page
 *
 * @note has jti, if not valid go to `/sign-in`
 */
@Component({
  selector: "page-account",
  imports: [],
  template: ``,
  styles: ``,
})
export class AccountPage {
  public static readonly TITLE = "Account";
  public static readonly PATH = "account";
}
