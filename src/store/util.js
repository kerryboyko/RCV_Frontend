export const makeReduxTypes = (prefix, ...reduxTypes) =>
  reduxTypes.reduce((pv, cv) => ({ ...pv, [cv]: `${prefix}.${cv}` }), {});
