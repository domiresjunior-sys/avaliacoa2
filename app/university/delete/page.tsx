"use client"

import { useSearchParams } from "next/navigation"

export default function DeleteCasa() {

    const id = useSearchParams().get('id');

    async function deleteCasa() {
        console.log("Acessou")
        await fetch(`https://6932104711a8738467d16909.mockapi.io/id/${id}`,
            {
                method: "DELETE"
            }
        )
    }

    return (
        <div>
            <h1>Confirmar Exclusão?</h1>
            <button onClick={deleteCasa}>Confirmar</button>
        </div>
    )
}
