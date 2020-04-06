module.exports = function(sequelize, DataTypes){
    const Followers = sequelize.define('Followers', {
        userId: DataTypes.STRING,
        followers: DataTypes.STRING,
        following: DataTypes.STRING,
    })
    return Followers
}