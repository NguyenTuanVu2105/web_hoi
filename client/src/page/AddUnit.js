import React, {useState , useContext, useEffect} from 'react'
import HomepageContext from "../context/HomepageContext";
// import {AddUnitChild} from '../Component/AddUnitChild'
import '../css/AddUnit.css'
import { getUser, checkAuth} from '../api/auth/auth'
import { getClub, editClub } from '../api/base/club'
import { useParams } from 'react-router-dom';

const AddUnit = () => {
    let { madoi } = useParams()
    const [changeInput, setchangeInput] = useState(true)
    // const [changeButton, setchangeButton] = useState(false)
    const [club, setClub] = useState([])
    const {nameMap, setNameMap} = useContext(HomepageContext)

    const fetchData = async () => {
        const result = await getClub(madoi)
        if (result.data.success) {
            setClub(result.data.data)
        }
    }

    const roles = getUser().then((value) => {
        if (checkAuth()) {
            var edit = document.getElementById('roleedit')
            var save = document.getElementById('rolesave')
            if (value.role === 'member') {
                edit.style.display='none'
                save.style.display='none'
            } else {
                edit.style.display='block'
                save.style.display='block'
            }
        }
    })

    useEffect(() => {
        fetchData()
        setNameMap({
            ['/']: 'Trang chủ',
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
            ['/searchUnit']:'Hồ sơ đơn vị',
            ['/AddUnit']: 'Hồ sơ đơn vị(Đội)'
        })
    }, [])
    const handleUpdate = async () => {
        const {success, data} = await editClub({})
        if (success) {
            notification['success']({
              message: 'Cập nhật thông tin đơn vị thành công!',
            })
          }
          else {
            notification['error']({
              message: 'Cập nhật thông tin đơn vị thất bại!',
            })
          }
        setchangeInput(true)
    }
    // const handleCa = ()=>{
    //     window.confirm('Bạn có chắc muốn Hủy thay đổi!');
    //     setchangeInput(true)
    // }
    // const handleDe = ()=>{
    //     window.confirm('Bạn có chắc muốn xóa!');
    // }
    return (
        <div className = "para">
            <div className="ButtonForMobileAdd">
                <button className="buttonDisable" id='roleedit' onClick={() => setchangeInput(false)&&roles}>Sửa</button>                
                {/* <button className="buttonDisable" id='roledelete' onClick={() => handleDe()&&roles} disabled={changeButton}>Xóa</button> */}
            </div>
                <div>
                    <span className="spanLabel">Đơn vị:</span>
                    <input type="text" className="inputDisable" style={{width:"80%"}} defaultValue={club.Tendoi} onChange={(e) => setIdForget(e.target.value)} disabled={changeInput} />
                </div>
                <div>
                    <span className="spanLabel">Mã đơn vị:</span>
                    <input type="text" className="inputDisable" defaultValue={club.Madoi} onChange={(e) => setIdForget(e.target.value)} disabled={changeInput} />
                </div>
                <div>
                    <span className="spanLabel">Địa chỉ:</span>
                    <input type="text" className="inputDisable" defaultValue={club.Diachi} onChange={(e) => setIdForget(e.target.value)} disabled={changeInput} />
                </div>
                <div>
                    <span className="spanLabel">Đơn vị trực thuộc quản lý:</span>
                    <input type="text" className="inputDisable" defaultValue={club.DonviQL} onChange={(e) => setIdForget(e.target.value)} disabled={changeInput} />
                </div>
                <div>
                    <span className="spanLabel">Phụ trách đơn vị hiện tại:</span>
                    <input type="text" className="inputDisable" defaultValue={club.Phutrach} onChange={(e) => setIdForget(e.target.value)} disabled={changeInput} />
                </div>
                <div>
                    <span className="spanLabel">Năm thành lập:</span>
                    <input type="number" className="inputDisable" defaultValue={club.Ngaythanhlap} onChange={(e) => setIdForget(e.target.value)} disabled={changeInput} />
                </div>
                <div>
                    <span className="spanLabel">Ngày truyền thống:</span>
                    <input type="date" className="inputDisable" defaultValue={club.Ngaytruyenthong} onChange={(e) => setIdForget(e.target.value)} disabled={changeInput} />
                </div>
            <div>
            <span className = "spanLabel">Tổng số thành viên:</span><br/>
            </div>
            <div className='row rowTable'>
                <table className='col-4 tableAddUnit' border={'1px'} cellPadding={'2px'}>
                    <tr>
                        <th>
                            Cảm tình viên
                        </th>
                        <th className="inputTH">
                            <input  type="number" min="0" className="inputDisable" style={{width:35}} defaultValue={club.Camtinhvien} disabled={changeInput} />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Tình nguyện viên
                        </th>
                        <th className="inputTH">
                            <input className="inputDisable" style={{width:35}} defaultValue={club.TNV} disabled={changeInput} />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Hội viên
                        </th>
                        <th className="inputTH">
                            <input className="inputDisable" style={{width:35}} defaultValue={club.Hoivien} disabled={changeInput} />
                        </th>
                    </tr>
                </table>

                <table className='col-4 tableAddUnit' border={'1px'} cellPadding={'2px'}>
                    <tr>
                        <th>
                            Hướng dẫn viên/Cán bộ tăng cường
                        </th>
                        <th className="inputTH">
                            <input className="inputDisable" style={{width:35}} defaultValue={club.Huongdanvien} disabled={changeInput} />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Huấn luyện viên
                        </th>
                        <th className="inputTH">
                            <input className="inputDisable" style={{width:35}} defaultValue={club.Huanluyenvien} disabled={changeInput} />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Cán bộ
                        </th>
                        <th className="inputTH">
                            <input  className="inputDisable" style={{width:35}} defaultValue={club.Canbotangcuong} disabled={changeInput} />
                        </th>
                    </tr>
                </table>
            </div>           
            <span className = "spanLabel">Điểm hiến máu thường xuyên tổ chức:</span>
            <input type="text" className="inputDisable" defaultValue={club.Ketquahoatdong} onChange={(e) => setIdForget(e.target.value)} disabled={changeInput} />
            <br/>
            <span className = "spanLabel">Kết quả hoạt động:</span>
            <input type="text" className="inputDisable" defaultValue={club.Diemhienmau} onChange={(e) => setIdForget(e.target.value)} disabled={changeInput} />
            <div className="buttonSubmitForMobile">
                <button id='rolesave' className="buttonS" onClick={() => handleUpdate()&&roles}>Lưu thay đổi</button>
                {/* <button id='rolecancel' className="buttonS"  onClick={() => handleCa()&&roles}>Hủy</button> */}
            </div>
        </div>
    )
}

export default AddUnit;