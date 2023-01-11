import Image from "next/image"
import CountryType from "../types/CountryType"

interface Props {
    country: CountryType
}

export default function Country({ country }: Props) {
    return (
        <div className="dark:bg-dark_mode_elements border-opacity-60 rounded-lg shadow-lg overflow-hidden">
            <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={country.flags.png}
                alt="{country.name.official}"
                width={500}
                height={500}
            />
            <div className="p-6">
                <h1 className="title-font text-lg font-extrabold mb-3">{country.name.official}</h1>
                <p className="font-thin"><span className="font-semibold">Population:</span> {country.population}</p>
                <p className="font-thin"><span className="font-semibold">Region:</span> {country.region}</p>
                {
                    country.capital
                    ? <p className="font-thin"><span className="font-semibold">Capital:</span> {country.capital[0]}</p>
                    : null
                }
            </div>
        </div>
    )
}
