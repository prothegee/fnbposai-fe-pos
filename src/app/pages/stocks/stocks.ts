import { Component } from "@angular/core";

/**
 * @brief stocks page component
 *
 * @note has jti, if not valid go to `/sign-in`
 */
@Component({
  selector: "page-stocks",
  imports: [],
  template: ``,
  styles: ``,
})
export class StocksPage {
  public static readonly TITLE = "Stocks";
  /**
   * @note `:it` is id_ref from tenant
   * and `:itb` is id_ref from tenant_branch
   */
  public static readonly PATH = "stocks/:it/:itb";
}
