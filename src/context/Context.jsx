import { createContext, useState } from "react";
import { runSpecial } from "../config/gemini";
import { DEFAULT_KEYWORDS } from "../utils/hashtagsConsts";

export const Context = createContext();

const ContextProvider = (props) => {

    const [specialLoading, setSpecialLoading] = useState(false);
    const [specialResult, setSpecialResult] = useState(DEFAULT_KEYWORDS);
    const [specialInput, setSpecialInput] = useState('')

    const [country, setCountry] = useState("India")
    const [industry, setIndustry] = useState("Digital Marketing")

    const generateSpecialHashtags = async () => {
        setSpecialLoading(true)
        const specialResponse = await runSpecial(country, industry, specialInput);
        setSpecialResult(specialResponse)
        setSpecialLoading(false)
        setSpecialInput('')
    }

    const contextValue = {
        specialLoading, setSpecialLoading,
        specialResult, setSpecialResult,
        specialInput, setSpecialInput,
        country, setCountry,
        industry, setIndustry,
        generateSpecialHashtags,
    };
    return (
        <Context.Provider value={contextValue}>{props.children}</Context.Provider>
    );
};

export default ContextProvider;
