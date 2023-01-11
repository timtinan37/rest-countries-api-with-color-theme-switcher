import { isEmpty } from 'lodash'
import CountryType from '../types/CountryType'
import RegionType from '../types/RegionType'
import Country from './country'

interface Props {
    countries: CountryType[],
    selectedRegion: RegionType
}

export default function Countries({ countries, selectedRegion }: Props) {
    return (
        <>
            {
                Array.isArray(countries)
                ? countries.map((country: CountryType) => {
                    return (
                        isEmpty(selectedRegion) || selectedRegion.label === country.region
                        ? <Country country={country} key={country.name.official} />
                        : null
                    )
                })
                : null
            }
        </>
    )
}