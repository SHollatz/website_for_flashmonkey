module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 255],
          msg:
            "Please enter your first name with at least 1 character but no more than 255."
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 255],
          msg:
            "Please enter your last name with at least 1 character but no more than 255."
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isEmail: true
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 255],
          msg:
            "Please enter your user name with at least 1 character but no more than 255."
        }
      }
    },

  });
  return User;
};

