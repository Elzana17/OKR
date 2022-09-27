import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext({});

 const DataProvider = (props: any ) => {

    const [surObjectiveId, setSurObjectiveId] = useState(0);


   
return (
    <DataContext.Provider value={{
        setSurObjectiveId,
        surObjectiveId
    }}>
        {props.children}
    </DataContext.Provider>
)
}

export default DataProvider;
