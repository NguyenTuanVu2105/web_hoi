const db = require("../config/db.config");
const Association = db.association;

exports.ViewAssociation = async (req, res) => {
  try {
    let association = await Association.findOne({
      where: {
        id: 1,
      },
    });
    res.status(200).send({ success: true, message: association });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.UpdateAssociation = async (req, res) => {
  try {
    let association = await Association.findOne({
      where: {
        id: 1,
      },
    });
    if (!association) {
      Association.create({
        id: 1,
        Chutichhoi: req.body.Chutichhoi,
        Phochutich_1: req.body.Phochutich_1,
        Phochutich_2: req.body.Phochutich_2,
        Phochutich_3: req.body.Phochutich_3,
        Phochutich_4: req.body.Phochutich_4,
        Uyvien_1: req.body.Uyvien_1,
        Uyvien_2: req.body.Uyvien_2,
        Namthanhlap: req.body.Namthanhlap,
        Ngaytruyenthong: req.body.Ngaytruyenthong,
        Camtinhvien: req.body.Camtinhvien,
        TNV: req.body.TNV,
        Hoivien: req.body.Hoivien,
        Huongdanvien: req.body.Huongdanvien,
        Huanluyenvien: req.body.Huanluyenvien,
        Canbotangcuong: req.body.Canbotangcuong,
        Tailieu: null,
        TailieuHistory: null,
        LinkTest: null,
      });
      res
        .status(200)
        .send({ success: true, message: "Tạo thành công thông tin!" });
    } else {
      Association.update(
        {
          Chutichhoi: req.body.Chutichhoi,
          Phochutich_1: req.body.Phochutich_1,
          Phochutich_2: req.body.Phochutich_2,
          Phochutich_3: req.body.Phochutich_3,
          Phochutich_4: req.body.Phochutich_4,
          Uyvien_1: req.body.Uyvien_1,
          Uyvien_2: req.body.Uyvien_2,
          Namthanhlap: req.body.Namthanhlap,
          Ngaytruyenthong: req.body.Ngaytruyenthong,
          Camtinhvien: req.body.Camtinhvien,
          TNV: req.body.TNV,
          Hoivien: req.body.Hoivien,
          Huongdanvien: req.body.Huongdanvien,
          Huanluyenvien: req.body.Huanluyenvien,
          Canbotangcuong: req.body.Canbotangcuong,
        },
        {
          where: {
            id: 1,
          },
        }
      );
      res.status(200).send({
        success: true,
        message: "Cập nhập thành công thông tin!",
      });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.viewPDF = async (req, res) => {
  try {
    let association = await Association.findOne({
      where: {
        id: 1,
      },
      attributes: ["Tailieu", "TailieuHistory"],
    });
    res.status(200).send({ success: true, message: association });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.editPDF = async (req, res) => {
  try {
    let association = await Association.findOne({
      where: {
        id: 1,
      },
    });
    if (!association) {
      Association.create({
        id: 1,
        Chutichhoi: null,
        Phochutich_1: null,
        Phochutich_2: null,
        Phochutich_3: null,
        Phochutich_4: null,
        Uyvien_1: null,
        Uyvien_2: null,
        Namthanhlap: null,
        Ngaytruyenthong: null,
        Camtinhvien: null,
        TNV: null,
        Hoivien: null,
        Huongdanvien: null,
        Huanluyenvien: null,
        Canbotangcuong: null,
        Tailieu: req.body.Tailieu,
        TailieuHistory: null,
        LinkTest: null,
      });
      res
        .status(200)
        .send({ success: true, message: "Tạo thành công thông tin!" });
    } else {
      Association.update(
        {
          Tailieu: req.body.Tailieu,
        },
        {
          where: {
            id: 1,
          },
        }
      );
      res.status(200).send({
        success: true,
        message: "Cập nhật thành công thông tin!",
      });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.editPDFHistory = async (req, res) => {
  try {
    let association = await Association.findOne({
      where: {
        id: 1,
      },
    });
    if (!association) {
      Association.create({
        id: 1,
        Chutichhoi: null,
        Phochutich_1: null,
        Phochutich_2: null,
        Phochutich_3: null,
        Phochutich_4: null,
        Uyvien_1: null,
        Uyvien_2: null,
        Namthanhlap: null,
        Ngaytruyenthong: null,
        Camtinhvien: null,
        TNV: null,
        Hoivien: null,
        Huongdanvien: null,
        Huanluyenvien: null,
        Canbotangcuong: null,
        Tailieu: null,
        TailieuHistory: req.body.TailieuHistory,
        LinkTest: null,
      });
      res
        .status(200)
        .send({ success: true, message: "Tạo thành công thông tin!" });
    } else {
      Association.update(
        {
          TailieuHistory: req.body.TailieuHistory,
        },
        {
          where: {
            id: 1,
          },
        }
      );
      res.status(200).send({
        success: true,
        message: "Cập nhập thành công thông tin!",
      });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.editLinkTest = async (req, res) => {
  try {
    let association = await Association.findOne({
      where: {
        id: 1,
      },
    });
    if (!association) {
      Association.create({
        id: 1,
        Chutichhoi: null,
        Phochutich_1: null,
        Phochutich_2: null,
        Phochutich_3: null,
        Phochutich_4: null,
        Uyvien_1: null,
        Uyvien_2: null,
        Namthanhlap: null,
        Ngaytruyenthong: null,
        Camtinhvien: null,
        TNV: null,
        Hoivien: null,
        Huongdanvien: null,
        Huanluyenvien: null,
        Canbotangcuong: null,
        Tailieu: null,
        TailieuHistory: null,
        LinkTest: req.body.LinkTest,
      });
      res
        .status(200)
        .send({ success: true, message: "Tạo thành công thông tin!" });
    } else {
      Association.update(
        {
          LinkTest: req.body.LinkTest,
        },
        {
          where: {
            id: 1,
          },
        }
      );
      res.status(200).send({
        success: true,
        message: "Cập nhập thành công thông tin!",
      });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.viewLinkTest = async (req, res) => {
  try {
    let association = await Association.findOne({
      where: {
        id: 1,
      },
      attributes: ["LinkTest"],
    });
    res.status(200).send({ success: true, message: association });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};
