import { FlagIcon, ClockIcon, CurrencyDollarIcon, StarIcon } from '@heroicons/react/24/outline'
import React from 'react';

const features = [
  {
    name: 'Register',
    description:
      'If you are new to our website, Register first then enjoy our services.',
    icon: ClockIcon,
  },
  {
    name: 'Login',
    description:
      'If you are existing user, Login and explore our services.',
    icon: StarIcon,
  },
  {
    name: 'Book your Car',
    description:
      'Explore our services after login and book your prefered car for your trip and enjoy your trip.',
    icon: FlagIcon,
  },
  {
    name: 'Return',
    description:
      'After your trip, return our car safely and review our services.',
    icon: StarIcon,
  },
]

export default function AboutSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl font-semibold leading-7  "style={{ color: 'rgb(248, 161, 63)' }}>How It Works</h1>
          <p className="mt-2 font-bold tracking-tight text-gray-900 sm:text-2xl">
            Steps you need to know how DriveEz works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            If you are new to our website, Please follow the steps and enjoy your trip 
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg custom-bg-color">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
