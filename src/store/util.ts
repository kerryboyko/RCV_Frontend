export interface IReduxTypes {
  [key: string]: string;
}
export const makeReduxTypes = (
  prefix: string,
  ...reduxTypes: string[]
): IReduxTypes =>
  reduxTypes.reduce(
    (pv: IReduxTypes, cv: string) => ({ ...pv, [cv]: `${prefix}.${cv}` }),
    {}
  );
