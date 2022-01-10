export const authTypes = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  CLEAR_CURRENT_USER: "CLEAR_CURRENT_USER",
  LOADING_ON: "LOADING_ON",
  LOADING_OFF: "LOADING_OFF",
  UPDATE_MY_PROFILE: "UPDATE_MY_PROFILE",
  DELETE_MY_PROFILE_IMAGE: "DELETE_MY_PROFILE_IMAGE",
  GET_MY_FAVORITES: "SET_MY_FAVORITES",
  CREATE_FAVORITE: "CREATE_FAVORITE",
  DELETE_FAVORITE: "DELETE_FAVORITE",
  CONCAT_NOTIFICATIONS: "CONCAT_NOTIFICATIONS",
  UNSHIFT_NOTIFICATION: "UNSHIFT_NOTIFICATION",
  READ_ALL_NOTIFICATIONS: "READ_ALL_NOTIFICATIONS",
  SET_MY_RESERVATIONS: "SET_MY_RESERVATIONS",
  CREATE_RESERVATION: "CREATE_RESERVATION",
  UPDATE_RESERVATION: "UPDATE_RESERVATION",
  DELETE_RESERVATION: "DELETE_RESERVATION",
} as const;

export type ActionType = typeof authTypes;
export type ActionTypeUnion = ActionType[keyof ActionType];
