import { DataTypes } from 'sequelize';
import sequelize from '../db/sqlite';

const ApiKeyModel = sequelize.define('ApiKey', {
    key: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
(async function () {
    await ApiKeyModel.sync();
})();

export default ApiKeyModel;
