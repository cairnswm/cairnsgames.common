import { useState } from "react"

const useExample = () => {
    const [value, setValue] = useState();

    return { value, setValue };
}

export default useExample;