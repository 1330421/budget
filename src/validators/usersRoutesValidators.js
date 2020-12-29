import expressValidator from 'express-validator';

const { body } = expressValidator;

class UsersRoutesValidators {

    postValidator() {
        return [
            body('name').exists().withMessage('Le nom de l\'utilisateur doit être mentionné.'),
            ...this.validateEmail(),
            body('password').exists().withMessage('Le mot de passe de l\'utilisateur doit être mentionné.'),
        ];
    }

    putValidator() {
        return [
            body('name').exists().withMessage('Le nom de l\'utilisateur doit être mentionné.'),
            ...this.validateEmail(),
            body('password').exists().withMessage('Le mot de passe de l\'utilisateur doit être mentionné.'),
        ];
    }

    //--------------------
    // Valide l'adresse courriel
    //--------------------
    validateEmail() {
        return [
            body('email')
                .exists().withMessage('L\'adresse courriel de l\'utilisateur doit être mentionné.').bail()
                .isEmail().withMessage('L\'adresse courriel doit être valide')
        ];
    }
}

export default new UsersRoutesValidators();