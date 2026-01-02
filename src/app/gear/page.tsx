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
  description:
    'Running shoes, watches, and gear I use for training and racing.',
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
            <span className="text-gray-400">Coming soon</span>
          </GearItem>
          <GearItem title="Race Day Shoe">
            <span className="text-gray-400">Coming soon</span>
          </GearItem>
        </GearSection>
        <GearSection title="Watch & Tech">
          <GearItem title="GPS Watch">
            <span className="text-gray-400">Coming soon</span>
          </GearItem>
          <GearItem title="Heart Rate Monitor">
            <span className="text-gray-400">Coming soon</span>
          </GearItem>
        </GearSection>
        <GearSection title="Apparel">
          <GearItem title="Favorite Shorts">
            <span className="text-gray-400">Coming soon</span>
          </GearItem>
          <GearItem title="Go-To Socks">
            <span className="text-gray-400">Coming soon</span>
          </GearItem>
        </GearSection>
        <GearSection title="Nutrition">
          <GearItem title="Race Fuel">
            <span className="text-gray-400">Coming soon</span>
          </GearItem>
          <GearItem title="Hydration">
            <span className="text-gray-400">Coming soon</span>
          </GearItem>
        </GearSection>
      </div>
    </SimpleLayout>
  )
}
