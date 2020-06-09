import React, {useContext, useState} from "react";
import {Button, Modal, notification} from "antd";
import {deleteBackground} from "../../../api/base/background";
import HomepageContext from "../../../context/HomepageContext";

const DeleteBackground = (props) => {
    const {id, fetchData} = props
    const { setLoading } = useContext(HomepageContext)
    const [openDe, setOpenDe] = useState(false)
    const removeImg = async (id) => {
        setLoading(true)
        const resp = await deleteBackground(id)
        if (resp.success) {
            if (resp.data.success) {
                setOpenDe(false)
                notification['success']({
                    message: 'Xóa thành công',
                })
                fetchData()
            } else {
                notification['error']({
                    message: 'Xóa không thành công',
                })
            }
        }
        setLoading(false)
    }
    const showModalDe = () => {
        setOpenDe(true)
    };
    const handleCancelDe = e => {
        setOpenDe(false)
    };
    return (
        <>
            <Button type="primary" className="button-change-back-s" style={{ marginTop: 15 }} onClick={showModalDe}>
                Xóa
            </Button>
            <Modal
                title="Xóa chương trình!"
                visible={openDe}
                footer={null}
                onCancel={handleCancelDe}
            >
                <p>Hành động này không thể hoàn tác. Bạn có chắc muốn xóa!</p>
                <div className="modal-change-back-s">
                    <button className="button-change-back-s" style={{width:"100px"}} onClick={() => removeImg(id)}>Xóa</button>
                </div>
            </Modal>
        </>
    )
}

export default DeleteBackground