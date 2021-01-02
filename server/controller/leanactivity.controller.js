const db = require("../config/db.config");
const Member = db.member;
const School = db.school;
const Club = db.club;
const Position = db.position;
const Specialized = db.specialized;
const Branch = db.branch;

exports.getLearnActivity = async (req, res) => {
  try {
    let member = await Member.findOne({
      where: {
        userId: req.userId,
      },
    });
    let information = await School.findOne({
      where: {
        memberId: member.id,
      },
    });
    res.status(200).send({ success: true, data: information });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.getActivity = async (req, res) => {
  try {
    let information = await Member.findOne({
      where: {
        userId: req.userId,
      },
      attributes: ["NgayvaoHoi", "TinhtrangHD"],
      include: [
        {
          model: Position,
          attributes: ["Chucvu"],
        },
        {
          model: Specialized,
          attributes: ["Bacchuyenmon"],
        },
        {
          model: Club,
          attributes: ["Tendoi"],
          include: [
            {
              model: Branch,
              attributes: ["Tenchihoi"],
            },
          ],
        },
      ],
    });
    res.status(200).send({
      success: true,
      data: {
        NgayvaoHoi: information.NgayvaoHoi,
        TinhtrangHD: information.TinhtrangHD,
        Bacchuyenmon: information.specialized.Bacchuyenmon,
        Chucvu: information.position.Chucvu,
        Tendoi: information.club.Tendoi,
        Tenchihoi: information.club.branch.Tenchihoi,
      },
    });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.getActivityAdmin = async (req, res) => {
  try {
    let information = await Member.findOne({
      where: {
        userId: req.query.id,
      },
      attributes: ["NgayvaoHoi", "TinhtrangHD"],
      include: [
        {
          model: Position,
          attributes: ["Chucvu"],
        },
        {
          model: Specialized,
          attributes: ["Bacchuyenmon"],
        },
        {
          model: Club,
          attributes: ["Tendoi"],
          include: [
            {
              model: Branch,
              attributes: ["Tenchihoi"],
            },
          ],
        },
      ],
    });
    res.status(200).send({
      success: true,
      data: {
        NgayvaoHoi: information.NgayvaoHoi,
        TinhtrangHD: information.TinhtrangHD,
        Bacchuyenmon: information.specialized.Bacchuyenmon,
        Chucvu: information.position.Chucvu,
        Tendoi: information.club.Tendoi,
        Tenchihoi: information.club.branch.Tenchihoi,
      },
    });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.editLearnActivity = async (req, res) => {
  try {
    let member = await Member.findOne({
      where: {
        userId: req.userId,
      },
    });
    let school = await School.findOne({
      where: {
        memberId: member.id,
      },
    });
    if (!school) {
      School.create({
        Truong: req.body.truong,
        Lop: req.body.lop,
        Nganh: req.body.nganh,
        GPA: req.body.gpa,
        HT_Namhoc_Mot: req.body.learn_namhoc_mot,
        HT_Kihoc_Mot: req.body.learn_kihoc_mot,
        HT_Lydo_Mot: req.body.learn_lydo_mot,
        HT_Namhoc_Hai: req.body.learn_namhoc_hai,
        HT_Kihoc_Hai: req.body.learn_kihoc_hai,
        HT_Lydo_Hai: req.body.learn_lydo_hai,
        HT_Namhoc_Ba: req.body.learn_namhoc_ba,
        HT_Kihoc_Ba: req.body.learn_kihoc_ba,
        HT_Lydo_Ba: req.body.learn_lydo_ba,
        HT_Namhoc_Bon: req.body.learn_namhoc_bon,
        HT_Kihoc_Bon: req.body.learn_kihoc_bon,
        HT_Lydo_Bon: req.body.learn_lydo_bon,
        HT_Namhoc_Nam: req.body.learn_namhoc_nam,
        HT_Kihoc_Nam: req.body.learn_kihoc_nam,
        HT_Lydo_Nam: req.body.learn_lydo_nam,
        HD_Namhoc_Mot: req.body.learn_namhoc_mot,
        HD_Kihoc_Mot: req.body.learn_kihoc_mot,
        HD_Lydo_Mot: req.body.learn_lydo_mot,
        HD_Namhoc_Hai: req.body.learn_namhoc_hai,
        HD_Kihoc_Hai: req.body.learn_kihoc_hai,
        HD_Lydo_Hai: req.body.learn_lydo_hai,
        HD_Namhoc_Ba: req.body.learn_namhoc_ba,
        HD_Kihoc_Ba: req.body.learn_kihoc_ba,
        HD_Lydo_Ba: req.body.learn_lydo_ba,
        HD_Namhoc_Bon: req.body.learn_namhoc_bon,
        HD_Kihoc_Bon: req.body.learn_kihoc_bon,
        HD_Lydo_Bon: req.body.learn_lydo_bon,
        HD_Namhoc_Nam: req.body.learn_namhoc_nam,
        HD_Kihoc_Nam: req.body.learn_kihoc_nam,
        HD_Lydo_Nam: req.body.learn_lydo_nam,
        memberId: member.id,
      });
      res.status(200).send({ success: true, data: "create successful" });
    } else {
      School.update(
        {
          Truong: req.body.truong,
          Lop: req.body.lop,
          Nganh: req.body.nganh,
          GPA: req.body.gpa,
          HT_Namhoc_Mot: req.body.learn_namhoc_mot,
          HT_Kihoc_Mot: req.body.learn_kihoc_mot,
          HT_Lydo_Mot: req.body.learn_lydo_mot,
          HT_Namhoc_Hai: req.body.learn_namhoc_hai,
          HT_Kihoc_Hai: req.body.learn_kihoc_hai,
          HT_Lydo_Hai: req.body.learn_lydo_hai,
          HT_Namhoc_Ba: req.body.learn_namhoc_ba,
          HT_Kihoc_Ba: req.body.learn_kihoc_ba,
          HT_Lydo_Ba: req.body.learn_lydo_ba,
          HT_Namhoc_Bon: req.body.learn_namhoc_bon,
          HT_Kihoc_Bon: req.body.learn_kihoc_bon,
          HT_Lydo_Bon: req.body.learn_lydo_bon,
          HT_Namhoc_Nam: req.body.learn_namhoc_nam,
          HT_Kihoc_Nam: req.body.learn_kihoc_nam,
          HT_Lydo_Nam: req.body.learn_lydo_nam,
          HD_Namhoc_Mot: req.body.learn_namhoc_mot,
          HD_Kihoc_Mot: req.body.learn_kihoc_mot,
          HD_Lydo_Mot: req.body.learn_lydo_mot,
          HD_Namhoc_Hai: req.body.learn_namhoc_hai,
          HD_Kihoc_Hai: req.body.learn_kihoc_hai,
          HD_Lydo_Hai: req.body.learn_lydo_hai,
          HD_Namhoc_Ba: req.body.learn_namhoc_ba,
          HD_Kihoc_Ba: req.body.learn_kihoc_ba,
          HD_Lydo_Ba: req.body.learn_lydo_ba,
          HD_Namhoc_Bon: req.body.learn_namhoc_bon,
          HD_Kihoc_Bon: req.body.learn_kihoc_bon,
          HD_Lydo_Bon: req.body.learn_lydo_bon,
          HD_Namhoc_Nam: req.body.learn_namhoc_nam,
          HD_Kihoc_Nam: req.body.learn_kihoc_nam,
          HD_Lydo_Nam: req.body.learn_lydo_nam,
        },
        {
          where: {
            memberId: member.id,
          },
        }
      );
      res.status(200).send({ success: true, data: "Update successful!" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.getLearnActivityAdmin = async (req, res) => {
  try {
    let information = await School.findOne({
      where: {
        memberId: req.query.id,
      },
    });
    res.status(200).send({ success: true, data: information });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.editLearnActivityAdmin = async (req, res) => {
  try {
    let school = await School.findOne({
      where: {
        memberId: req.body.id,
      },
    });
    if (!school) {
      School.create({
        Truong: req.body.truong,
        Lop: req.body.lop,
        Nganh: req.body.nganh,
        GPA: req.body.gpa,
        HT_Namhoc_Mot: req.body.learn_namhoc_mot,
        HT_Kihoc_Mot: req.body.learn_kihoc_mot,
        HT_Lydo_Mot: req.body.learn_lydo_mot,
        HT_Namhoc_Hai: req.body.learn_namhoc_hai,
        HT_Kihoc_Hai: req.body.learn_kihoc_hai,
        HT_Lydo_Hai: req.body.learn_lydo_hai,
        HT_Namhoc_Ba: req.body.learn_namhoc_ba,
        HT_Kihoc_Ba: req.body.learn_kihoc_ba,
        HT_Lydo_Ba: req.body.learn_lydo_ba,
        HT_Namhoc_Bon: req.body.learn_namhoc_bon,
        HT_Kihoc_Bon: req.body.learn_kihoc_bon,
        HT_Lydo_Bon: req.body.learn_lydo_bon,
        HT_Namhoc_Nam: req.body.learn_namhoc_nam,
        HT_Kihoc_Nam: req.body.learn_kihoc_nam,
        HT_Lydo_Nam: req.body.learn_lydo_nam,
        HD_Namhoc_Mot: req.body.learn_namhoc_mot,
        HD_Kihoc_Mot: req.body.learn_kihoc_mot,
        HD_Lydo_Mot: req.body.learn_lydo_mot,
        HD_Namhoc_Hai: req.body.learn_namhoc_hai,
        HD_Kihoc_Hai: req.body.learn_kihoc_hai,
        HD_Lydo_Hai: req.body.learn_lydo_hai,
        HD_Namhoc_Ba: req.body.learn_namhoc_ba,
        HD_Kihoc_Ba: req.body.learn_kihoc_ba,
        HD_Lydo_Ba: req.body.learn_lydo_ba,
        HD_Namhoc_Bon: req.body.learn_namhoc_bon,
        HD_Kihoc_Bon: req.body.learn_kihoc_bon,
        HD_Lydo_Bon: req.body.learn_lydo_bon,
        HD_Namhoc_Nam: req.body.learn_namhoc_nam,
        HD_Kihoc_Nam: req.body.learn_kihoc_nam,
        HD_Lydo_Nam: req.body.learn_lydo_nam,
        memberId: req.body.id,
      });
      res.status(200).send({ success: true, data: "create successful!" });
    } else {
      School.update(
        {
          Truong: req.body.truong,
          Lop: req.body.lop,
          Nganh: req.body.nganh,
          GPA: req.body.gpa,
          HT_Namhoc_Mot: req.body.learn_namhoc_mot,
          HT_Kihoc_Mot: req.body.learn_kihoc_mot,
          HT_Lydo_Mot: req.body.learn_lydo_mot,
          HT_Namhoc_Hai: req.body.learn_namhoc_hai,
          HT_Kihoc_Hai: req.body.learn_kihoc_hai,
          HT_Lydo_Hai: req.body.learn_lydo_hai,
          HT_Namhoc_Ba: req.body.learn_namhoc_ba,
          HT_Kihoc_Ba: req.body.learn_kihoc_ba,
          HT_Lydo_Ba: req.body.learn_lydo_ba,
          HT_Namhoc_Bon: req.body.learn_namhoc_bon,
          HT_Kihoc_Bon: req.body.learn_kihoc_bon,
          HT_Lydo_Bon: req.body.learn_lydo_bon,
          HT_Namhoc_Nam: req.body.learn_namhoc_nam,
          HT_Kihoc_Nam: req.body.learn_kihoc_nam,
          HT_Lydo_Nam: req.body.learn_lydo_nam,
          HD_Namhoc_Mot: req.body.learn_namhoc_mot,
          HD_Kihoc_Mot: req.body.learn_kihoc_mot,
          HD_Lydo_Mot: req.body.learn_lydo_mot,
          HD_Namhoc_Hai: req.body.learn_namhoc_hai,
          HD_Kihoc_Hai: req.body.learn_kihoc_hai,
          HD_Lydo_Hai: req.body.learn_lydo_hai,
          HD_Namhoc_Ba: req.body.learn_namhoc_ba,
          HD_Kihoc_Ba: req.body.learn_kihoc_ba,
          HD_Lydo_Ba: req.body.learn_lydo_ba,
          HD_Namhoc_Bon: req.body.learn_namhoc_bon,
          HD_Kihoc_Bon: req.body.learn_kihoc_bon,
          HD_Lydo_Bon: req.body.learn_lydo_bon,
          HD_Namhoc_Nam: req.body.learn_namhoc_nam,
          HD_Kihoc_Nam: req.body.learn_kihoc_nam,
          HD_Lydo_Nam: req.body.learn_lydo_nam,
        },
        {
          where: {
            memberId: req.body.id,
          },
        }
      );
      res.status(200).send({ success: true, data: "update successful!" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};
