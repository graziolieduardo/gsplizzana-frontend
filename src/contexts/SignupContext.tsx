import { createContext, useEffect, useReducer } from "react";

type SignupContextProviderProps = {
    children: React.ReactNode;
}

type SignupContextType = {
    category: string,
    team_name: string,
    // logo?
    players: Player[],
    setCategory: (category: string) => void;
    setTeamName: (team_name: string) => void;
    setPlayers: (player: Player) => void;
}

enum ActionKind {
    SET_SIGNUP_CONTEXT = 'SET_SIGNUP_CONTEXT',
    SET_CATEGORY = 'SET_CATEGORY',
    SET_TEAM_NAME = 'SET_TEAM_NAME',
    SET_PLAYERS = 'SET_PLAYERS',
}

type Player = {
    name: string;
    date_of_birth: any;
    phone: any;
    email: any;
    nickname: any;
    instagram_tag: any;
    isCaptain: boolean;
}

type SignupInfo = {
    category: string,
    team_name: string,
    // logo?
    players: Player[],
}

type Action = {
    type: ActionKind,
    payload: any
}

export const SignupContext = createContext<SignupContextType | null>(null);

const signupReducer = (state: SignupInfo, action: Action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionKind.SET_SIGNUP_CONTEXT:
            return payload;
        case ActionKind.SET_CATEGORY:
            return { ...state, category: payload };
        case ActionKind.SET_TEAM_NAME:
            return { ...state, team_name: payload };
        case ActionKind.SET_PLAYERS:
            return { ...state, players: [payload, ...state.players] };
        default:
            return state;
    }
}

const initialState = {
    category: '',
    team_name: '',
    // logo?
    players: [],
}

export const SignupContextProvider = ({ children }: SignupContextProviderProps) => {
    const [signupInfo, dispatch] = useReducer(signupReducer, initialState);

    const setCategory = (category: string) => {
        dispatch({ type: ActionKind.SET_CATEGORY, payload: category });
    }
    const setTeamName = (team_name: string) => {
        dispatch({ type: ActionKind.SET_TEAM_NAME, payload: team_name });
    }
    const setPlayers = (player: Player) => {
        dispatch({ type: ActionKind.SET_PLAYERS, payload: player });
    }

    // useEffect(() => {
    //     // console.log('ciao');
        
    //     let localContext = localStorage.getItem(`signupInfo`);
    //     // console.log(localContext);
    //     let localSignupInfo = localContext ? JSON.parse(localContext) : null;
        
    //     if (localSignupInfo) dispatch({ type: ActionKind.SET_SIGNUP_CONTEXT, payload: localSignupInfo });
    // }, []);

    useEffect(() => {
        // console.log(signupInfo);
        localStorage.setItem(`signupInfo`, JSON.stringify(signupInfo));
    }, [signupInfo]);

    // useEffect(() => {
    //     console.log(signupInfo);
    // }, [signupInfo]);

    return (
        <SignupContext.Provider value={{ ...signupInfo, setCategory, setTeamName, setPlayers }}>
            {children}
        </SignupContext.Provider>
    )
}