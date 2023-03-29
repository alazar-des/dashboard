import { createContext } from "react";

export const ToggleMobileDrawerContext = createContext({
  showMobileDrawer: false,
  setShowMobileDrawer: () => {},
});

export const CollapseDrawerContext = createContext({
  collapseDrawer: false,
  setCollapseDrawer: () => {},
});
