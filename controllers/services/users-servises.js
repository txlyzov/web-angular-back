const usersModel = require('../../models').users;

module.exports = {
  /**
   * Creates User object record in Users table.
   * @param {Body} body Entitry for getting login, email, password from request.
   * @returns {Object} Returns the responce with new created User object.
   **/
  async create(body) {
    const { login, email, password } = body;
    const user = await usersModel.create({
      login,
      email,
      password,
    });

    return user;
  },

  /**
   * Gets all User object records in the Users table.
   * @param {NextFunction} next Parameter for using error handler.
   * @returns {Array|Object} Returns the responce with all User objects from the Users table.
   **/
  async get(next) {
    const users = await usersModel.findAll();
    if (users.length === 0) return next();

    return users;
  },

  /**
   * Gets one User object record by id in Users table.
   * @param {Integer} id User id from request.
   * @param {NextFunction} next Parameter for using error handler.
   * @returns {Object} Returns the responce with one User object from the Users table.
   **/
  async getOne(id, next) {
    const user = await usersModel.findOne({
      where: {
        id,
      },
    });
    if (!user) return next();

    return user;
  },

  /**
   * Update User object record in the Users table.
   * @param {Integer} id User id from request.
   * @param {Body} body Entitry for getting login, email, password from request.
   * @returns {Number} Returns the responce with updated User object from the Users table.
   **/
  async update(id, body) {
    const { login, email, password } = body;
    const result = await usersModel.update(
      {
        login,
        email,
        password,
      },
      {
        where: {
          id,
        },
      },
    );

    return result;
  },

  /**
   * Delete User object record by Id in the Users table.
   * @param {Integer} id User id from request.
   * @returns {Number} Returns the responce with code 200.
   **/
  async delete(id) {
    const result = await usersModel.destroy({
      where: {
        id,
      },
    });

    return result;
  },
};
