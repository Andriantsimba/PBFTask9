import React from "react";

const Post = (props) =>{
    return(
        <div className="artikel">
            <div className="gambar-artikel">
            <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel" />
            </div>
            <div className="konten-artikel">
                <div className="row">
                    <div className="col-sm">
                        <div className="judul-artikel">NIM: {props.nim}</div>
                        <p className="isi-artikel"> Name: {props.nama} </p>
                        <p className="isi-artikel"> Alamat: {props.alamat} </p>
                        <p className="isi-artikel">No.Hp: {props.hp} </p>
                        <p className="isi-artikel">Angkatan: {props.angkatan} </p>
                        <p className="isi-artikel">Status: {props.status} </p>

                        <button className="btn btn-sm btn-danger" onClick={()=>props.hapusMhs(props.idMhs)}>Delete</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post;