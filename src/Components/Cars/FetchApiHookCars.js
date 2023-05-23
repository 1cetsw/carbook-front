import { useEffect, useState } from "react"

function Cars() {
    const [Cars, setCars] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch("https://carbook-production.up.railway.app/cars")
            .then(response => response.json())
            .then(json => setCars(json))
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
                    <h1>Cars</h1>
                    <table border={1}>
                        <tr>
                           
                            <th>Brand</th>
                            <th>Model</th>
                            <th>ProductionDate</th>

                        </tr>
                        {Cars.map(car => (
                            <tr>
                                <td>{car.brand}</td>
                                <td>{car.model}</td>
                                <td>{car.productionDate}</td>
                            </tr>
                        ))}
                    </table>
                </>
            )}
        </div>
    )
}

export default Cars
