import React,{ useState, useEffect} from 'react'
import './App.css'
import { purchases } from './data.json'
import { getPoints, getPointsByMonth } from './pointsCalculator'

const App = () => {
    const [ data, setData ] = useState(purchases)
    const [ custPoints, setCustPoints ] = useState({})
    const [ showData, setShowData ] = useState(false)

    useEffect(() => {
        console.log(data[0]?.purchase)
        const obj = {}
        let monthPoints = []
        data.map((el) => {
            const apr = getPointsByMonth(el.purchase, '04')
            const may = getPointsByMonth(el.purchase, '05')
            const jun = getPointsByMonth(el.purchase, '06')
            monthPoints = [apr, may, jun, apr + may + jun]
            obj[el.name] = monthPoints
            monthPoints = []
        })
        setCustPoints(obj)
        console.log(obj)
    }, [data])

    const handleShowData = () => {
        setShowData(true)
        console.log('click')
    }
    
    return (
        <div className="container">
            <h1>Award Points</h1>
            <button onClick={handleShowData} className="button">Show Data</button>
            {showData && (<table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Apr</th>
                        <th>May</th>
                        <th>Jun</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length && data.map((item) => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{custPoints[item.name][0]}</td>
                            <td>{custPoints[item.name][1]}</td>
                            <td>{custPoints[item.name][2]}</td>
                            <td>{custPoints[item.name][3]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>)}
        </div>
    )
}

export default App