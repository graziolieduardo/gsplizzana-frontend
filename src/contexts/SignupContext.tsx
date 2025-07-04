import { createContext, useReducer } from "react";

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
    resetContext: () => void;
    resetPlayers: () => void;
}

enum ActionKind {
    SET_SIGNUP_CONTEXT = 'SET_SIGNUP_CONTEXT',
    SET_CATEGORY = 'SET_CATEGORY',
    SET_TEAM_NAME = 'SET_TEAM_NAME',
    SET_PLAYERS = 'SET_PLAYERS',
    REMOVE_PLAYER = 'REMOVE_PLAYER',
    UPDATE_PLAYER = 'UPDATE_PLAYER',
    SET_TOKEN = 'SET_TOKEN',
    RESET_PLAYERS = 'RESET_PLAYERS',
}

type Player = {
    name: string;
    lastname: string;
    date_of_birth: any;
    phone: any;
    email: any;
    nickname: any;
    instagram: any;
    isCaptain: boolean;
    isViceCaptain: boolean;
    participate: boolean;
    shirt: string;
    gadget: string;
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
        case ActionKind.RESET_PLAYERS:
            return { ...state, players: [] };
        case ActionKind.UPDATE_PLAYER:
            return { ...state, players: payload };
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

    const resetPlayers = () => {
        dispatch({ type: ActionKind.RESET_PLAYERS, payload: [] });
    }

    const removePlayer = (index: any) => {
        dispatch({ type: ActionKind.REMOVE_PLAYER, payload: index });
    }

    const resetContext = () => {
        dispatch({ type: ActionKind.SET_SIGNUP_CONTEXT, payload: initialState });
    }

    const updatePlayer = (params: any) => {
        let filtered = signupInfo.players.filter((player: any, index: any) => { return params.index !== index });

        filtered.splice(params.index, 0, params.player);
        dispatch({ type: ActionKind.UPDATE_PLAYER, payload: filtered });
    }


    // useEffect(() => {
    //     console.log(signupInfo);
    // }, [signupInfo]);

    return (
        <SignupContext.Provider value={{ ...signupInfo, setCategory, setTeamName, setPlayers, removePlayer, updatePlayer, setToken, resetContext, resetPlayers }}>
            {children}
        </SignupContext.Provider>
    )
}