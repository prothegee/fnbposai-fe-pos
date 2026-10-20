import { Component } from "@angular/core";

/**
 * @brief items page component
 *
 * @note has jti, if not valid go to `/sign-in`
 */
@Component({
  selector: "page-orders",
  imports: [],
  template: ``,
  styles: ``,
})
export class OrdersPage {
  public static readonly TITLE = "Orders";
  /**
   * @note `:it` is id_ref from tenant
   * and `:itb` is id_ref from tenant_branch
   */
  public static readonly PATH = "orders/:it/:itb";
}
