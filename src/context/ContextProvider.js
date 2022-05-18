import React, {useState} from "react"
import responseContext from "./ResponseContext";

export default function ContextProvider(props){
    const [responses, setResponses] = useState([])

    const dispatchUserEvent = (actionType, payload, index) =>{

        switch(actionType){
            case 'ADD':
                setResponses(prevState=> [payload, ...prevState])
                
                return;
            case 'DELETE':
                if (index > -1) {
                    setResponses([
                    ...responses.slice(0, index),
                    ...responses.slice(index + 1, responses.length)])
                  }
                return;

            default:
                return;

        }
    }
    return(
        <responseContext.Provider value={{
            responses, dispatchUserEvent
        }}>
            {props.children}
        </responseContext.Provider>
    )
}