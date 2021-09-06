module.exports = (sequelize, Sequelize) => {
    const Tarif = sequelize.define("tarifs", {
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
  
    return Tarif;
  };