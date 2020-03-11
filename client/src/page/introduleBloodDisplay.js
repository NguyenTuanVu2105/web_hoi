import React, { Component, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import '../css/introduleBloodDisplay.css'

const IntroduleBloodDisplay = () => {
    const { nameMap, setNameMap } = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
            ['/introduleBlood']: 'Giới thiệu về Hội',
            ['/introduleBloodDisplay']: 'Giới thiệu về Hội(Chi tiết)'
        })
    }, [])
    return (
        <div className="para">
            <iframe src="https://drive.google.com/file/d/1jz2hyNr1bMqejn5qTO8wciYRqs3VP6G3/preview" style={{width:"90%", height:"1000px",marginLeft:"5%"}}></iframe>
            {/* <embed src="/Don dang ky hoc KNBT 2017.pdf" type="application/pdf" /> */}
            {/* <iframe src="https://drive.google.com/viewerng/viewer?embedded=true&url=Don dang ky hoc KNBT 2017.pdf" style={{width:"100%", height:500}} frameborder="0"></iframe> */}
            {/* <h5 style={{ textAlign: "center" }}>GIỚI THIỆU HỘI THANH NIÊN VẬN ĐỘNG HIẾN MÁU HÀ NỘI</h5>
            <h6 className='Tag'>1.	Giới thiệu:</h6>
            <div className='row'>
                <p className='col-10 offset-1 tagP'>Hội Thanh niên vận động hiến máu Hà Nội (Viết tiếng Anh là Hanoi Association of Young Blood Donor Recruiters) – là một tổ chức xã hội đặc thù của thanh niên Thủ đô, hoạt động chuyên sâu về vận động hiến máu và tổ chức hiến máu tình nguyện trên địa bàn Hà Nội. Hội trực thuộc Hội LHTN Việt Nam TP Hà Nội về mặt tổ chức và được Viện Huyết học – Truyền máu TW hướng dẫn về mặt chuyên môn. Có thể nói Hội là một trong những tổ chức  tình nguyện có truyền thống lâu dài nhất trong các tổ chức tình nguyện của thủ đô nói riêng và cả nước nói chung. Hội được thành lập ngày 24/01/1994, do GS.TSKH Đỗ Trung Phấn – Nguyên Viện trưởng Viện Huyết học – Truyền máu TW sáng lập và rèn luyện. Sự ra đời của Hội xuất phát từ những yêu cầu thực tiễn và thời đại, đánh dấu sự ra đời và phát triển của phong trào vận động hiến máu tình nguyện trên phạm vi toàn quốc. Sự hiện diện của Hội trong lòng Hà Nội đã trở thành nét đẹp góp phần mang tính nhân văn sâu sắc của thủ đô ngàn năm văn hiến.  Khởi đầu từ Trường Đại học Y khoa Hà Nội với “tên sơ sinh” là Câu lạc bộ học sinh sinh viên hoạt động nhân đạo (khi đó, cụm từ “hiến máu” còn khá xa lạ với tuổi trẻ thủ đô); tính đến nay đã có hàng vạn lượt cán bộ hội viên đã từng khoác lên mình chiếc áo đỏ thân thương và nồng cháy, biết bao thế hệ các anh, các chị đã cống hiến một phần thậm trí trọn vẹn cả những năm tháng thanh xuân của mình cho tổ chức Hội, cho sự phát triển của phong trào hiến máu tình nguyện. Hơn 23 năm qua - một chặng đường dài đầy vinh quanh và thử thách của Hội, không thể kể hết được biết bao những giọt mồ hôi, biết bao giọt nước mắt đã đổ xuống gieo hạt, vun đắp cho tổ chức Hội chúng ta phát triển cho ngày hôm nay.  Với khát vọng "Học tập hết mình vì lập thân lập nghiệp – Tình nguyện hết mình vì sư sống người bệnh" trong hơn 23 năm qua toàn Hội đã trực tiếp vận động được trên 350 nghìn lượt người tham gia hiến máu, bên cạnh đó Hội còn phối hợp, hỗ trợ các đơn vị, địa phương, trường học vận động đông đảo thanh niên và sinh viên, cán bộ công nhân viên chức và người dân tích cực tham gia hiến máu tình nguyện. Hội còn là một mô hình tình nguyện vận động hiến máu cho các tỉnh/thành phố trong cả nước học tập và được các tổ chức tình nguyện quốc tế đánh giá cao.  Hội là một môi trường học tập và thi đua rèn luyện rất tốt cho hội viên với nhiều thế hệ cán bộ, hội viên của Hội đã trưởng thành và hiện nay đang làm chủ các doanh nghiệp, đang công tác và có vị trí quan trọng trong các cơ quan trung ương, các Bộ, Ban ngành, Bệnh viện, Viện và tại các địa phương, nhiều bạn đã nhận được học bổng du học tại Úc, Singapore, Mỹ, Anh, Pháp, Nhật… Rất nhiều những tấm gương sáng nỗ lực vượt khó để học tập, lao động và hoạt động tốt. Thông qua hoạt động Hội, hội viên đã được trải nghiệm, học tập, rèn luyện và thành đạt.</p>
            </div>
            <h6  className='Tag'>2.	Sơ đồ tổ chức hội:</h6>
            <div className='row'>
                <img className=' col-6 offset-3' src='https://scontent.fhan5-1.fna.fbcdn.net/v/t1.15752-0/p280x280/84142258_485711602034101_4884805698904391680_n.png?_nc_cat=109&_nc_ohc=tofID9IIOiEAX9qUHIy&_nc_ht=scontent.fhan5-1.fna&oh=25c57204bf48c50a70501db4fea175a2&oe=5EBDCD2D'></img>
            </div>
            <h6  className='Tag'>3.	Cơ cấu tổ chức:</h6>
            <div className='row'>
                <p className='col-10 offset-1 tagP'>
                    Cơ quan lãnh đạo cao nhất của Hội là Đại hội đại biểu, được tổ chức 5 năm 1 lần theo nhiệm kỳ của Hội Liên hiệp thanh niên Việt Nam. Tại Đại hội, sẽ hiệp thương chọn cử ra Ủy ban Hội để điều hành hoạt động giữa 2 kì Đại hội, Ủy ban Hội hiệp thương chọn cử Thường trực Ủy ban Hội và các chức danh chủ chốt của Hội. Trong những năm qua, Hội không ngừng củng cố tổ chức và mở rộng địa bàn hoạt động. Hiện nay, Hội bao gồm 12 Chi hội, có các Ban chuyên môn và Văn phòng  ội, Hội giữ vai trò thường trực cho Ban vận động thành lập Hội Vận động hiến máu Hà Nội, phụ trách Câu lạc bộ Tuyên truyền hiến máu và Hiến máu dự bị của thành phố Hà Nội. Các Câu lạc bộ Truyền thông, Câu lạc bộ Văn nghệ cùng đơn vị trực thuộc hoạt động thường xuyên. Các chi hội được phân công hoạt động trên địa bàn nhất định.
                </p>
                <p className='col-10 offset-1 tagP'>
                    - Ủy ban Hội khóa VI (2019 – 2024) gồm 29 anh/chị.
                </p>
                <p className='col-10 offset-1 tagP'>
                    - Giúp việc cho Ủy ban Hội có:
                </p>
                <p className='col-10 offset-1 tagP'>
                    Văn phòng Hội, các Ban chuyên môn, các Câu lạc bộ theo kỹ năng và sở thích.
                </p>
                <p className='col-10 offset-1 tagP'>
                    - Chi hội 06/01 (Ngày toàn quốc hiến máu) hoạt động trọng tâm trên địa bàn khu vực Quận Cầu Giấy.
                </p>
                <p className='col-10 offset-1 tagP'>
                    - Chi hội 24/01 (Ngày thành lập Hội) hoạt động trọng tâm trên địa bàn khu vực Quận Đống Đa, Quận Cầu Giấy.
                </p>
                <p className='col-10 offset-1 tagP'>
                    - Chi hội 27/02 (Ngày Thầy thuốc Việt Nam) hoạt động trọng tâm trên địa bàn khu vực Quận Đống Đa.
                </p>
                <p className='col-10 offset-1 tagP'>
                    - Chi hội 08/3 (Ngày thành lập Viện Huyết học - Truyền máu Trung ương) hoạt động trên địa bàn: Quận Cầu Giấy và tổ chức điểm hiến máu cố định tại Viện.
                </p>
                <p className='col-10 offset-1 tagP'>
                    - Chi hội 26/3 (Ngày thành lập Đoàn TNCS Hồ Chí Minh - 26/3/1931) hoạt động trên địa bàn: Quận Hà Đông, huyện Thanh Trì
                </p>
                <p className='col-10 offset-1 tagP'>
                    - Chi hội 07/4 (Ngày toàn dân hiến máu – từ 7/4/2000) hoạt động trên địa bàn: Quận Thanh Xuân.
                </p>
                <p className='col-10 offset-1 tagP'>
                    - Chi hội 08/5 (ngày Quốc tế Chữ thập đỏ) hoạt động trên địa bàn: Quận Cầu Giấy, Quận Tây Hồ.
                </p>
                <p className='col-10 offset-1 tagP'>
                    - Chi hội 14/6 (Ngày Quốc tế Người hiến máu) hoạt động trên địa bàn: Quận Hà Đông, Huyện Chương Mỹ.
                </p>
                <p className='col-10 offset-1 tagP'>
                    - Chi hội 19/8 (Ngày cách mạng tháng tám thành công, ngày hội toàn dân bảo vệ an ninh tổ quốc) hoạt động tại địa bàn: Huyện Gia Lâm, Quận Long Biên.
                </p>
                <p className='col-10 offset-1 tagP'>
                    - Chi hội 15/10 (Ngày truyền thống Hội LHTN Việt Nam) hoạt động trọng tâm tại đại bàn: Quận Hai Bà Trưng, Quận Hoàng Mai.
                </p>
                <p className='col-10 offset-1 tagP'>
                    - Chi hội 01/12 (Ngày Thế giới phòng chống HIV/AIDS) hoạt động địa bàn: Quận Nam Từ Liêm, Huyện Hoài Đức.
                </p>
                <p className='col-10 offset-1 tagP'>
                    - Chi hội 05/12 (Ngày Quốc tế Người tình nguyện) hoạt động trên địa bàn: Quận Bắc Từ Liêm, Huyện Đông Anh.
                </p>
                <p className='col-10 offset-1 tagP'>
                    Trang thông tin điện tử: www.mau.vn Mạng xã hội facebook: https://www.facebook.com/hoi.mau.vn
                </p>
                <p className='col-10 offset-1 tagP'>
                    Tư vấn, hỗ trợ cho các hoạt động của Hội gồm có: Hội đồng huấn luyện, Hội đồng thi đua, Ban Quản lý dự án, Ban Vận động thành lập Hội Vận động hiến máu Hà Nội.
                </p>
                <p className='col-10 offset-1 tagP'>
                    Hội có logo riêng, bài ca, Văn phòng  Hội đặt tại Tầng 6 tòa nhà Trung tâm truyền máu Hà Nội (Viện Huyết học – Truyền máu TW) – Phố Phạm Văn Bạch, Yên Hòa, Cầu Giấy, Hà Nội. Qua hơn 23 năm phát triển, lịch sử đã khẳng định tổ chức hội thực sự là ngôi nhà chung của những tấm lòng nhân ái, của những thanh niên tình nguyện Thủ đô. Hội đã được Thủ tướng Chính phủ tặng Bằng khen, Chương trình tình nguyện Liên hợp Quốc và Trung ương Đoàn trao tặng giải thưởng tình nguyện quốc gia, vinh danh 1 trong 12 tổ chức tiêu biểu nhất phong trào tình nguyện trong 15 năm (2000 – 2014). Trung ương Hội LHTN Việt Nam tặng giải thưởng Khi Tổ quốc cần, Bộ Y tế, Hội Chữ thập đỏ Việt Nam, UBND Thành phố Hà Nội tặng nhiều bằng khen và Hội LHTN Việt Nam TP Hà Nội đánh giá là đơn vị thi đua xuất sắc trong công tác Hội và phong thanh niên trong nhiều năm….
                </p>
            </div>
            <h6  className='Tag'>4.	Văn hóa tổ chức hội:</h6>
            <div className='row'>
                <p className='col-10 offset-1 tagP'>
                    Văn hoá tổ chức Hội là một hệ thống các giá trị vật chất và tinh thần do cán bộ, hội viên, tình nguyện viên sáng tạo, chọn lọc và phát triển trong quá trình hoạt động Hội  Các tính chất văn hóa tổ chức Hội
                </p>
                <p className='col-10 offset-1 tagP'>
                    - Tính cộng đồng: Thể hiện đậm nét tình cộng đồng trong văn hóa Việt, sự giao lưu, gắn kết, tương trợ trong công việc, trong cuộc sống như gia đình, làng xóm….
                </p>
                <p className='col-10 offset-1 tagP'>
                    - Tính nhân văn: Thể hiện tình yêu thương, được cống hiến, mong muốn được chia sẻ, được gi p đỡ, làm việc tốt mang lại giá trị cộng đồng, xã hội cho người bệnh, cho bản thân và gia đình.
                </p>
                <p className='col-10 offset-1 tagP'>
                    - Tính tiên phong: Thể hiện sự nỗ lực vượt khó khăn, vươn lên trong cuộc sống, trong lao động và hoạt động, sự sáng tạo, tính cầu thị mong muốn được tiến bộ để trưởng thành.  Các đặc trưng văn hóa tổ chức Hội
                </p>
                <p className='col-10 offset-1 tagP'>
                    - Đặc trưng nhận diện (hữu hình thể hiện bên ngoài), bao gồm: các hình ảnh, biểu tượng, là những cái dễ nhìn thấy, nghe thấy, cảm nhận được khi tiếp xúc với Hội, ví dụ thư mời, điểm hiến máu, các văn bản quy định nguyên tắc hoạt động, đồng phục, trang phục, logo, slogan, bài hát, những câu chuyện về tổ chức (những năm tháng khởi đầu, những gian khó và vinh quang của tổ chức, hình tượng cá nhân thủ lĩnh), các sự kiện, ngày lễ, lễ hội, ngày hội ...
                </p>
                <p className='col-10 offset-1 tagP'>
                    - Đặc trưng trung gian (chuẩn mực, phong cách), bao gồm: Các giá trị được các cán bộ, hội viên, cảm tình viên chấp nhận, phổ biến và thực hiện, ví dụ phong cách ăn mặc, cách sử dụng ngôn ngữ, cách biểu lộ cảm xúc, các nghi thức, các quy định thành văn và bất thành văn được các thành viên tin và thực hiện, chiến lược, mục tiêu, phương châm hoạt động, các mỗi quan hệ. - Đặc trưng cốt lõi, bao gồm: Các yếu tố, nền tảng được hình thành qua thời gian chọn lọc và phát triển, ví dụ tâm lý, tình cảm, tình yêu với tổ chức của cán bộ, hội viên…tình cảm, suy nghĩ của các đối tác bên ngoài...sự tin yêu, quý trọng.... Xây dựng văn hóa tổ  chức Hội Là nhiệm vụ của toàn Hội trong tất cả các giai đoạn, thời kỳ phát triển, xây dựng văn hóa tổ chức Hội bao gồm rất nhiều các nội dung, tập trung chủ yếu vào các vấn đề: Xây dựng hệ thống nhận diện và hình ảnh, xây dựng các quy định ứng xử giao tiếp, văn hóa người thủ lĩnh, các chuẩn mực, phong cách hoạt động Hội và các quan hệ với đối tác, giá trị cốt lõi phát triển bản thân.
                </p>

            </div>
            <h6  className='Tag'>5. Nhiệm vụ, giải pháp công tác Hội 2019 - 2024:</h6>
            <div className='row'>
                <p className='col-10 offset-1 tagP  indam'>
                    1.	Tập hợp thanh niên, sinh viên xây dựng tổ chức Hội đoàn kết vững mạnh là điểm tựa, niềm tin cho thanh niên, sinh viên tham gia vận động hiến máu tình nguyện (gọi tắt: nhiệm vụ xây dựng “Hội là nhà, mỗi thành viên là anh em”).
                </p>
                <p className='col-10 offset-1 tagP nghieng'>
                    1.1.	Xây dựng văn hóa tổ chức hội phát triển lâu dài và bền vững
                </p>
                <p className='col-10 offset-1 tagP'>
                    -	Bổ sung và chỉnh sửa hoàn thiện các nội dung cơ bản về văn hóa tổ chức Hội, đổi mới các hình thức truyền đạt tới các thành viên dễ hiểu, dễ tiếp thu và ứng dụng.
                </p>
                <p className='col-10 offset-1 tagP'>
                    -	Định hướng tư tưởng, phát huy và giữ gìn các giá trị truyền thống dân tộc, các gia trị tổ chức Hội, hun đúc tinh thần nhân ái và nỗ lực vươn lên trong các thành viên.
                </p>
                <p className='col-10 offset-1 tagP'>
                    -	Xây dựng hệ thống tài liệu, các bản mô tả nhiệm vụ, mục tiêu và yêu cầu cử từng vị trí tạo điều kiện thuận lợi cho các thành viên tham gia hoạt động.
                </p>
                <p className='col-10 offset-1 tagP'>
                    -	Điều chỉnh bổ sung, cập nhật các ca khúc, bài nhảy dùng trong hoạt động Hội đáp ứng với nhu câu, nguyện vọng và tình hình hoạt động Hội.
                </p>
                <p className='col-10 offset-1 tagP'>
                    -	Tổ chức các hoạt động quảng bá, chia sẻ thông tin về hoạt động Hội tới cộng đồng, xã hội chú trọng đến lợi ích, ý nghĩa khi tham gia tổ chức Hội.
                </p>
                <p className='col-10 offset-1 tagP'>
                    -	Thường xuyên bám sát các nhiệm vụ, chỉ đạo của Hội LHTN Việt Nam TP Hà Nội, phối hợp hành động cùng Viện Huyết học – Truyền máu TW.
                </p>
                <p className='col-10 offset-1 tagP'>
                    -	Thường xuyên kiện toàn, củng cố, phân công, điều động cán bộ linh hoạt, huấn luyện các thủ lĩnh tinh nhuệ, có năng lực, đạo đức yêu hội và nhiệt huyết với phong trào.
                </p>
                <p className='col-10 offset-1 tagP nghieng'>
                    1.2.	Kết nối các thế hệ, thành viên tạo dựng không gian “gia đình Hội máu”
                </p>
                <p className='col-10 offset-1 tagP'>
                    -	Xây dựng Hội là một gia đình nhân ái, một tổ chức uy tín để cộng đồng gửi gắn niềm tin, là môi trường hiệu quả để thanh niên, sinh viên rèn luyện trưởng thành.
                </p>
                <p className='col-10 offset-1 tagP'>
                    -	Mang đến một môi trường trải nghiệm, trở lại một tuổi trẻ sôi động cho những người trưởng thành nhưng vẫn muốn tham gia tình nguyện và sẵn sàng hiến máu.
                </p>
                <p className='col-10 offset-1 tagP'>
                    -	Xây dựng hệ thống cơ sở dữ liệu thành viên tham gia hoạt động hội, đây là cơ sở tiền đề để hình thành cộng đồng thành viên hội máu lâu dài.
                </p>
                <p className='col-10 offset-1 tagP'>
                    -	Kết nối thành viên các thời kỳ thông qua xây dựng nhóm trực tuyến “gia đình Hội máu” nơi chia sẻ các vấn đề trong cuộc sống, lao động, học tập và hoạt động Hội.
                </p>
                <p className='col-10 offset-1 tagP'>
                    -	Khuyến khích thành lập các nhóm thành viên đã tham gia Hội cùng địa phương, sở thích tạo điều kiện gắn bó lâu dài với từng đặc thù công việc.
                </p>
                <p className='col-10 offset-1 tagP'>
                    -	Tổ chức các hoạt động giao lưu chia sẻ, tọa đàm về học tập, thể thao kết nối các thế hệ của từng cơ sở hội, từng đối tượng đã tham gia hoạt động Hội.
                </p>
                <p className='col-10 offset-1 tagP'>
                    -	Giới thiệu và tham gia kết nối các thành viên trưởng thành từ Hội, các doanh nghiệp của cựu thành viên tạo cơ hội nghề nghiệp và điều kiện học hỏi phát triển.
                </p>
                <p className='col-10 offset-1 tagP'>
                    -	Thường xuyên quan tâm đến đời sống cán bộ, hội viên, tình nguyện viên, cựu thành viên về việc hiếu, việc hỷ và các dịp đặc biệt khác.
                </p>
                <p className='col-10 offset-1 tagP nghieng'>
                    1.3.	Mở rộng mặt trận tập hợp, kết nối tình nguyện hiến máu vì cộng đồng.
                </p>
                <p className='col-10 offset-1 tagP'>
                    -	Từng bước mở rộng địa bàn, thu hút các thành viên từ khi còn là học sinh, thu hút những thành viên có uy tín, có danh tiếng tham gia tổ chức Hội.
                </p>
                <p className='col-10 offset-1 tagP'>
                    -	Tăng cường giao lưu, kết nối và chia sẻ với các câu lạc bộ, hội nhóm tình nguyện, hoạt động xã hội đặc biệt các đơn vị có liên quan vận động hiến máu.
                </p>
                <p className='col-10 offset-1 tagP'>
                    -	Nghiên cứu nội dung phù hợp kết nối các doanh nghiệp, các trung tâm, các đơn vị có điều kiện tham gia các hoạt động tình nguyện và sẵn sàng hiến máu.
                </p>
                <p className='col-10 offset-1 tagP'>
                    -	Đề xuất xây dựng các điểm hiến máu trở thành địa chỉ tin cậy, một địa điểm sinh hoạt cho các thế hệ cán bộ, hội viên tham gia hoạt động và có điều kiện hiến máu.
                </p>
                <p className='col-10 offset-1 tagP'>
                    -	Phối hợp với các đơn vị tham gia các hoạt động giao lưu quốc tế, mở rộng các mối quan hệ, tạo môi trường thuận lợi cho hội viên, tình nguyện viên học tập.
                </p>
                <p className='col-10 offset-1 tagP indam'>
                    2.	Đẩy mạnh tinh thần tình nguyện sẵn sàng tham gia vận động hiến máu và hiến máu cứu người, đồng thời thi đua tiên phong học tập, sáng tạo lập nghiệp (gọi tắt: chương trình “tôi tình nguyện, tôi trưởng thành”).
                </p>
                <p className='col-10 offset-1 tagP nghieng'>
                2.1.	Đẩy mạnh tình nguyện hiến máu - nền tảng rèn luyện tình nguyện viên.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Phối hợp với Viện Huyết học – Truyền máu TW, Ban Chỉ đạo Vận động HMTN TP Hà Nội và các đơn vị để tham gia và giữ vai trò nòng cốt trong công tác hiến máu tình nguyện.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Phối hợp với đơn vị tiếp nhận máu tổ chức các điểm hiến máu thường xuyên tại cộng đồng bằng xe chuyên dụng và điểm hiến máu cố định.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Để xuất điều chỉnh hệ thống trang thiết bị tổ chức hiến máu để tạo điều kiện thuận lợi cho người hiến máu đăng ký tham gia và thuận tiện khi đến điểm hiến máu.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Tổ chức chăm sóc chu đáo trước, trong và sau hiến máu, chú trọng đến tâm lý, nhu cầu người hiến máu nhiều lần để họ tiếp tục tham gia hiến máu thường xuyên.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Nghiên cứu và từng bước thiết lập, xây dựng tổ chức của người hiến máu từ các thành viên trưởng thành qua hoạt động hội đã hiến máu nhiều lần.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Phối hợp với các đơn vị duy trì và tổ chức thành công các sự kiện hiến máu, các chiến dịch vận động hiến máu, đặc biệt cao điểm dịp hè và tết.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Chú trọng tổ chức các sự kiện mang lại giá trị, bài học ý nghĩa cho thành viên tham gia, hiệu quả về đơn vị máu tiếp nhận cho người bệnh.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Tiếp tục duy trì kênh thông tin, mạng xã hội đã có, nghiên cứu đưa vào các kênh thông tin mới như radio, video....đa dạng trên các diễn đàn cùng với facebook.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Nghiên cứu xây dựng tờ thông tin nội bộ tổng hợp các hoạt động và chia sẻ các nội dung trong công tác hội, tăng cường cầu nối thông tin tới cơ sở hội.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Phối hợp với các đơn vị tổ chức các sự kiện cộng đồng khác ngoài hiến máu để đáp ứng đa dạng hơn nhu cầu tham gia của các thành viên.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Tăng cường tổ chức các cuộc thi trực tuyến qua mạng xã hội để nang cao hiệu quả tổ chức, giảm thời gian và chi phí thực hiện.
                </p>
                <p className='col-10 offset-1 tagP nghieng'>
                2.2.	Đẩy mạnh các phong trào thi đua học tập để thành viên trưởng thành
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Xây dựng hình ảnh thành viên Hội máu: năng động, tự tin về kiến thức, kỹ năng, có tinh thần nhân ái sẻ chia, nhiệt huyết huyết với các hoạt động Hội.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Xây dựng hoàn thiện hệ thống các tài liệu, bài giảng đào tạo về kiến thức, kỹ năng, phân loại đối tượng tổ chức các khóa đào tạo phù hợp tình hình công tác Hội.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Tổ chức và phối hợp tổ chức các khóa bồi dưỡng cho tình nguyện viên nâng cao kiến thức, kỹ năng, xây dựng tiêu chuẩn đánh giá đầu vào, đầu ra cho thành viên.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Từng bước kết hợp với các đơn vị tổ chức các diễn đàn về học tập, đặc biệt là học ngoại ngữ của hội viên, nâng cao tinh thần tự học, từ tìm tòi sáng tạo.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Tiếp tục duy trì các khoa đào tạo dành cho cán bộ, thủ lĩnh theo hướng nâng cao năng lực tư duy và thành thạo kỹ năng thực hành tổ chức hoạt động Hội.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Phối hợp với các đơn vị, các thế hệ cựu thành viên tổ chức các hoạt động đào tạo, giao lưu hướng nghiệp và tư vấn khởi nghiệp cho các thành viên.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Nghiên cứu tái bản và xuất bản mới ấn phẩm về tổ chức Hội, về các hoạt động trong hội gắn với cá nhân, tâm gương trong lao động, học tập và hoạt động Hội.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Tổ chức phát động các cuộc thi đua học tập, giúp đỡ nhau cùng tiến bộ, tổ chức khen thưởng, trao giải thưởng về học tập cho các thành viên có kết quả tiêu biểu.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Phối hợp Đoàn thanh niên, Hội viên sinh và các tổ chức đoàn thể, tổ chức xã hội tổ chức các hoạt động giao lưu cộng đồng kết hợp với các hoạt động tình nguyện.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Tăng cường phối hợp tổ chức các cuộc thi viết dự án và các cuộc thi về kỹ năng và sáng tạo nhằm khuyến khích cán bộ, hội viên, tình nguyện thể hiện tài năng.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Kết hợp tổ chức các hoạt động tình nguyện xanh, tổ chức hoạt động từ thiện, đa dạng hóa chuyên môn. Phối hợp tổ chức sinh hoạt qua các hoạt động văn thể.
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Phối hợp, khuyến khích thành viên tham gia các hoạt động tìm hiểu về công nghệ, sự kiện về công nghệ 4.0. Nghiên cứu từng bước áp dụng trong hoạt động Hội. 
                </p>
                <p className='col-10 offset-1 tagP'>
                -	Phối hợp và tham gia các hoạt động nghiên cứu khóa học, các khóa đào tạo, các chương trình hội nghị hội thảo nhằm nâng cao năng lực cho thành viên.
                </p>
                <p className='col-10 offset-1 tagP'>
                Tổ chức lễ trưởng thành Hội cho hội viên tiêu biểu không còn điều kiện tham gia thường xuyên nhưng luôn quan tâm, gắn bó và ủng hộ hoạt động Hội.
                </p>
            </div> */}
        </div>
    )
}

export default IntroduleBloodDisplay;