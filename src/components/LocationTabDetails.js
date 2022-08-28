//Location Page 2 details tab
import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllMachines } from '../store/actions/machineActions';


const LocationTabDetails = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    
    //data from redux

    // const { machines, loading1 } = useSelector((state) => state.machine);
    // useEffect(() => {
    //     if (machines.length == 0) {
    //         dispatch(
    //             getAllMachines({
    //                 company_code: user?.company_code,
    //             })
    //         );
    //     }
    // }, []);
    // console.log(machines)

    //dummy data
    
    const [machines,setMachines] =useState([
        {
            "_id": "0001",
            "_rev": "97-f5ae138b3f7d9a9d6e1488713dd4e2ed",
            "location": "36,42",
            "machine_id": 1,
            "company_code": 4236,
            "created_at": 1648135912,
            "modified_at": 1655103601,
            "brands": [
                {
                    "name": "HAIR GROWTH",
                    "litre_price": "4236",
                    "bar_code": "5634766512313",
                    "alert": "80",
                    "alert_volume": "2000"
                },
                {
                    "name": "HAIR VOLUME",
                    "litre_price": "3672",
                    "bar_code": "5634766512320",
                    "alert": "80",
                    "alert_volume": "2000"
                }
            ],
            "credentials": {
                "company_code": "4236",
                "hostname": "207.174.214.183",
                "username": "datavie2_developer",
                "password": "Buffalo@123",
                "database": "datavie2_conatural",
                "last_pull": 1655103600
            }
        },
        {
            "_id": "0002",
            "_rev": "12-34a1bd6d110fa63b6ca0b632fc2ee210",
            "location": "36,42",
            "machine_id": 1,
            "company_code": 4236,
            "created_at": 1648135912,
            "modified_at": 1655103600,
            "brands": [
                {
                    "name": "HAIR GROWTH",
                    "litre_price": "4236",
                    "bar_code": "5634766512313",
                    "alert": "80",
                    "alert_volume": "2000"
                },
                {
                    "name": "HAIR VOLUME",
                    "litre_price": "3672",
                    "bar_code": "5634766512320",
                    "alert": "80",
                    "alert_volume": "2000"
                }
            ],
            "credentials": {
                "company_code": "4236",
                "hostname": "207.174.214.183",
                "username": "datavie2_developer",
                "password": "Buffalo@123",
                "database": "datavie2_conatural",
                "last_pull": 1655103600
            }
        }
    ])
    
    return (
        <div className='row align-items-center'>
            <div className='col-lg-3'>
            </div>
            <div className='col-lg-6'>
                <img
                    src={require('../assets/images/dawaam/green-machine.png')}
                    alt=''
                />
                <h3
                    className='card-title'
                    style={{
                        textDecoration: 'none',
                    }}
                >
                    Advance Machine Details
                </h3>
            </div>
            <div className='col-lg-3'>
                <Link to='/locations' className='btn btn-danger'>
                    {' '}
                    Back{' '}
                </Link>
            </div>
            <br />       
            <br />
            <div className="table-responsive mb-5">
                    <table className="locationsTable mb-0">
                            <thead>
                                <tr className="tableRowHeader">
                                    <th scope="col">Machine IDs</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Brands</th>
                                    <th scope="col">Health</th>
                                    {/* <th scope="col">Actions</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {machines.map((item, index) => (
                                    <tr tr className="tableRows" key={index}>
                                        <th id="machine_id" scope="row">
                                            <Link to={{ pathname: `/machine_details/${item._id}?location=true` }}>
                                                {item._id}
                                            </Link>
                                        </th>
                                        <td>{item?.location || "NA"}</td>
                                        <td>
                                            {item?.brands
                                                ?.map((item) => item.name)
                                                .flat()
                                                .toString() || "NA"}
                                        </td>
                                        <td>
                                            {item?.status || "NA"} <br />
                                            <span>
                                                <img
                                                    src="../assets/images/dawaam/Ellipse 6.png"
                                                    alt=""
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    src="../assets/images/dawaam/Ellipse 7.png"
                                                    alt=""
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    src="../assets/images/dawaam/Ellipse 8.png"
                                                    alt=""
                                                />
                                            </span>
                                        </td>

                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

            
            
        </div>
    );
};

export default LocationTabDetails;
