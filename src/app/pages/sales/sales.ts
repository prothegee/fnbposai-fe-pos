import { Component } from "@angular/core";

/**
 * @brief sales page component
 *
 * @note has jti, if not valid go to `/sign-in`
 */
@Component({
  selector: "page-sales",
  imports: [],
  template: ``,
  styles: ``,
})
export class SalesPage {
  public static readonly TITLE = "Sales";
  /**
   * @note `:it` is id_ref from tenant
   * and `:itb` is id_ref from tenant_branch
   */
  public static readonly PATH = "sales/:it/:itb";
}
