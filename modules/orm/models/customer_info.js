const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	sequelize.define('customer_info', {
		APP_REF_ID: {
			allowNull: false,
			autoIncrement: false,
			primaryKey: true,
			type: DataTypes.STRING(50)
		},
		CHANNEL_ID: {
			allowNull: true,
			type: DataTypes.STRING(50)
		},
		IS_ETB: {
			allowNull: true,
			type: DataTypes.STRING(50)
		},
		IS_ELIGIBLE: {
			allowNull: true,
			type: DataTypes.STRING(50)
		},
		CUST_ID: {
			allowNull: true,
			type: DataTypes.STRING(50)
		},
		MOBILE_NO: {
			allowNull: true,
			type: DataTypes.STRING(20)
		},
		PAN: {
			allowNull: true,
			type: DataTypes.STRING(10)
		},
		DEVICE_ID: {
			allowNull: true,
			type: DataTypes.STRING,
		},
		DEL_FLG: {
			allowNull: true,
			type: DataTypes.STRING(10),
		},
		PAN_NAME: {
			allowNull: true,
			type: DataTypes.STRING(50),
		},
		ACCOUNT_NO: {
			allowNull: true,
			type: DataTypes.STRING(50),
		},
		MATCH_PERCENT: {
			allowNull: true,
			type: DataTypes.STRING(50),
		},
		CREATED_BY: {
			allowNull: true,
			type: DataTypes.STRING(50),
		},
		CREATED_DATE: {
			allowNull: true,
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW
		},
		UPDATED_BY: {
			allowNull: true,
			type: DataTypes.STRING(50),
		},
		UPDATED_DATE: {
			allowNull: true,
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW
		}
	})
};
