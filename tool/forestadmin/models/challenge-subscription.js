// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const ChallengeSubscription = sequelize.define('challengeSubscription', {
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.INTEGER,
    },
    closedAt: {
      type: DataTypes.DATE,
    },
    closerId: {
      type: DataTypes.BIGINT,
    },
  }, {
    tableName: 'challenge_subscription',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  ChallengeSubscription.associate = (models) => {
    ChallengeSubscription.belongsTo(models.user, {
      foreignKey: {
        name: 'buyerIdKey',
        field: 'buyer_id',
      },
      as: 'buyer',
    });
    ChallengeSubscription.belongsTo(models.team, {
      foreignKey: {
        name: 'teamIdKey',
        field: 'team_id',
      },
      as: 'team',
    });
    ChallengeSubscription.belongsTo(models.seasonChallenge, {
      foreignKey: {
        name: 'seasonChallengeIdKey',
        field: 'season_challenge_id',
      },
      as: 'seasonChallenge',
    });
    ChallengeSubscription.hasMany(models.challengeValidation, {
      foreignKey: {
        name: 'challengeSubscriptionIdKey',
        field: 'challenge_subscription_id',
      },
      as: 'challengeSubscriptionChallengeValidations',
    });
  };

  return ChallengeSubscription;
};
