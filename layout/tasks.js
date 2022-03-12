import Head from "next/head"
import {useEffect, useState} from 'react'
import Menu from "../components/tasks/menu"
import List from "../components/tasks/list"
import Card from "../components/tasks/card"
import axios from "axios"

export default function Tasks() {

    const [task, setTask] = useState([])
    
    useEffect(() => {

        let userEmail = localStorage.getItem('email')

        axios.get('http://localhost:3001/tarefa', {
            params: {
                userEmail: userEmail
            }
        })
        .then((response) => {
            setTask(response.data)
        })
        .catch((response) => {
            console.log(response)
        })
    }, [])

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu/>
            <List>
                {task.map((dados, key) => (
                    <Card
                    key={key}
                    label={dados.titulo}
                    description={dados.tarefa}
                    idTask={dados.id}/>
                ))}
            </List>
        </>
    )
}