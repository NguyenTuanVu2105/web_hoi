import React from 'react'
import {Input} from 'antd';
const IntroUnit = () =>{
    return(
        <div>
            <span className="spanLabel">Kết quả hoạt động:</span>
            <div className="para-intro-s">
            <div className="border-intro">
                <div className="row-intro" style={{borderBottom:"1px solid #a9a9a9"}}>
                    <div className="column-intro" style={{ width: "14.28%" }}>
                        <span className="label-intro">Năm</span>
                    </div>
                    <div className="column-intro" style={{ width: "14.28%" }}>
                        <span className="label-intro">Hội viên</span>
                    </div>
                    <div className="column-intro" style={{ width: "14.28%" }}>
                        <span className="label-intro">Tình nguyện viên</span>
                    </div>
                    <div className="column-intro" style={{ width: "14.28%" }}>
                        <span className="label-intro">Số điểm hiến máu</span>
                    </div>
                    <div className="column-intro" style={{ width: "14.28%" }}>
                        <span className="label-intro">Số đv máu trực tiếp</span>
                    </div>
                    <div className="column-intro" style={{ width: "14.28%" }}>
                        <span className="label-intro">Số đv máu phối hợp</span>
                    </div>
                    <div className="column-intro" style={{ width: "14.32%", border: "none" }}>
                        <span className="label-intro">Xếp loại</span>
                    </div>
                </div>
                <div className="row-intro">
                    <div className="column-intro" style={{ width: "14.28%" }}>
                        <Input style={{width:"90%"}}/>
                    </div>
                    <div className="column-intro" style={{ width: "14.28%" }}>
                        <Input style={{width:"90%"}}/>
                    </div>
                    <div className="column-intro" style={{ width: "14.28%" }}>
                        <Input style={{width:"90%"}}/>
                    </div>
                    <div className="column-intro" style={{ width: "14.28%" }}>
                        <Input style={{width:"90%"}}/>
                    </div>
                    <div className="column-intro" style={{ width: "14.28%" }}>
                        <Input style={{width:"90%"}}/>
                    </div>
                    <div className="column-intro" style={{ width: "14.28%" }}>
                        <Input style={{width:"90%"}}/>
                    </div>
                    <div className="column-intro" style={{ width: "14.32%", border: "none" }}>
                        <Input style={{width:"90%"}}/>
                    </div>
                </div>
            </div>
            </div>

            <span className="spanLabel">Khen thưởng:</span>
            <div className="para-intro-s">
            <div className="border-intro">
                <div className="row-intro" style={{borderBottom:"1px solid #a9a9a9"}}>
                    <div className="column-intro" style={{ width: "14%" }}>
                        <span className="label-intro">Năm</span>
                    </div>
                    <div className="column-intro" style={{ width: "20%" }}>
                        <span className="label-intro">Hội viên</span>
                    </div>
                    <div className="column-intro" style={{ width: "30%" }}>
                        <span className="label-intro">Nội dung khen thưởng</span>
                    </div>
                    <div className="column-intro" style={{ width: "20%" }}>
                        <span className="label-intro">Nơi cấp</span>
                    </div>
                    <div className="column-intro" style={{ width: "16%", border: "none" }}>
                        <span className="label-intro">Số quyết định</span>
                    </div>
                </div>
                <div className="row-intro">
                    <div className="column-intro" style={{ width: "14%" }}>
                        <Input style={{width:"90%"}}/>
                    </div>
                    <div className="column-intro" style={{ width: "20%" }}>
                        <Input style={{width:"90%"}}/>
                    </div>
                    <div className="column-intro" style={{ width: "30%" }}>
                        <Input style={{width:"90%"}}/>
                    </div>
                    <div className="column-intro" style={{ width: "20%" }}>
                        <Input style={{width:"90%"}}/>
                    </div>
                    <div className="column-intro" style={{ width: "16%", border: "none" }}>
                        <Input style={{width:"90%"}}/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default IntroUnit;