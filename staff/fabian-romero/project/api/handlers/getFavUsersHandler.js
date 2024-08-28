import { logic } from 'cor'

export default (req, res, next) => {
    const { userId } = req

    try {
        logic.getFavUsers(userId)
            .then(users => res.json(users))
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}