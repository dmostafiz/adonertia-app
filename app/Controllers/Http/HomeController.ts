
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class HomeController {

    public async index({ inertia }: HttpContextContract) {

        await User.query()
            .paginate(1, 20)

        // return users
        return inertia.render('Index')
    }

    public async discover({ inertia }: HttpContextContract) {

        // const users = 

        return inertia.render('Discover', {
            users: async () => await User.query(),
            dsf: async () => await User.query(),
            df: async () => await User.query(),
            dfs: async () => await User.query(),

        })

    }
}
