import React, {useState, useContext, useEffect} from 'react'
import HomepageContext from "../../../context/HomepageContext"
import {Table} from 'antd'
import './MemberSearch.css'
import {Modal, Button, Radio, Form, notification} from 'antd'
import {Select} from 'antd'
import {regionList} from './constant/regionList'
// import { TableSearchList, CheckBoxLeft, CheckBoxRight } from '../Component/TableSearchList'
import {Input} from 'antd'
import {getTableMember, addNewMember} from '../../../api/base/tablesearch'
import {getUnitAll} from '../../../api/base/unit'
import {getClubAll} from '../../../api/base/admin'
import {getPosition, getSpecialized} from '../../../api/base/consernposition'
import ChangeInfUser from './component/change-info-user/ChangeInfUser'
import MemberSearchForm from './component/member-search-table/MemberSearchForm'
import AddMemberModal from "./component/add-member/AddMemberModal";
import {dataSearchDefault} from "./constant/searchDefault";
// import {_} from 'lodash'
const {Column} = Table
const {Option} = Select

const MemberSearch = (props) => {
    const [table, setTable] = useState([])
    const [unit, setUnit] = useState([])
    const [dataSearch, setDataSearch] = useState(dataSearchDefault)
    const {setNameMap, setLoading} = useContext(HomepageContext)
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [addMemberVisible, setAddMemberVisible] = useState(false)

    const fetchDataUnit = async () => {
        const result = await getUnitAll()
        if (result.data.success) {
            setUnit(result.data.data)
        }
    }

    const fetchData = async (page, value=null) => {
        setLoading(true)
        const result = await getTableMember(page, value? value : dataSearch)
        if (result.data.success) {
            setTable(result.data.data)
            setTotal(result.data.total)
        }
        setLoading(false)
    }


    useEffect(() => {
        fetchDataUnit()
        fetchData(1)
        setNameMap({
            ['/']: 'Trang chủ',
            ['/tra-cuu-thanh-vien']: 'Tra cứu thành viên'
        })
    }, [])

    const showModal = () => {
        setAddMemberVisible(true)
    };

    const handleCancel = e => {
        console.log(e);
        setAddMemberVisible(false)
    };

    function handleChange(value) {
        console.log(`selected ${value}`)
    }

    const _onPageChange = (page) => {
        setPage(page)
        setTable([])
        fetchData(page)
    }
    const columns = [
        {
            title: 'Sửa',
            fixed: 'left',
            id: 'Chon',
            dataIndex: 'id',
            render: (id) => {
                return <span>
        <ChangeInfUser idUser={id}/>
      </span>
            }
        }, {
            title: 'Số thẻ thành viên',
            dataIndex: 'Sothethanhvien',
            id: 'Sothethanhvien',
            fixed: 'left'
        }, {
            title: 'Họ và tên',
            dataIndex: 'Hovaten',
            id: 'Hovaten',
            fixed: 'left'
        }, {
            title: 'Ngày sinh',
            dataIndex: 'Ngaysinh',
            id: 'Ngaysinh',
            // fixed: 'left'
        }, {
            title: 'Giới tính',
            dataIndex: 'Gioitinh',
            id: 'Gioitinh',
            render: (Gioitinh) => {
                if (Gioitinh) {
                    return <span> Nam </span>
                } else {
                    return <span> Nữ </span>
                }
            }
        }, {
            title: 'Chức vụ',
            dataIndex: 'position.Chucvu',
            id: 'Chucvu'
        }, {
            title: 'Bậc chuyên môn',
            dataIndex: 'specialized.Bacchuyenmon',
            id: 'Bacchuyenmon'
        }, {
            title: 'CCCD/CMT/HC',
            dataIndex: 'CMTorHC',
            id: 'CMTorHC'
        }, {
            title: 'Ngày cấp',
            dataIndex: 'Ngaycap',
            id: 'Ngaycap'
        }, {
            title: 'Nơi cấp',
            dataIndex: 'Noicap',
            id: 'Noicap'
        }, {
            title: 'Điện thoại',
            dataIndex: 'Dienthoai',
            id: 'Dienthoai'
        }, {
            title: 'Email',
            dataIndex: 'Email',
            id: 'Email'
        }, {
            title: 'Facebook',
            dataIndex: 'Facebook',
            id: 'Facebook'
        }, {
            title: 'Quê quán',
            dataIndex: 'Quequan',
            id: 'Quequan'
        }, {
            title: 'Địa chỉ LL',
            dataIndex: 'DiachiLL',
            id: 'DiachiLL'
        }, {
            title: 'Đội trực thuộc',
            dataIndex: 'club.Tendoi',
            id: 'Tendoi'
        }, {
            title: 'Chi hội trực thuộc',
            dataIndex: 'club.branch.Tenchihoi',
            id: 'Tenchihoi'
        }, {
            title: 'Nhóm máu',
            dataIndex: 'Nhommau',
            id: 'Nhommau'
        }, {
            title: 'Rh',
            dataIndex: 'Rh',
            id: 'Rh',
            render: (Rh) => {
                if (Rh === true) {
                    return <span> + </span>
                } else if (Rh === false) {
                    return <span> - </span>
                } else {
                    return <span>   </span>
                }
            }
        }, {
            title: 'Số lần HM',
            dataIndex: 'SolanHM',
            id: 'SolanHM'
        }, {
            title: 'Ngày vào Hội',
            dataIndex: 'NgayvaoHoi',
            id: 'NgayvaoHoi'
        }, {
            title: 'Thời gian HĐ Hội',
            dataIndex: 'ThoigianHD',
            id: 'ThoigianHD'
        }, {
            title: 'Thông tin liên lạc GĐ',
            dataIndex: 'ThongtinlienheGD',
            id: 'ThongtinlienheGD'
        }, {
            title: 'Đơn vị học tập/Công tác',
            dataIndex: 'Donvi',
            id: 'Donvi'
        }, {
            title: 'Lớp/Đơn vị cụ thể',
            dataIndex: 'Donvicuthe',
            id: 'Donvicuthe'
        }, {
            title: 'GPA',
            dataIndex: 'GPA',
            id: 'GPA'
        }, {
            title: 'Trình độ học vấn',
            dataIndex: 'Trinhdohocvan',
            id: 'Trinhdohocvan'
        }, {
            title: 'Đảng viên/Đoàn viên',
            dataIndex: 'DoanvienDangvien',
            id: 'DoanvienDangvien'
        }, {
            title: 'status',
            dataIndex: 'TinhtrangHD',
            id: 'TinhtrangHD',
            render: (TinhtrangHD) => {
                if (TinhtrangHD) {
                    return <span>
          <i className="fa fa-circle" style={{color: 'rgb(91, 255, 91)'}}></i>
        </span>
                } else {
                    return <span>
          <i className="fa fa-circle" style={{color: 'gray'}}></i>
        </span>
                }
            }
        }]

    const searchMember = (value) => {
        setPage(1)
        console.log(value)
        fetchData(1, value)
    }
    return (
        <div className="para searchItem">
            <div className='menuFM'>

                {/* --Thêm thành viên--- */}
                <Button type="primary" onClick={showModal}
                        style={{backgroundColor: 'white', color: '#1890ff', whiteSpace: 'inherit', height: 32}}>
                    Thêm thành viên
                </Button>
                <AddMemberModal visible={addMemberVisible} onCancel={handleCancel} setVisible={setAddMemberVisible}
                                resetData={() => fetchData(page)}/>

                 <MemberSearchForm searchMember={searchMember} setDataSearch={setDataSearch}/>

            </div>

            <Table columns={columns} dataSource={table} scroll={{x: 'max-content'}} pagination={{
                onChange: _onPageChange,
                current: page,
                total: total,
                pageSize: 10,
                showQuickJumper: true
            }}/>

        </div>

    )
}


export default Form.create()(MemberSearch)