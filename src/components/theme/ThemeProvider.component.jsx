"use client";

import React, { useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";



export function ThemeProvider(props) {
  const { children, ...rest } = props;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return <NextThemesProvider {...rest}>{children}</NextThemesProvider>;
}
