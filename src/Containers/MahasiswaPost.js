import React, {Component} from 'react';
import API from '../Services';
import Post from './Post';
import './Mahasiswa.css';
import '../bootstrap.min.css'

class MahasiswaPost extends Component{
    state ={
        listMahasiswa:[],
        insertMhs:{
            id:1,
            NIM:1,
            nama:"",
            alamat: "",
            hp: "",
            angkatan: 1,
            status: ""

        }
    }

    GetDatafromApi(){
        API.getNewMhs()
        .then(result =>{
            this.setState({
                listMahasiswa: result
            })
        })
    }

    componentDidMount(){
        this.GetDatafromApi();
    }

    handleHapusMhs = (data) =>{
        API.deleteMhs(data).then((response) =>{
            this.GetDatafromApi();
        })
    }

    handleTambahMhs = (event) =>{
        let ForminsertMhs ={...this.state.insertMhs};
        let timestamp = new Date().getTime();
        ForminsertMhs['id'] = timestamp;
        ForminsertMhs[event.target.name] = event.target.value;
        this.setState({
            insertMhs: ForminsertMhs
        });
    }

    handleSaveBtn = () => {
        API.postnewMhs(this.state.insertMhs)
        .then((response) =>{
            this.GetDatafromApi();
        })
    }

    render(){
        return(
            <div className='post-Mahasiswa'>
                <div className="form bp-2 border-bottom">
                <h2>INPUT NEW STUDENTS</h2>
                    <div className="form-group row">
                        <label htmlFor='NIM' className="col-sm-2 col-form-label">Nim: </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="NIM" name="NIM" 
                            onChange={this.handleTambahMhs}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor='nama' className="col-sm-2 col-form-label">Nama: </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" 
                            onChange={this.handleTambahMhs}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor='alamat' className="col-sm-2 col-form-label">Alamat: </label>
                        <div className="col-sm-10">
                            <textarea type="text" className="form-control" id="alamat" name="alamat" rows="3" 
                            onChange={this.handleTambahMhs}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor='hp' className="col-sm-2 col-form-label">HP: </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="hp" name="hp" 
                            onChange={this.handleTambahMhs}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor='angkatan' className="col-sm-2 col-form-label">Angkatan: </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="angkatan" name="angkatan" 
                            onChange={this.handleTambahMhs}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor='status' className="col-sm-2 col-form-label">Status: </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="status" name="status" 
                            onChange={this.handleTambahMhs}/>
                        </div>
                    </div>
                    <button type="submit" className="btn-sm btn-primary" onClick={this.handleSaveBtn}>Save</button>
                </div>
                <div className="col-sm">
                <h2>list Mahasiswa</h2>
                {
                    this.state.listMahasiswa.map(mahasiswa =>{
                        return <Post 
                                     key={mahasiswa.id} 
                                     nim={mahasiswa.NIM}
                                     nama={mahasiswa.nama}
                                     alamat={mahasiswa.alamat}
                                     hp={mahasiswa.hp}
                                     angkatan={mahasiswa.angkatan}
                                     status={mahasiswa.status} 
                                     idMhs={mahasiswa.id}
                                     hapusMhs={this.handleHapusMhs}/>
                    })
                }
                </div>
            </div>
        )
    }
}
export default MahasiswaPost;