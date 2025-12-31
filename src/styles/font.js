import { Poppins, Roboto } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100','300','400','500','700','900'], // Roboto limitation
  variable: '--font-roboto',
  display: 'swap',
})
