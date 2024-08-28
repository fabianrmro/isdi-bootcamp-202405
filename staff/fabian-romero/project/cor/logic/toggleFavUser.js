import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { NotFoundError, SystemError } = errors

export default (userId, targetUserId) => {
    validate.string(userId, 'userId')
    validate.string(targetUserId, 'targetUserId')

    return User.findById(userId).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return User.findById(targetUserId).lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(targetUser => {
                    if (!targetUser) throw new NotFoundError('target user not found')

                    const { favs } = user

                    const index = favs.findIndex(favId => favId.toString() === targetUserId)

                    if (index < 0) {
                        favs.push(targetUserId)
                    } else {
                        favs.splice(index, 1)
                    }

                    return User.updateOne({ _id: userId }, { $set: { favs } })
                        .catch(error => { throw new SystemError(error.message) })
                })
        })
        .then(() => { })
}



