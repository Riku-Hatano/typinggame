import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const User = () => {
    const [logUser, setLogUser] = useState(null);
    const router = useRouter();
    useEffect(() => {
        if(sessionStorage.getItem("logUser") !== undefined && sessionStorage.getItem("logUser") !== null) {
            setLogUser(JSON.parse(sessionStorage.getItem("logUser") as any));
            console.log(JSON.parse(sessionStorage.getItem("logUser") as any));
        } else {
            router.push("/login");
        }
    }, [])
    return (
        <>
            <h1>user</h1>
            <p>{JSON.stringify(logUser)}</p>
        </>
    )
}

export default User;