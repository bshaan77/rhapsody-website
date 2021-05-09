// simple solution rn, update function later to look better later
export const truncate = (input) =>
  input.length > 5 ? `${input.substring(0, 5)}...` : input;
