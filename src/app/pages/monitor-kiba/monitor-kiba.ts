import { Component } from "@angular/core";

/**
 * @brief monitor kiba (kitchen & bar) page
 *
 * @note has jti, if not valid go to `/sign-in`
 */
@Component({
  selector: "page-monitor_kiba",
  imports: [],
  template: ``,
  styles: ``,
})
export class MonitorKibaPage {
  static readonly TITLE = "Monitor Kitchen & Bar";
  /**
   * @note `:it` is id_ref from tenant
   * and `:itb` is id_ref from tenant_branch
   */
  static readonly PATH = "monitor/:it/:itb/kiba";
}
