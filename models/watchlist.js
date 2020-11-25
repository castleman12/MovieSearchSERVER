module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define('watchlist', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    posterPath: {
      type: DataTypes.STRING
    },
    movieDBid: {
      type: DataTypes.INTEGER
    },
    releaseDate: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    watched: {
      type: DataTypes.BOOLEAN
    },
    uniqueCheck: {
      type: DataTypes.STRING,
      unique: true
    }
  })
  return Watchlist;
}