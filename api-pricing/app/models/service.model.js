module.exports = (sequelize, Sequelize) => {
    const Service = sequelize.define("services", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      libelle: {
        type: Sequelize.STRING
      },
      typ_libelle: {
        type: Sequelize.STRING
      },
      prix: {
        type: Sequelize.FLOAT
      }
    });
  
    return Service;
  };