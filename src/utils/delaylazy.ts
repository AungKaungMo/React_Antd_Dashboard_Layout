import React, { lazy } from "react";

export const delayedLazy = (
  importFunc: () => Promise<{ default: React.ComponentType<any> }>,
  delay = 1000
) => {
  return lazy(async () => {
    await new Promise((resolve) => setTimeout(resolve, delay));
    return importFunc();
  });
};
