import { useEffect, useState } from "react";



function Workshops() {
    
    const [Workshops, setWorkshops] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(global.config.HostApi+'/workshops')
            .then(response => response.json())
            .then(json => setWorkshops(json))
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
                    <h1>Workshops</h1>
                    <table border={1}>
                        <tr>
                           
                            <th>WorkshopName</th>
                            <th>WorkshopOwner</th>
                            <th>WorkshopAddress</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                        {Workshops.map(workshop => (
                            <tr>
                                <td>{workshop.workshopName}</td>
                                <td>{workshop.workshopOwner}</td>
                                <td>{workshop.workshopAddress}</td>
                                <td>{workshop.phone}</td>
                                <td>{workshop.email}</td>
                            </tr>
                        ))}
                    </table>
                </>
            )}
        </div>
    )
}

export default Workshops
