import { ChangeEvent, SyntheticEvent, useState } from "react";
import axios from "axios";

const initialVal = {
    name: "",
    pw: ""
}
const Register = () => {
    const [inputVal, setInputVal] = useState(initialVal);

    const changeInput = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputVal({
            ...inputVal,
            [e.target.name]: e.target.value
        });
    }
    const submit = (e: SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setInputVal({
            ...inputVal,
            name: "",
            pw: ""
        });
        const axioscon = axios.create();
        axioscon.post("../api/register", inputVal).then(
            (res) => {
                console.log(res.data);
            },
            (rej) => {
                console.log(rej);
            }
        )

    }
    const get = (): void  => {
        axios.create().get("../api/register").then(
            (res) => {
                console.log(res.data);
            },
            (rej) => {
                console.log(rej);
            }
        )
    }
    const testGet = (): void => {
        axios.create().get("https://typinggame-riku-hatano.vercel.app/api/test").then(
            (res) => {
                console.log(res);
            },
            (rej) => {
                console.log(rej);
            }
        )
    }
    const testPost = (): void => {
        axios.create().post("../api/test", inputVal).then(
            (res) => {
                console.log(res);
            },
            (rej) => {
                console.log(rej);
            }
        )
    }

    return (
        <>
            <h1>register</h1>
            <form onSubmit={submit}>
                <input type="text" name="name" placeholder="name" onChange={changeInput} value={inputVal.name}/>
                <input type="text" name="pw" placeholder="pw" onChange={changeInput} value={inputVal.pw}/>
                <button type="submit">submit</button>
            </form>
            <button onClick={get}>show users</button>
            <button onClick={testGet}>test get</button>
            <button onClick={testPost}> test post</button>
        </>
    )
}

export default Register;