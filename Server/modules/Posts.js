module.exports = (sequelize, DataTypes)=>{
    const Posts  = sequelize.define("Posts", {
        shortBreak:  {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        longBreak:  {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Pomodoro:  {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
    /*Pomodoro:  {
            type: DataTypes.INT,
            allowNull: false,
        },
        ShortBreak:  {
            type: DataTypes.INT,
            allowNull: false,
        },
        LongBreak:  {
            type: DataTypes.INT,
            allowNull: false,
        }, */
    return Posts;
};