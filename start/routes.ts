import Route from '@ioc:Adonis/Core/Route'
import { UserFactory } from 'Database/factories'

Route.get('/', 'HomeController.index')
Route.get('/discover', 'HomeController.discover')







































Route.get('/generate', async () => {

  try {

    const users = await UserFactory
      .with('children', 5)
      .createMany(20)

    return users

  } catch (error) {

    console.log(error)

  }

})
