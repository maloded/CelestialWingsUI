type Mods = Record<string,boolean | string>;

export const setClassNames = (cls: string, mods: Mods, additional: string[]): string => {
  return [
    cls,
    ...Object.keys(mods).filter(cls => mods[cls]),
    ...additional,
  ].join(" ");
};
