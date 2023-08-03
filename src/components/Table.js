import React from "react";

export default function Table({ogrenciler}) {
    return(
        <div className="container-fluid">
            <table className="table table-responsive table-hovered">
                <thead>
                    <th>Id</th>
                    <th>Ad</th>
                    <th>Soyad</th>
                    <th>Sınıf</th>
                </thead>
                <tbody>
                    {
                        ogrenciler.map((ogrenci, i) =>{
                            return <tr>
                                <td>{ogrenci.id}</td>
                                <td>{ogrenci.ad}</td>
                                <td>{ogrenci.soyad}</td>
                                <td>{ogrenci.sinif}</td>
                            </tr>
                        })    
                                    
                    }
                </tbody>
            </table>
        </div>
    )
}

