import type { Router } from "vue-router";

export function routerToMenu(router: Router): object[] {
  return Object.values(
    router.options.routes.reduce((menuItems: object[], currentRoute) => {
      const category = currentRoute.meta?.category || "";
      if (!menuItems[category] && (!currentRoute.meta?.hidden || false)) {
        menuItems[category] = { label: category, items: [] };
      }
      if (!currentRoute.meta?.hidden || false) {
        menuItems[category].items.push({
          label: currentRoute.name,
          route: currentRoute.path,
          icon: currentRoute.meta?.icon || "",
        });
      }
      return menuItems;
    }, {})
  );
}

export function routerToBreadcrumb() {}
