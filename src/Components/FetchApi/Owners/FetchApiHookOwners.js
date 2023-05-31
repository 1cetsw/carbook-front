import { useEffect, useState } from "react"

function Owners() {
    const [Owners, setOwners] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(global.config.HostApi+'/owners')
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
                    <tbody>
                        <tr>
                       
                        <th>id</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>

                        </tr>
                        {Owners.map(owner => (
                            <tr>
                                <td key={owner.id}>{owner.id}</td>
                                <td>{owner.name}</td>
                                <td>{owner.surname}</td>
                                <td>{owner.email}</td>
                               
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    )
}

export default Owners
