module.exports = function(sequelize, DataTypes) {
    var <%= restCapitalName %> = sequelize.define('<%= restCapitalName %>', {
        'name': {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        associate: function(models) {
            //<%= restCapitalName %>.hasMany(models['A']);
        }
    });

    return <%= restCapitalName %>;
};