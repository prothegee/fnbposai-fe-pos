import { Component } from "@angular/core";

/**
 * @brief items page component
 *
 * @note has jti, if not valid go to `/sign-in`
 */
@Component({
  selector: "page-items",
  imports: [],
  template: ``,
  styles: ``,
})
export class ItemsPage {
  public static readonly TITLE = "Items";
  /**
   * @note `:it` is id_ref from tenant
   * and `:itb` is id_ref from tenant_branch
   */
  public static readonly PATH = "items/:it/:itb";
}
