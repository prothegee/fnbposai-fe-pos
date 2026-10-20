import { RenderMode, ServerRoute } from "@angular/ssr";
import { HomePage } from "./pages/home/home";
import { SignInPage } from "./pages/sign-in/sign-in";
import { SignUpPage } from "./pages/sign-up/sign-up";
import { SignUpTenantPage } from "./pages/sign-up-tenant/sign-up-tenant";
import { SignOutPage } from "./pages/sign-out/sign-out";
import { AccountPage } from "./pages/account/account";
import { ItemsPage } from "./pages/items/items";
import { OrdersPage } from "./pages/orders/orders";
import { SalesPage } from "./pages/sales/sales";
import { TenantPage } from "./pages/tenant/tenant";
import { StocksPage } from "./pages/stocks/stocks";
import { MonitorKibaPage } from "./pages/monitor-kiba/monitor-kiba";

export const serverRoutes: ServerRoute[] = [
  // --------------------------------------------------------- //
  // Common
  {
    path: HomePage.PATH,
    renderMode: RenderMode.Server,
  },
  // --------------------------------------------------------- //
  // Auth
  {
    path: SignInPage.PATH,
    renderMode: RenderMode.Prerender,
  },
  {
    path: SignUpPage.PATH,
    renderMode: RenderMode.Prerender,
  },
  {
    path: SignUpTenantPage.PATH,
    renderMode: RenderMode.Prerender,
  },
  {
    path: SignOutPage.PATH,
    renderMode: RenderMode.Prerender,
  },
  // --------------------------------------------------------- //
  // App
  {
    path: AccountPage.PATH,
    renderMode: RenderMode.Prerender,
  },
  {
    path: ItemsPage.PATH,
    renderMode: RenderMode.Prerender,
  },
  {
    path: OrdersPage.PATH,
    renderMode: RenderMode.Prerender,
  },
  {
    path: SalesPage.PATH,
    renderMode: RenderMode.Prerender,
  },
  {
    path: TenantPage.PATH,
    renderMode: RenderMode.Prerender,
  },
  {
    path: StocksPage.PATH,
    renderMode: RenderMode.Prerender,
  },
  {
    path: MonitorKibaPage.PATH,
    renderMode: RenderMode.Prerender,
  },
  // --------------------------------------------------------- //
  // Others
  {
    path: "**",
    renderMode: RenderMode.Client,
    status: 404,
  },
];
