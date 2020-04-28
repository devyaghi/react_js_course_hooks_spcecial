import React from "react";
import TestAPIFunction from "./TestAPIFunction";

export default function DrawData() {

    const data=TestAPIFunction();

    return(
        data.map(l=>
            <div key={l.id}>{l.title}</div>
        )
    )
}