import { createContext, useState } from "react";
export const Details = createContext();

const Context = ({children}) => {
    const [name, setName]=useState();
    const [loginUser, setLoginUser]=useState({});
    const [userName, setUserName]=useState();
    const [appntUser, setAppntUser]=useState();
    const [userEmail, setUserEmail] =useState();
    const [apntName, setApntName] =useState();
    const [apntDate, setApntDate] =useState();
    const [apntTime, setApntTime] =useState();
    const [activity, setActivity] =useState([]);
    return (
        <Details.Provider value={{name, setName, loginUser, setLoginUser, userName, setUserName, 
            appntUser, setAppntUser, userEmail, setUserEmail,
            apntName, setApntName,
            apntDate, setApntDate,
            apntTime, setApntTime,
            activity, setActivity
            
}}>
            {children}
        </Details.Provider>
    )
}
export default Context;
