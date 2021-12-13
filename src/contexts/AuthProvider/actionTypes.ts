export const actionTypes = {
  GET_CURRENT_USER: "GET_CURRENT_USER",
  CLEAR_CURRENT_USER: "CLEAR_CURRENT_USER",
  LOADING_ON: "LOADING_ON",
  LOADING_OFF: "LOADING_OFF",
} as const;

export type ActionType = typeof actionTypes;
export type ActionTypeUnion = ActionType[keyof ActionType];
