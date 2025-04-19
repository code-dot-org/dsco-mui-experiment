export const cssVar = (variable: string) =>
    getComputedStyle(document.documentElement)
        .getPropertyValue(variable)
        .trim();