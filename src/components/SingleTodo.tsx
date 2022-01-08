import React from "react";

function SingleTodo({todoName}:{todoName: string}) {
    return(
        <div>
            <p>{todoName}</p>
        </div>
    )
}

export default SingleTodo