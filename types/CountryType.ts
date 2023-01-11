export default interface CountryType {
    name: {
        official: string
    },
    population: number,
    region: string,
    capital: string[],
    ccn3: number,
    flags: {
        png: string
    }
}