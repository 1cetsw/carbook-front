import { useEffect, useState } from "react"

function Cars() {
    const [Cars, setCars] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(global.config.HostApi+'/cars')
            .then(response => response.json())
            .then(json => setCars(json))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div >
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <h1>Cars</h1>
                    <table border={1}>
                       
                           
                            <th>Brand</th>
                            <th>Model</th>
                            <th>ProductionDate</th>

                        
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
