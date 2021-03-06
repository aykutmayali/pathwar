// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Organization = sequelize.define('organization', {
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
    name: {
      type: DataTypes.STRING,
    },
    gravatarUrl: {
      type: DataTypes.STRING,
    },
    locale: {
      type: DataTypes.STRING,
    },
    deletionStatus: {
      type: DataTypes.INTEGER,
    },
    soloSeason: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'organization',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Organization.associate = (models) => {
    Organization.hasMany(models.organizationMember, {
      foreignKey: {
        name: 'organizationIdKey',
        field: 'organization_id',
      },
      as: 'organizationMembers',
    });
    Organization.hasMany(models.team, {
      foreignKey: {
        name: 'organizationIdKey',
        field: 'organization_id',
      },
      as: 'teams',
    });
  };

  return Organization;
};
