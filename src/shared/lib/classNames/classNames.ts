export type Mods = Record<string, boolean | string | undefined>;

/**
 * Generates a string of CSS class names based on the provided arguments.
 *
 * @param {string} cls - The base class name.
 * @param {Mods} [mods={}] - An object containing modifier class names.
 * @param {Array<string | undefined>} [additional=[]] - An array of additional class names.
 * @return {string} The generated string of CSS class names.
 */
export function classNames(
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ');
}
