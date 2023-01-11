import Head from 'next/head'
import { lazy, useEffect, useMemo, useState } from 'react'
import Select from 'react-select'
import debounce from 'lodash/debounce'
import RegionType from '../types/RegionType'

const options: RegionType[] = [
  { value: 'africa', label: 'Africa' },
  { value: 'americas', label: 'Americas' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
];

const Countries = lazy(() => import("../components/countries"))

export default function Home() {
  const [isClearable, setIsClearable] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState({})
  const [countries, setCountries] = useState([])

  useEffect(() => {
    searchAndSetCountries('/all')
  }, []);

  const searchAndSetCountries = (url:string) => {
    fetch(process.env.NEXT_PUBLIC_REST_COUNTRIES_API_BASE_URL + url)
    .then((response) => response.json())
    .then((data) => setCountries(data))    
  }

  const debouncedSearchCountry = useMemo(() => debounce(function(e: Event) {
    if (e.target.value) {
      return searchAndSetCountries('/name/' + e.target.value)
    }

    return searchAndSetCountries('/all')
  }, 500), [])

  const filterByRegion = (region: RegionType) => {
    setSelectedRegion(region)
  }
  
  return (
    <>
      <Head>
        <title>REST Countries API with color theme switcher coding challenge</title>
        <meta name="description" content="REST Countries API with color theme switcher coding challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col sm:flex-row justify-between gap-y-4 mt-10'>
        <div className='relative flex flex-col content-center shadow-sm'>
          <i className="fa-solid fa-magnifying-glass absolute top-4 left-6"></i>
          <input
            type="text"
            className="px-20 py-3 rounded-sm dark:bg-dark_mode_elements"
            placeholder='Search for a country...'
            onChange={debouncedSearchCountry}
          />
        </div>
        <Select
          isClearable={isClearable}
          onChange={filterByRegion}
          options={options}
          instanceId='region-filter'
          placeholder='Filter by Region'
          className='w-60'
          classNames={{
            control: (state) => ('dark:bg-dark_mode_elements'),
            menu: (state) => ('dark:bg-dark_mode_elements'),
            option: (state) => ('dark:text-dark_mode_text_and_light_mode_elements dark:hover:text-light_mode_text'),
            singleValue: (state) => ('dark:text-dark_mode_text_and_light_mode_elements')
          }}
        />
      </div>
      <section className="dark:text-dark_mode_text_and_light_mode_elements body-font mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-16">
          <Countries
            countries={countries}
            selectedRegion={selectedRegion}
          />
        </div>
      </section>
    </>
  )
}
