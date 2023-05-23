import { useEffect, useState } from "react"

function Owners() {
    const [Owners, setOwners] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch("https://carbook-production.up.railway.app/owners")
            .then(response => response.json())
            .then(json => setOwners(json))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="App">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <h1>Owners</h1>
                    <table border={1}>
                        <tr>
                           
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>

                        </tr>
                        {Owners.map(owner => (
                            <tr>
                                <td>{owner.name}</td>
                                <td>{owner.surname}</td>
                                <td>{owner.email}</td>
                               
                            </tr>
                        ))}
                    </table>
                </>
            )}
        </div>
    )
}

export default Owners
