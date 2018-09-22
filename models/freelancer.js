module.exports = function (sequelize, DataTypes) {
    var Freelancer = sequelize.define("Freelancer", {
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        portfolio: DataTypes.STRING,
        bio: DataTypes.TEXT,
        role: DataTypes.STRING,
        skills: DataTypes.STRING,
        email: DataTypes.STRING
    });
    return Freelancer;
};