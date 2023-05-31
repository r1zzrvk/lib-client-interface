import { EPagePaths, THeaderFooter } from '@types'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    header: [
      {
        title: 'Main',
        href: EPagePaths.MAIN,
      },
      {
        title: 'Catalog',
        href: EPagePaths.CATALOG,
      },
      {
        title: 'Service',
        href: '/service',
      },
    ],
    footer: {
      catalog: {
        header: 'Catalog',
        menuItems: [
          {
            text: 'Living room',
            href: '/',
          },
          {
            text: 'Bedroom',
            href: '/',
          },
          {
            text: 'Wardrobe',
            href: '/',
          },
          {
            text: 'Hallway',
            href: '/',
          },
          {
            text: 'Playroom',
            href: '/',
          },
        ],
      },
      information: {
        header: 'Information',
        menuItems: [
          {
            text: 'For investors',
            href: '/',
          },
          {
            text: 'Support',
            href: '/',
          },
          {
            text: 'Politics privacy',
            href: '/',
          },
          {
            text: 'Cookie settings',
            href: '/',
          },
        ],
      },
      service: {
        header: 'Service',
        menuItems: [
          {
            text: 'Profile',
            href: '/',
          },
          {
            text: 'Favorites',
            href: '/',
          },
          {
            text: 'Cart',
            href: '/',
          },
          {
            text: 'Shipping and payment',
            href: '/',
          },
        ],
      },
    },
  } as THeaderFooter)
}
