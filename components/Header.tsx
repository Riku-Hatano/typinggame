import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
    const [logUser, setLogUser] = useState(null);
    const router = useRouter();
    console.log(router.pathname);
    
    useEffect(() => {
        if(sessionStorage.getItem("logUser") !== undefined && sessionStorage.getItem("logUser") !== null) {
            setLogUser(JSON.parse(sessionStorage.getItem("logUser") as string));
        }
    }, [])
    useEffect(() => {
        if(sessionStorage.getItem("logUser") !== undefined && sessionStorage.getItem("logUser") !== null) {
            setLogUser(JSON.parse(sessionStorage.getItem("logUser") as string));
        } else {
            setLogUser(null);
        }
        console.log("pathname was changed")
    }, [router.pathname])
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