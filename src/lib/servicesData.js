import { FaElevator } from "react-icons/fa6"
export const services = [
  {
    id: 1,
    slug: 'lift-installation',
    icon:  <FaElevator className="text-2xl text-orange-500" />,
    title: 'Lift Import & Installation',
    shortDescription:
      'We import and professionally install high-quality lifts for residential and, commercial, and industrial buildings.',
    fullDescription: `We offer complete lift installation solutions tailored to your building's structure and usage needs. From planning to final setup, our team ensures precision, safety, and aesthetic integration. Ideal for high-rise buildings, apartments, and commercial spaces.`
  },
  {
    id: 2,
    slug: 'lift-maintenance',
    icon: '⚡',
    title: 'Power Substation Manufacturing',
    shortDescription: 'We manufacture reliable and robust substations to provide stable and efficient power distribution for your projects.',
    fullDescription: `Our maintenance services keep your lifts running safely and smoothly. Regular inspections, prompt issue resolution, and component lubrication are part of our comprehensive maintenance plan.`
  },
  {
    id: 3,
    slug: 'modernization',
    title: 'Generator Supply & Installation',
    icon: '🔋',
    shortDescription: 'Importing and supplying a range of high-performance generators to ensure uninterrupted power for your home or business.',
    fullDescription: `Upgrade your old lift system with the latest safety features and efficient technology. Improve energy efficiency, aesthetics, and compliance with regulations.`
  }
]
