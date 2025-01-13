import { useState } from "react";

const Hello = () => {
    /**VARIABLES */
    const [count, setCount] = useState(0);

    /**FUNCTIONS */
    const increment = () => {
        setCount(count + 1)
    }

    /**COMPONENT */
    return (
        <div>
            <div>Hello! Next JS Here!</div>
            <button onClick={increment}>The new value is {count}</button>
        </div>
    )
}

export default Hello;