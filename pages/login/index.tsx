import { ChangeEvent, useState } from "react";
import axios from "axios";
import { SyntheticEvent } from "react";
import { useRouter } from "next/router";

const initialVal = {
    name: "",
    pw: "",
}
const Login = () => {
    const [inputVal, setInputVal] = useState(initialVal);
    const router = useRouter();
    const login = (e: SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault();
        axios.create().post("../api/login", inputVal).then(
            (res) => {
                console.log(res.data);
                if(res.data.message.length !== 0) {
                    console.log(res.data.message)
                    sessionStorage.setItem("logUser", JSON.stringify(res.data.message));
                    router.push("/user");
                } else {
                    console.log("failed to login " + res.data.message);
                }
            },
            (rej) => {
                console.log(rej);
            }
        )
    }
    const inputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputVal({
            ...inputVal,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <h1>login</h1>
            <form onSubmit={login}>
                <input type="text" placeholder="user name" name="name" onChange={inputChange} value={inputVal.name}/>
                <input type="password" placeholder="pasword" name="pw" onChange={inputChange} value={inputVal.pw}/>
                <button type="submit">login</button>
            </form>
        </>
    )
}

export default Login;