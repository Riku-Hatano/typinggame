import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
    console.log("header is rendered!!");
    const [logUser, setLogUser] = useState(null);
    useEffect(() => {
        if(sessionStorage.getItem("logUser") !== undefined && sessionStorage.getItem("logUser") !== null) {
            setLogUser(JSON.parse(sessionStorage.getItem("logUser") as string));
            console.log(logUser);
            console.log("header is rendered by fetching data form sessionstorage!!");
        }
    }, [])
    const logout = () => {
        sessionStorage.clear();
    }

    return (
        <>
            <nav>
                <ul>
                    { logUser ? null : <li><Link href="/login">login</Link></li> }
                    { logUser ? null : <li><Link href="/register">register</Link></li> }
                    { logUser ? <li><Link href="/login" onClick={logout}>logout</Link></li> : null }
                    { logUser ? <li><Link href="/">home</Link></li>: null }
                    { logUser ? <li><Link href="/game">game</Link></li>: null }
                    { logUser ? <li><Link href="/user">user</Link></li>: null }
                </ul>
            </nav>
        </>
    )
}

export default Header;