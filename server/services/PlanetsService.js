import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"



class PlanetsService {
  async createPlanet(planetData) {
    const galaxy = await dbContext.Galaxies.findById(planetData.galaxyId)
    if(!galaxy) {
      throw new BadRequest('There is no galaxy with the ID' + planetData.galaxyId)
    }


    const planet = await dbContext.Planets.create(planetData) 
  }
  async getPlanets() {
    const planets = await dbContext.Planets.find()
    return planets
  }

}

export const planetsService = new PlanetsService