import { Nunito_Sans } from '@next/font/google'
import { ReactNode } from 'react'
import Navbar from './navbar'

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  weight: ['300', '600', '800']
})

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className={`${nunitoSans.variable} font-sans`}>
      <Navbar />
      <div className="bg-light_mode_background dark:bg-dark_mode_background min-h-screen">
        <div className="font-sans container mx-auto p-4">
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}
