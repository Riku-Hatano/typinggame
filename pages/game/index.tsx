import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Game = () => {
    const [logUser, setLogUSer] = useState(null);
    const router = useRouter();
    useEffect(() => {
        if(sessionStorage.getItem("logUser") !== undefined && sessionStorage.getItem("logUser") !== null) {
            setLogUSer(JSON.parse(sessionStorage.getItem("logUser") as any));
        } else {
            router.push("/login");
        }
    }, [])
    return (
        <>
            <h1>game</h1>
        </>
    )
}

export default Game;