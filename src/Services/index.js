import GetApi from './Get'
import PostApi from './Post'
import DeleteApi from './Delete'

const getNewMhs = () => GetApi('mahasiswa?_sort=id&_order=desc');

const postnewMhs = (mhsYgDikirim) => PostApi('mahasiswa', mhsYgDikirim);

const deleteMhs = (mhsygDihapus) => DeleteApi('mahasiswa',mhsygDihapus);


const API ={
    getNewMhs,
    postnewMhs,
    deleteMhs
}

export default API;