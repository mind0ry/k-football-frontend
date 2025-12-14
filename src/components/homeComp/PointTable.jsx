import axios from "axios";
import { useState, useEffect } from "react";

function PointTable() {

    const [point, setPoint] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/main/point_table")
        .then((res)=> {
            console.log(res.data);
            setPoint(res.data)
        })
        .catch((err) => console.log(err));
    }, [])

    return (
        <div className="col-lg-6">
            <div className="widget-next-match">
            <table className="table custom-table">
                <thead>
                <tr>
                    <th>순위</th>
                    <th>팀</th>
                    <th>승</th>
                    <th>무</th>
                    <th>패</th>
                    <th>승점</th>
                </tr>
                </thead>

                <tbody>
                {point.map((vo, index) => (  
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>
                        <img src={vo.logo_image} style={{width:25, marginRight:10}}></img>
                        <strong className="text-white">{vo.team_name}</strong>
                        </td>
                        <td>{vo.w}</td>
                        <td>{vo.d}</td>
                        <td>{vo.l}</td>
                        <td>{vo.pts}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default PointTable;