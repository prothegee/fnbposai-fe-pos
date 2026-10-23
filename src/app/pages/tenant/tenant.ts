import { Component } from "@angular/core";

/**
 * @brief tenants page component
 *
 * @note has jti, if not valid go to `/sign-in`
 */
@Component({
  selector: "page-tenant",
  imports: [],
  template: ``,
  styles: ``,
})
export class TenantPage {
  static readonly TITLE = "Tenant";
  /**
   * @note `:it` is id_ref from tenant
   * and `:itb` is id_ref from tenant_branch
   */
  static readonly PATH = "tenant/:it/:itb";
}
