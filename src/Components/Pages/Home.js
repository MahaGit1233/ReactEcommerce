import React from "react";
import { Button, Table } from "react-bootstrap";

const TourDetailsArr = [
    { id: 1, date: "JUL16", place: "DETROIT, MI", Arena: "DTE ENERGY MUSIC THEATRE" },
    { id: 2, date: "JUL19", place: "TORONTO,ON", Arena: "BUDWEISER STAGE" },
    { id: 3, date: "JUL22", place: "BRISTOW, VA", Arena: "JIGGY LUBE LIVE" },
    { id: 4, date: "JUL29", place: "PHOENIX, AZ", Arena: "AK-CHIN PAVILION" },
    { id: 5, date: "AUG 2", place: "LAS VEGAS, NV", Arena: "T-MOBILE ARENA" },
    { id: 6, date: "AUG 7", place: "CONCORD, CA", Arena: "CONCORD PAVILION" },
];

const Home = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center", fontFamily: "algerian", marginTop: "1.5rem", marginBottom:"2rem"}}>TOURS</h1>
            {TourDetailsArr.map((tour) => (
                <Table hover style={{borderBottom:"1px solid black", width:"50%", marginLeft:"30%", tableLayout:"fixed", textAlign:"left", fontFamily:"Bahnschrift Light"}}>
                    <tbody>
                        <tr>
                            <td style={{width:"15%", fontWeight:"600"}}>{tour.date}</td>
                            <td style={{width:"25%"}}>{tour.place}</td>
                            <td style={{width:"35%"}}>{tour.Arena}</td>
                            <td style={{textAlign:"center"}}><Button style={{backgroundColor:"#56CCF2", border:"none"}}>BUY TICKETS</Button></td>
                        </tr>
                    </tbody>
                </Table>
            ))}
        </div>
    )
}

export default Home;