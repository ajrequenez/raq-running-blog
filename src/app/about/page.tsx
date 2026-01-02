import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, NikeRunClubIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: 'My running story and what this blog is all about.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
            Hey, I&apos;m Raq. Runner in progress. Storyteller by nature.
            Collecting miles one step at a time.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              This blog is my record of the journey—from where I am now to where
              I hope to be: standing on the starting line of a full marathon
              next year. Some days that journey looks like strong training runs
              and small victories. Other days it looks like sore legs, missed
              paces, and learning how to keep going anyway.
            </p>

            <p>
              Running has become more than workouts and race bibs for me.
              It&apos;s about getting healthier, losing weight the sustainable
              way, building discipline, and reshaping my mindset. It&apos;s
              about showing up even when motivation is low and progress feels
              slow.
            </p>

            <p>
              Here you&apos;ll find honest race recaps, training notes, lessons
              learned the hard way, and the mental side of chasing a goal that
              feels just out of reach. I&apos;m not here to pretend every run is
              magical—I&apos;m here to document what it actually takes.
            </p>

            <p>
              I believe progress counts, no matter the pace. I believe
              consistency beats perfection. And I believe every mile—good or
              bad—adds up to something meaningful.
            </p>

            <p>
              If you&apos;re on your own path toward a big goal, or just trying
              to become a healthier version of yourself, you&apos;re in the
              right place.
            </p>

            <p>
              See you out there—on the road, the trail, or somewhere in the
              middle of the grind.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/ajrequenez" icon={GitHubIcon}>
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.nike.com/member/profile"
              icon={NikeRunClubIcon}
              className="mt-4"
            >
              Follow on Nike Run Club
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
