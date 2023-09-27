import React, { useReducer } from "react";
import { UserInfo } from "./types/UserInfo";

type StrengthAppState = {
  mode: string;
  userInfo?: UserInfo;
};

type Action =
  | { type: "SWITCH_MODE" }
  | { type: "USER_SIGNIN"; payload: UserInfo }
  | { type: "USER_SIGNOUT" };

const initialState: StrengthAppState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")!)
    : null,

  mode: localStorage.getItem("mode")
    ? localStorage.getItem("mode")!
    : window.matchMedia &&
      window.matchMedia("prefers-color-scheme: light").matches
    ? "light"
    : "dark",
};

const reducer = (state: StrengthAppState, action: Action): StrengthAppState => {
  let newMode;
  switch (action.type) {
    case "SWITCH_MODE":
      newMode = state.mode === "dark" ? "light" : "dark";
      localStorage.setItem("mode", newMode);
      return { ...state, mode: newMode };

    case "USER_SIGNIN":
      return { ...state, userInfo: action.payload };

    case "USER_SIGNOUT":
      return {
        mode:
          window.matchMedia &&
          window.matchMedia("prefers-color-scheme: dark").matches
            ? "dark"
            : "light",
      };
    default:
      return state;
  }
};

const defaultDispatch: React.Dispatch<Action> = () => initialState;

const StrengthApp = React.createContext({
  state: initialState,
  dispatch: defaultDispatch,
});

function StrengthAppProvider(props: React.PropsWithChildren<object>) {
  const [state, dispatch] = useReducer<React.Reducer<StrengthAppState, Action>>(
    reducer,
    initialState
  );
  return (
    <StrengthApp.Provider
      value={{ state, dispatch }}
      {...props}
    ></StrengthApp.Provider>
  );
}

export { StrengthApp, StrengthAppProvider };
