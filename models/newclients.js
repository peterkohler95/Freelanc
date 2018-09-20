module.exports = function (sequelize, DataTypes) {
    var Candidate = sequelize.define("newClients", {
        full_name: DataTypes.STRING,
        location: DataTypes.STRING,
        references: DataTypes.STRING,
        bio: DataTypes.TEXT,
        role: DataTypes.STRING,
        skills: DataTypes.STRING,
        pay_pal: DataTypes.STRING
    });
    return Candidate;
};