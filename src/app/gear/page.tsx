import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function GearSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function GearItem({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Gear',
  description: 'Running shoes, watches, and gear I use for training and racing.',
}

export default function Gear() {
  return (
    <SimpleLayout
      title="My Running Gear"
      intro="The shoes, watch, and equipment I rely on for training and racing. Everything here has been tested on countless miles."
    >
      <div className="space-y-20">
        <GearSection title="Shoes">
          <GearItem title="Daily Trainer">
            Add your go-to daily training shoe here. What makes it your
            favorite for easy runs and long miles?
          </GearItem>
          <GearItem title="Race Day Shoe">
            Your race day super shoe. What do you lace up when it&apos;s time
            to go fast?
          </GearItem>
        </GearSection>
        <GearSection title="Watch & Tech">
          <GearItem title="GPS Watch">
            Your running watch of choice. What features do you rely on most
            during training?
          </GearItem>
          <GearItem title="Heart Rate Monitor">
            Chest strap or optical? What do you use to track your effort?
          </GearItem>
        </GearSection>
        <GearSection title="Apparel">
          <GearItem title="Favorite Shorts">
            The shorts you reach for on race day or your favorite long run.
          </GearItem>
          <GearItem title="Go-To Socks">
            The socks that keep you blister-free mile after mile.
          </GearItem>
        </GearSection>
        <GearSection title="Nutrition">
          <GearItem title="Race Fuel">
            Gels, chews, or real food? What keeps you going during long efforts?
          </GearItem>
          <GearItem title="Hydration">
            Your hydration strategy for training and racing.
          </GearItem>
        </GearSection>
      </div>
    </SimpleLayout>
  )
}
