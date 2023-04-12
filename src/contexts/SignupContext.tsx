import { createContext, useEffect, useReducer } from "react";

type SignupContextProviderProps = {
    children: React.ReactNode;
}

type SignupContextType = {
    category: string,
    team_name: string,
    token: string,
    // logo?
    players: Player[],
    setCategory: (category: string) => void;
    setTeamName: (team_name: string) => void;
    setPlayers: (player: Player) => void;
    removePlayer: (index: any) => void;
    updatePlayer: (params: any) => void;
    setToken: (token: any) => void;
}

enum ActionKind {
    SET_SIGNUP_CONTEXT = 'SET_SIGNUP_CONTEXT',
    SET_CATEGORY = 'SET_CATEGORY',
    SET_TEAM_NAME = 'SET_TEAM_NAME',
    SET_PLAYERS = 'SET_PLAYERS',
    REMOVE_PLAYER = 'REMOVE_PLAYER',
    UPDATE_PLAYER = 'UPDATE_PLAYER',
    SET_TOKEN = 'SET_TOKEN',
}

type Player = {
    name: string;
    lastname: string;
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
    token: string,
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
        case ActionKind.SET_TOKEN:
            return { ...state, token: payload };
        case ActionKind.SET_PLAYERS:
            return { ...state, players: [payload, ...state.players] };
        case ActionKind.REMOVE_PLAYER:
            return { ...state, players: state.players.filter((player, index) => payload !== index) };
        case ActionKind.UPDATE_PLAYER:
            return { ...state, players: [payload.player, ...state.players.filter((player, index) => payload.index !== index)] };
        default:
            return state;
    }
}

const initialState = {
    category: '',
    team_name: '',
    token: '',
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

    const setToken = (token: string) => {
        dispatch({ type: ActionKind.SET_TOKEN, payload: token });
    }

    const setPlayers = (player: Player) => {
        dispatch({ type: ActionKind.SET_PLAYERS, payload: player });
    }

    const removePlayer = (index: any) => {
        dispatch({ type: ActionKind.REMOVE_PLAYER, payload: index });
    }

    const updatePlayer = (params: any) => {
        dispatch({ type: ActionKind.UPDATE_PLAYER, payload: params });
    }


    useEffect(() => {
        console.log(signupInfo);
    }, [signupInfo]);

    return (
        <SignupContext.Provider value={{ ...signupInfo, setCategory, setTeamName, setPlayers, removePlayer, updatePlayer, setToken }}>
            {children}
        </SignupContext.Provider>
    )
}