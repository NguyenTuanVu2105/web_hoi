import React, {  useContext, useEffect } from 'react'
import HomepageContext from "../../../../context/HomepageContext";

const HistoryBlood = () => {
    const { setNameMap } = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/ho-so-to-chuc']: 'Hồ sơ tổ chức',
            ['/lich-su-hoi']: 'Lịch sử Hội',
        })
    }, [])
    return (
        <div className="para">
            <h5 style={{ textAlign: "center", marginBottom:30 }}>LỊCH SỬ HỘI THANH NIÊN VẬN ĐỘNG HIẾN MÁU HÀ NỘI</h5>
            <div className='row'>
                <p className='col-10 offset-1 tagP tagP'>
                    Ngày 24/01/1994: Thành lập, với tên gọi ban đầu là Câu lạc bộ học sinh sinh viên hoạt động nhân đạo, trực thuộc Trung Ương Hội sinh viên Việt Nam. Anh Nguyễn Đức Thuận, sinh viên trường Đại học Y Hà Nội được chọn cử là Chủ nhiệm Câu lạc bộ. - Ngày 06/01/1995: Đổi tên thành Câu lạc bộ vận động hiến máu nhân đạo trực thuộc Hội Liên hiệp Thanh niên Việt Nam. -  gày19/5/1996: Đổi tên và phát triển lên Chi hội Thanh niên tình nguyện vận động hiến máu nhân đạo Thành phố Hà Nội, trực thuộc Hội Liên hiệp Thanh niên Việt Nam TP Hà Nội. Đây là dấu mốc lịch sử quan trọng được lấy là Đại hội lần thứ I của Hội. Anh Nguyễn Đức Thuận, sinh viên trường Đại học Y Hà Nội được hiệp thương là Chi hội trưởng. - Ngày 07/4/2000: Đổi tên và phát triển thành Hội Thanh niên tình nguyện vận động hiến máu nhân đạo TP Hà Nội với 04 chi hội và 01 câu lạc bộ trực thuộc. Đây cũng là thời điểm đánh dấu Đại hội lần thứ II của Hội (2000 – 2004), anh Nguyễn Đức Thuận – cán bộ Viện Huyết học – Truyền máu được hiệp thương giữ chức danh Chủ tịch Hội, anh cũng là Chủ tịch Hội đầu tiên của Hội. - Ngày 18/9/2004 tại Hà Nội, Đại hội đại biểu lần thứ III (2004 – 2009) của Hội được tổ chức trong tình hình phong trào hiến máu có nhiều bước tiến mới, mô hình điểm hiến máu cố định đạt nhiều hiệu quả, đây cũng là thời điểm đưa vào mô hình tổ chức hiến máu bằng xe lưu động. Anh Nguyễn Đức Thuận được đại hội tín nhiệm hiệp thương tiếp tục giữ danh Chủ tịch Hội. - Ngày 27/9/2009 tại Hà Nội, Đại hội đại biểu lần thứ IV (2009 – 2014) của Hội được tổ chức trọng thể, anh Ngô Mạnh Quân – Trưởng Khoa Vận động và Tổ chức hiến máu, Viện Huyết học – Truyền máu TW được đại hội tín nhiệm hiệp thương giữ chức danh Chủ tịch Hội. Đây là giai đoạn đánh dấu sự phát triển mạnh mẽ của phong trào hiến máu gắn liên với các ngày hội hiến máu lớn. Ngày 24/01/2010, theo nguyện vọng của đông đảo cán bộ, hội viên, Hội ta đổi tên thành Hội Thanh niên vận động hiến máu Hà Nội như hiện nay. Ngày 28/12/2011, Ủy ban Hội khóa IV, kỳ họp thứ 5 đã hiệp thương anh Chử Nhất Hợp – cán bộ Viện Huyết học – Truyền máu TW giữ chức danh Chủ tịch Hội. -  gày 07/6/2014, Đại hội đại biểu lần thứ V (2014 – 2019) của Hội được tổ chức trọng thể, anh Chử Nhất Hợp – Chủ tịch Hội khóa IV tiếp tục được đại hội tín nhiệm hiệp thương giữ chức danh Chủ tịch Hội khóa V. Chủ đề của Đại hội: Phát huy truyền thống tự hào 20 năm tình nguyện, tiếp thu kiến thức khoa học, đổi mới các hoạt động, nâng cao kỹ năng công tác Hội, thúc đẩy đam mê tình nguyện vì cuộc sống cộng đồng, vì sự sống người bệnh, vì sự tiến bộ của tuổi trẻ.
                </p>
            </div>
            

        </div>
    )
}

export default HistoryBlood;