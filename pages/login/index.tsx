import { ChangeEvent, useState } from "react";
import axios from "axios";
import { SyntheticEvent } from "react";
import { useRouter } from "next/router";

const initialVal = {
    tittle: "",
    slug: "",
    content: ""
}
const Login = () => {
    const [inputVal, setInputVal] = useState(initialVal);
    const router = useRouter();
    const login = (e: SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault();
        axios.create().post("../api/lib/contentful/getContentful", inputVal).then(
            // (res) => {
            //     console.log(res.data);
            //     if(res.data.message.length !== 0) {
            //         console.log(res.data.message)
            //         sessionStorage.setItem("logUser", JSON.stringify(res.data.message));
            //         router.push("/user");
            //     } else {
            //         console.log("failed to login " + res.data.message);
            //     }
            // },
            // (rej) => {
            //     console.log(rej);
            // }
            (res) => {
                console.log(res.data);
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
    const getContentful = (): void => {
        axios.create().get("./api/lib/contentful/getContentful").then(
          (res) => {
            console.log(res.data);
          },
          (rej) => {
            console.log(rej);
          }
        )
      }
    return (
        <>
            <h1>login</h1>
            <form onSubmit={login}>
                <input type="text" placeholder="tittle" name="tittle" onChange={inputChange} value={inputVal.tittle}/>
                <input type="text" placeholder="slug" name="slug" onChange={inputChange} value={inputVal.slug}/>
                <input type="text" placeholder="content" name="content" onChange={inputChange} value={inputVal.content}/>
                <button type="submit">submit</button>
            </form>
            <button onClick={getContentful}>get contentful from login page</button>
        </>
    )
}

export default Login;