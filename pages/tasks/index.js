import Head from "next/head";
import { useRouter } from "next/router";

export default function Main(){

    const Router = useRouter()

    const ValidateUser = () => {
        let params = Router.query
    }
    ValidateUser()
    return (
        <>
            <h1>Login realizado com sucesso!</h1>
        </>
    )
}