import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Tasks from "../../layout/tasks"

export default function Main(){

    const Router = useRouter()
    const [user, setUser] = useState([])

    useEffect(() => {
        const email = localStorage.getItem('email')
        const senha = localStorage.getItem('senha')

        setUser([email, senha])

       const validate = function validate() {
            if(email == '' || email == null || !email && senha == '' || senha == undefined || !senha ) {
                Router.push('/')
            }
        }
        validate()
    }, [])

    return (
        <Tasks/>
    )
}