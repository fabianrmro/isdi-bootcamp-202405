import { User } from '../data/models.js'

import { validate, errors } from 'com'

const { NotFoundError, SystemError } = errors

export default (userId) => {
    validate.string(userId, 'userId')

    return User.findById(userId).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return User.findById(targetUserId).lean()
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(targetUser => {
            if (!targetUser) throw new NotFoundError('target user not found')

            return targetUser.name
        })
}