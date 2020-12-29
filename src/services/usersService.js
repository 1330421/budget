import User from '../models/user.js';

class UsersService {

    //-------
    // Create
    //-------
    create(user) {
        return User.create(user);
    }

    //---------
    // Retrieve
    //---------
    retrieveByName(options) {
        if (options.userName) return User.find({ name: options.userName });
        return User.find();
    }

    //-------
    // Update
    //-------
    update(options) {
        return User.findByIdAndUpdate({ _id: options.idUser }, options.updatedUser, { new: true });
    }

    //-------
    // Delete
    //-------


    transform(user) {
        user.href = `${process.env.BASE_URL}/users/${user.name}`;

        delete user.__v;
        return user;
    }
}

export default new UsersService();