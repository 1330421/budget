import express from 'express';
import httpError from 'http-errors';
import _ from 'lodash';

// Validateurs
import usersRoutesValidators from '../validators/usersRoutesValidators.js';
import validator from '../utils/validator.js';

// Services
import usersService from '../services/usersService.js';

const router = express.Router();

class UsersRoutes {

    constructor() {
        router.post('/', usersRoutesValidators.postValidator(), validator, this.post);
        router.get('/', this.getAll);
        router.put('/:idUser', usersRoutesValidators.putValidator(), validator, this.put);
    }

    async post(req, res, next) {

        if (_.isEmpty(req.body)) return next(httpError.BadRequest());

        try {
            let user = await usersService.create(req.body);
            user = usersService.transform(user.toObject());
            res.status(201).json(user);
        } catch (error) {
            return next(error);
        }
    }

    async getAll(req, res, next) {
        const options = {};
        if (req.query.userName) options.userName = req.query.userName;

        try {
            let user = await usersService.retrieveByName(options);
            if (!user) return next(httpError.NotFound(`L'utilisateur avec le nom ${userName} n'existe pas.`));
            user = user.map(u => usersService.transform(u.toObject()));
            res.status(200).json(user);
        }
        catch (error) {
            return next(error);
        }
    }

    async put(req, res, next) {

        if (_.isEmpty(req.body)) return next(httpError.BadRequest());

        const options = {
            idUser: req.params.idUser,
            updatedUser: req.body
        };

        try {
            let user = await usersService.update(options);
            user = usersService.transform(user.toObject());
            res.status(201).json(user);
        } catch (error) {
            return next(error);
        }
    }
}
new UsersRoutes();

export default router;