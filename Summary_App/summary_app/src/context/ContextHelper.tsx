// import Summary from "@/components/coustomUi/Summary";
import { createContext, useReducer, ReactNode, useContext } from "react";

interface ContextState {
  sideBar: boolean;
  summary: string;
}

type AuthAction =
  | { type: "SIDE_BAR"; payload: boolean }
  | { type: "SET_SUMMARY"; payload: string }
  ;

const INITIAL_STATE: ContextState = {
  sideBar: false,
  summary: "",
};

function Reducer(state: ContextState, action: AuthAction): ContextState {
  switch (action.type) {
    case "SIDE_BAR":
      return { ...state, sideBar: action.payload };
    case "SET_SUMMARY":
      return { ...state, summary: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

type ContextType = ContextState & {
  toggleSideBar: () => void;
  setData: (data: string) => void;
};

const ContextAPI = createContext<ContextType>({
  ...INITIAL_STATE,
  toggleSideBar: () => {},
  setData: () => {},
});

const ContextHelper = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  const toggleSideBar = () => {
    dispatch({ type: "SIDE_BAR", payload: !state.sideBar });
  };

  const setData = (data: string) => {
    dispatch({ type: "SET_SUMMARY", payload: data });
  };

  const value = {
    ...state,
    toggleSideBar,
    sideBar: state.sideBar,
    setData,
    summary: state.summary,
  };

  return <ContextAPI.Provider value={value}>{children}</ContextAPI.Provider>;
};

export const useHelper = () => {
  const context = useContext(ContextAPI);
  if (!context) throw new Error("Use Hook must be used within a ContextHelper");

  return context;
};

export default ContextHelper;
// export { ContextAPI };
