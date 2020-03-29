'use strict';

module.exports = (sequelize, DataTypes) => {
    const examples = sequelize.define('examples', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { 
        timestamps: false
    });
    
    return examples;
};