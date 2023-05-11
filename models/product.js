const DataTypes = require("sequelize");
const db = require("../config/dbconnection")

const Client = db.define('client', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cidade: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    estado: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    cep: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
});

(async () => {
    try {
        await Client.sync(); //{ force: true }
        console.log('Tabela de Cliente criada com sucesso.');

    } catch (error) { 
        console.error('Não foi possível conectar-se ao banco de dados:', error);
    }
})();

module.exports = Client