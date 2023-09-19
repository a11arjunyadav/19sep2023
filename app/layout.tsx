// Import area
// Import './somelocation';
import './globals.css'
// Imprt { NamedImport } from 'libray';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
/*
* Java script;
{
  proprty:value;
  ;propry:value;
}
*/
export const metadata: Metadata = {
  title: 'Justdial - Local Search, Social, News, Videos, Shopping',
  description: `Justdial, India&#x27;s local search engine, provides Best Deals, Shop Online, Ticket Booking for Flights, Hotels, Movies, Buses and Cabs. You can also Order Food, Book Restaurant Table, View Menu, Book Doctors’ Appointments. Justdial curates Social content, News, Videos &amp; more from Top Publishers on all Trending Topics." class="jsx-45abaff37702448b`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
