let petsDb= require('../database/pets.db')

exports.getSpeciesAverageAge = async species_name => {

    let birthDatesBySpecies = await petsDb.getbirthDatesBySpecies(species_name)

    const birthDates = birthDatesBySpecies.map((r) => r.birthDate)
    const currentDate = new Date()
    const ages = birthDates.map((birthDate) => {
    const diffTime = Math.abs(currentDate - new Date(birthDate))
    return Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365))
    })

    const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length
    const standardDeviation = Math.sqrt(
    ages.reduce((sum, age) => sum + Math.pow(age - averageAge, 2), 0) /
        ages.length
    );

    return {
                averageAge: averageAge.toFixed(2),
                standardDeviation: standardDeviation.toFixed(2)
            }

}