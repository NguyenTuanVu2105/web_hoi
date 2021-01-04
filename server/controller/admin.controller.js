const db = require("../config/db.config");
const Branch = db.branch;
const Club = db.club;
const Member = db.member;
const User = db.user;
const Position = db.position;
const Specialized = db.specialized;
const Op = db.Sequelize.Op;

exports.ViewMemberInformation = async (req, res) => {
  try {
    page = parseInt(req.query.page);
    limit = 10;
    queryMember = {};
    if (req.query.hovaten) {
      queryMember["Hovaten"] = { [Op.like]: `%` + req.query.hovaten + `%` };
    }
    if (req.query.nhommau) {
      queryMember["Nhommau"] = req.query.nhommau;
    }
    if (req.query.quequan) {
      queryMember["Quequan"] = { [Op.like]: `%` + req.query.quequan + `%` };
    }
    if (req.query.ngaysinh) {
      queryMember["Op.and"] = db.Sequelize.where(
        db.Sequelize.fn("YEAR", db.Sequelize.col("ngaysinh")),
        req.query.ngaysinh
      );
    }
    if (req.query.clubId) {
      queryMember["clubId"] = req.query.clubId;
    }
    let user = await User.findOne({
      where: {
        id: req.userId,
      },
    });

    let member = await Member.findOne({
      where: {
        userId: req.userId,
      },
      attributes: ["clubId"],
      include: {
        model: Club,
        attributes: ["branchId"],
      },
    });

    // Kiểm tra quyền hội trưởng
    if (user.role === "hoitruong") {
      if (
        !req.query.hovaten &&
        !req.query.nhommau &&
        !req.query.quequan &&
        !req.query.ngaysinh &&
        !req.query.clubId &&
        !req.query.branchId
      ) {
        let information = await Member.findAndCountAll({
          limit: limit,
          offset: (page - 1) * limit,
          include: [
            {
              model: Position,
            },
            {
              model: Specialized,
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
          total: information.count,
          data: information.rows,
        });
      } else if (
        !req.query.hovaten &&
        !req.query.nhommau &&
        !req.query.quequan &&
        !req.query.ngaysinh &&
        !req.query.clubId &&
        req.query.branchId
      ) {
        let information = await Member.findAndCountAll({
          limit: limit,
          offset: (page - 1) * limit,
          include: [
            {
              model: Position,
            },
            {
              model: Specialized,
            },
            {
              model: Club,
              where: {
                branchId: req.query.branchId,
              },
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
          total: information.count,
          data: information.rows,
        });
      } else if (!req.query.branchId) {
        let information = await Member.findAndCountAll({
          limit: limit,
          offset: (page - 1) * limit,
          where: queryMember,
          include: [
            {
              model: Position,
            },
            {
              model: Specialized,
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
          total: information.count,
          data: information.rows,
        });
      } else {
        let information = await Member.findAndCountAll({
          limit: limit,
          offset: (page - 1) * limit,
          where: queryMember,
          include: [
            {
              model: Position,
            },
            {
              model: Specialized,
            },
            {
              model: Club,
              where: {
                branchId: req.query.branchId,
              },
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
          total: information.count,
          data: information.rows,
        });
      }

      // Kiểm tra quyền chi hội trưởng
    } else if (user.role === "chihoitruong") {
      if (
        (!req.query.hovaten &&
          !req.query.nhommau &&
          !req.query.quequan &&
          !req.query.ngaysinh &&
          !req.query.clubId &&
          !req.query.branchId) ||
        (!req.query.hovaten &&
          !req.query.nhommau &&
          !req.query.quequan &&
          !req.query.ngaysinh &&
          !req.query.clubId &&
          req.query.branchId)
      ) {
        let information = await Member.findAndCountAll({
          limit: limit,
          offset: (page - 1) * limit,
          include: [
            {
              model: Position,
              where: {
                Capbac: {
                  [Op.gte]: 3,
                },
              },
            },
            {
              model: Specialized,
            },
            {
              model: Club,
              where: {
                branchId: member.club.branchId,
              },
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
          total: information.count,
          data: information.rows,
        });
      } else {
        let information = await Member.findAndCountAll({
          limit: limit,
          offset: (page - 1) * limit,
          where: queryMember,
          include: [
            {
              model: Position,
              where: {
                Capbac: {
                  [Op.gte]: 3,
                },
              },
            },
            {
              model: Specialized,
            },
            {
              model: Club,
              where: {
                branchId: member.club.branchId,
              },
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
          total: information.count,
          data: information.rows,
        });
      }

      // Kiểm tra quyền đội trưởng
    } else {
      if (
        (!req.query.hovaten &&
          !req.query.nhommau &&
          !req.query.quequan &&
          !req.query.ngaysinh &&
          !req.query.clubId &&
          !req.query.branchId) ||
        (!req.query.hovaten &&
          !req.query.nhommau &&
          !req.query.quequan &&
          !req.query.ngaysinh &&
          !req.query.clubId &&
          req.query.branchId)
      ) {
        let information = await Member.findAndCountAll({
          limit: limit,
          offset: (page - 1) * limit,
          include: [
            {
              model: Position,
              where: {
                Capbac: {
                  [Op.gte]: 2,
                },
              },
            },
            {
              model: Specialized,
            },
            {
              model: Club,
              where: {
                id: member.clubId,
              },
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
          total: information.count,
          data: information.rows,
        });
      } else {
        let information = await Member.findAndCountAll({
          limit: limit,
          offset: (page - 1) * limit,
          where: queryMember,
          include: [
            {
              model: Position,
              where: {
                Capbac: {
                  [Op.gte]: 2,
                },
              },
            },
            {
              model: Specialized,
            },
            {
              model: Club,
              where: {
                id: member.clubId,
                branchId: req.query.branchId,
              },
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
          total: information.count,
          data: information.rows,
        });
      }
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.ViewMemberLA = async (req, res) => {
  try {
    let user = await User.findOne({
      where: {
        id: req.userId,
      },
    });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.BranchClubInformation = async (req, res) => {
  try {
    let branch = await Branch.findAll({
      attributes: ["id", "Machihoi", "Tenchihoi"],
      include: [
        {
          model: Club,
          attributes: ["id", "Madoi", "Tendoi", "branchId"],
        },
      ],
    });
    res.status(200).send({ success: true, data: branch });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.LeaderAssociation = async (req, res) => {
  try {
    let members = await Member.findAll({
      attributes: [
        "Image",
        "Hovaten",
        "ThoigianHD",
        "TinhtrangHD",
        "Ghichukhac",
      ],
      include: [
        {
          model: Position,
          where: {
            Chucvu: "Chủ tịch",
          },
          attributes: ["Chucvu"],
        },
      ],
    });
    res.status(200).send({ success: true, data: members });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.editRoles = async (req, res) => {
  try {
    await User.update(
      {
        role: req.body.role,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    let user = await User.findOne({
      where: {
        id: req.body.id,
      },
    });

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};

exports.viewRoles = async (req, res) => {
  try {
    let member = await Member.findOne({
      where: {
        id: req.query.userId,
      },
    });
    let roles = await User.findOne({
      where: {
        id: member.userId,
      },
      attributes: ["id", "role"],
    });
    res.status(200).send({ success: true, message: roles });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error -> " + error });
  }
};
