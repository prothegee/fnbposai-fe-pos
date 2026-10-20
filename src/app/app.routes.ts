import { Routes } from "@angular/router";
import { HomePage } from "./pages/home/home";
import { SignInPage } from "./pages/sign-in/sign-in";
import { Status404 } from "./pages/status-404/status-404";
import { SignUpPage } from "./pages/sign-up/sign-up";
import { SignOutPage } from "./pages/sign-out/sign-out";
import { SignUpTenantPage } from "./pages/sign-up-tenant/sign-up-tenant";
import { AccountPage } from "./pages/account/account";
import { ItemsPage } from "./pages/items/items";
import { OrdersPage } from "./pages/orders/orders";
import { SalesPage } from "./pages/sales/sales";
import { TenantPage } from "./pages/tenant/tenant";
import { StocksPage } from "./pages/stocks/stocks";
import { MonitorKibaPage } from "./pages/monitor-kiba/monitor-kiba";

function expandTitle(expand: string): string {
  return expand.length <= 0 ? `FnB POS A.I.` : `FnB POS A.I. - ${expand}`;
}

export const routes: Routes = [
  // --------------------------------------------------------- //
  // Common
  {
    path: HomePage.PATH,
    title: expandTitle(HomePage.TITLE),
    component: HomePage,
  },
  // --------------------------------------------------------- //
  // Auth
  {
    path: SignInPage.PATH,
    title: expandTitle(SignInPage.TITLE),
    component: SignInPage,
  },
  {
    path: SignUpPage.PATH,
    title: expandTitle(SignUpPage.TITLE),
    component: SignUpPage,
  },
  {
    path: SignUpTenantPage.PATH,
    title: expandTitle(SignUpTenantPage.TITLE),
    component: SignUpTenantPage,
  },
  {
    path: SignOutPage.PATH,
    title: expandTitle(SignOutPage.TITLE),
    component: SignOutPage,
  },
  // --------------------------------------------------------- //
  // App
  {
    path: AccountPage.PATH,
    title: expandTitle(AccountPage.TITLE),
    component: AccountPage,
  },
  {
    path: ItemsPage.PATH,
    title: expandTitle(ItemsPage.TITLE),
    component: ItemsPage,
  },
  {
    path: OrdersPage.PATH,
    title: expandTitle(OrdersPage.TITLE),
    component: OrdersPage,
  },
  {
    path: SalesPage.PATH,
    title: expandTitle(SalesPage.TITLE),
    component: SalesPage,
  },
  {
    path: TenantPage.PATH,
    title: expandTitle(TenantPage.TITLE),
    component: TenantPage,
  },
  {
    path: StocksPage.PATH,
    title: expandTitle(StocksPage.TITLE),
    component: StocksPage,
  },
  {
    path: MonitorKibaPage.PATH,
    title: expandTitle(MonitorKibaPage.TITLE),
    component: MonitorKibaPage,
  },
  // --------------------------------------------------------- //
  // Others
  {
    path: "**",
    title: expandTitle(Status404.TITLE),
    component: Status404,
  },
];
