
import { useContext } from "react";
import { SignupContext } from "../contexts/SignupContext";

export const useSignupContext = () => {
    const context = useContext(SignupContext);

    if(!context) {
        throw Error('useSignupContext must be inside auth context provider');
    }

    return context;
}