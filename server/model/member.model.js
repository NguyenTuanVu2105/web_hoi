module.exports = (sequelize, Sequelize) => {
    const Member = sequelize.define('members', {
        fullname: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        date_of_birth: Sequelize.DATE,
        sex: Sequelize.BOOLEAN,
        position: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        professional_level: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        id_card: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        date_range: Sequelize.DATE,
        issued_by: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        phone: Sequelize.INTEGER,
        email: Sequelize.STRING,
        facebook_link: Sequelize.STRING,
        native_land: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        address_now: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        blood_group: Sequelize.STRING,
        number_of_blood_donation: Sequelize.INTEGER,
        rh: Sequelize.STRING,
        date_join_association: Sequelize.DATE,
        status: Sequelize.BOOLEAN,
        information_connect_family: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        operation_unit: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        specific_unit: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        GPA: Sequelize.FLOAT,
        academic_level: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci',
        partymember_or_unionist: Sequelize.TEXT + ' CHARSET utf8 COLLATE utf8_general_ci'
    });
    return Member;
}