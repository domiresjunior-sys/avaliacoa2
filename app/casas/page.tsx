export default async function Casas() {

    const response = await fetch("https://6932104711a8738467d16909.mockapi.io/id");

    const listaCasas = await response.json();

    console.log(listaCasas);

    const rows = [];
    for (const casa of listaCasas) {
        rows.push(
            <tr key={casa.id}>
                <td>{casa.id}</td>
                <td>{casa.endereco}</td>
                <td>{casa.anoConstrucao}</td>
            </tr>
        );
    }

    return (
        <div>
            <br />
            <h1>Lista de Casas</h1>

            <table border={3}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Endereço</th>
                        <th>Ano de Construção</th>
                    </tr>
                </thead>

                <tbody>
                    {rows}
                </tbody>

            </table>
        </div>
    );
}
