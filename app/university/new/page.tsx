"use client"

export default function NewCasa() {

    async function saveCasa() {
        console.log("Acessou")

        const endereco = document.getElementById("endereco") as HTMLInputElement;
        const anoConstrucao = document.getElementById("anoConstrucao") as HTMLInputElement;

        const casa = {
            endereco: endereco.value,
            anoConstrucao: anoConstrucao.value
        }

        await fetch(`https://6932104711a8738467d16909.mockapi.io/id`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(casa)
            }
        )
    }

    return (
        <div>
            <br />
            <h1>Cadastrar Casa</h1>
            <br />

            <input type="text" id="endereco" placeholder="Digite o endereço da casa" />
            <br />

            <input type="number" id="anoConstrucao" placeholder="Ano da construção" />
            <br />

            <button onClick={saveCasa}>Salvar</button>
        </div>
    )
}
