// import { Inter } from '@next/font/google'
// const inter = Inter({ subsets: ['latin'] })
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { setSourceMapRange } from "typescript";

export default function Home() {
  const [logUser, setLogUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if(sessionStorage.getItem("logUser") !== undefined && sessionStorage.getItem("logUser") !== null) {
      setLogUser(JSON.parse(sessionStorage.getItem("logUser") as any));
    } else {
      router.push("/login");
    }
  }, [])
  return (
    <>
      <h1>home</h1>
    </>
  )
}
