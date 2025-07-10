import React from "react";

function Links (props){
    return(
        <>
            <h3>Links</h3>
                <a href={props.github} target="_blank" rel="noopener noreferrer">
                    {props.github
                }</a>

                <br />

                <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
                    {props.linkedin}
                </a>
        </>
    )
}

export default Links       