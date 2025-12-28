import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const races = [
  {
    name: 'Your First Race',
    date: '2025',
    distance: '5K',
    description: 'Add your first race here. Share your experience and what you learned.',
    status: 'upcoming',
  },
  {
    name: 'Goal Race',
    date: '2025',
    distance: 'Half Marathon',
    description: 'Set your goal race here. What are you training for?',
    status: 'goal',
  },
]

function CalendarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1ZM4 8h16v12H4V8Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Races',
  description: 'My race calendar and running goals.',
}

export default function Races() {
  return (
    <SimpleLayout
      title="Races & Goals"
      intro="My race calendar and running goals. Every race is an opportunity to learn, grow, and push my limits."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {races.map((race) => (
          <Card as="li" key={race.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <CalendarIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {race.name}
            </h2>
            <Card.Description>{race.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 dark:text-zinc-200">
              <span>{race.distance}</span>
              <span className="mx-2">·</span>
              <span>{race.date}</span>
              <span className="mx-2">·</span>
              <span className={race.status === 'goal' ? 'text-teal-500' : ''}>
                {race.status === 'goal' ? 'Goal Race' : 'Upcoming'}
              </span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
