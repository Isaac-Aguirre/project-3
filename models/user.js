module.exports = function(sequelize, DataTypes){
    const User = sequelize.define('User', {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        followers: DataTypes.STRING,
        following:DataTypes.STRING, 
        username: DataTypes.STRING
    })
    return User
}