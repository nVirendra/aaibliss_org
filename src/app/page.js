'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Code,
  Database,
  Lock,
  Zap,
  Server,
  Shield,
  Rocket,
  CheckCircle2,
  Users,
  Bot,
  LineChart,
  Building2,
  Wrench,
  Package,
  Target,
  Mail,
  ArrowRight,
  Cpu,
  Network,
} from 'lucide-react'

/* -------------------- Reusable UI -------------------- */

const TechBadge = ({ children }) => (
  <Badge variant="secondary" className="px-3 py-1 text-sm">
    {children}
  </Badge>
)

const ServiceCard = ({ icon: Icon, title, items }) => (
  <Card className="h-full hover:border-primary/50 transition-colors">
    <CardHeader>
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
)

const ApproachStep = ({ number, title, description }) => (
  <Card className="relative overflow-hidden">
    <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5">
      {number}
    </div>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
          {number}
        </span>
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
)

/* -------------------- Page -------------------- */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
        </div>

        <div className="container relative z-10 py-24 md:py-32 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-semibold">Scale • Secure • Revenue</span>
            </div>

            {/* <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              AI-Powered Backend & <br />
              <span className="text-primary">System Engineering Services</span>
            </h1> */}

<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
  Aaibliss – <br />
  <span className="text-primary">
    Systems Engineering for Scalable & AI-Driven Software
  </span>
</h1>

<p className="text-lg md:text-xl font-semibold text-primary mt-4">
  Founder-led. Hands-on. Built for Growth.
</p>
           

            <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
  Aaibliss helps startups and businesses design, build, and scale
  secure, production-ready software systems that handle real users,
  real traffic, and real revenue.
</p>


           


            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
  With <strong>5+ years of real-world engineering experience</strong>,
  Aaibliss specializes in backend systems, APIs, SaaS architecture,
  microservices, and AI-powered automation.
</p>

            <div className="flex justify-center gap-4 pt-4">
              <Button size="lg" className="gap-2">
                <Mail className="w-5 h-5" /> Start a Project
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                View Services <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl mx-auto space-y-8">
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">About Aaibliss</h2>
          </div>

          <p className="text-lg text-muted-foreground">
            Aaibliss is a <strong>founder-led backend & system engineering
            studio</strong> focused on performance & building software systems that scale
            smoothly, remain secure, and deliver long-term business value.
          </p>

          <p className="text-xl font-semibold">
            We don’t just write code —
            <span className="text-primary"> we design systems that survive growth.</span>
          </p>

          <div className="grid md:grid-cols-2 gap-3">
            {[
              'System design & architecture',
              'Backend & API engineering',
              'Security-aware development',
              'Performance & scalability optimization',
              'AI-driven workflow automation',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 bg-background border rounded-lg"
              >
                <CheckCircle2 className="w-5 h-5 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT WE BUILD ================= */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-center text-4xl font-bold mb-16">
            What Aaibliss Builds
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <ServiceCard
              icon={Server}
              title="Scalable SaaS Products"
              items={[
                'Multi-tenant SaaS platforms',
                'Role-based access & permissions',
                'Subscription & billing-ready systems',
                'Admin dashboards',
                'High-traffic production systems',
              ]}
            />

            <ServiceCard
              icon={Bot}
              title="AI-Powered Business Systems"
              items={[
                'RAG chatbots',
                'AI moderation & reporting',
                'AI analytics & insights',
                'Workflow automation',
              ]}
            />

            <ServiceCard
              icon={Building2}
              title="Startup & Enterprise Solutions"
              items={[
                'Internal tools',
                'Legacy system modernization',
                'Backend refactoring',
                'API-first architecture',
              ]}
            />
          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-center text-4xl font-bold mb-16">
            Tech Stack & Engineering Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle><Code className="inline w-5 h-5 mr-2" />Frontend</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-2 flex-wrap">
                <TechBadge>React.js</TechBadge>
                <TechBadge>Next.js</TechBadge>
                <TechBadge>Tailwind CSS</TechBadge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle><Server className="inline w-5 h-5 mr-2" />Backend</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-2 flex-wrap">
                <TechBadge>Node.js (Express, Fastify)</TechBadge>
                <TechBadge>FastAPI</TechBadge>
                <TechBadge>Laravel</TechBadge>
                <TechBadge>Microservices</TechBadge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle><Database className="inline w-5 h-5 mr-2" />Databases</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-2 flex-wrap">
                <TechBadge>PostgreSQL</TechBadge>
                <TechBadge>MongoDB</TechBadge>
                <TechBadge>Vector DB</TechBadge>
              </CardContent>
            </Card>

            <Card>
                            <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                <Network className="w-5 h-5 text-primary" />
                                Architecture
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <div className="flex flex-wrap gap-2">
                                <TechBadge>Microservices</TechBadge>
                                <TechBadge>Event-driven(NATS,Kafka)</TechBadge>
                              </div>
                              <p className="text-sm text-muted-foreground">Modular Monolith & Microservice architectures</p>
                            </CardContent>
                          </Card>

                          <Card>
                                          <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                              <Cpu className="w-5 h-5 text-primary" />
                                              Performance & Scaling
                                            </CardTitle>
                                          </CardHeader>
                                          <CardContent className="space-y-3">
                                            <div className="flex flex-wrap gap-2">
                                              <TechBadge>Redis caching</TechBadge>
                                              <TechBadge>DB optimization</TechBadge>
                                              <TechBadge>Horizontal scaling</TechBadge>
                                            </div>
                                          </CardContent>
                                        </Card>

            <Card>
              <CardHeader>
                <CardTitle><Shield className="inline w-5 h-5 mr-2" />Security</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-2 flex-wrap">
                <TechBadge>Authentication</TechBadge>
                <TechBadge>Authorization</TechBadge>
                <TechBadge>RBAC</TechBadge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-center text-4xl font-bold mb-16">
            How Aaibliss Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <ApproachStep
              number="1"
              title="Think First"
              description="Understand business goals, growth plans, and bottlenecks."
            />
            <ApproachStep
              number="2"
              title="Build for Production"
              description="Secure, scalable, and maintainable systems from day one."
            />
            <ApproachStep
              number="3"
              title="Optimize for Growth"
              description="Performance tuning, cost reduction, and AI automation."
            />
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-center text-4xl font-bold mb-12">
            Why Choose Aaibliss
          </h2>

          <Card className="border-primary/50">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Founder-led, hands-on engineering',
                  '5+ years production experience',
                  'Startup & enterprise mindset',
                  'Strong system design skills',
                  'AI-first problem solving',
                  'Clear ownership & communication',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {item}
                  </div>
                ))}
              </div>

              <Separator className="my-6" />

              <p className="text-center text-xl font-semibold">
                We don’t deliver features —
                <span className="text-primary"> we deliver systems that generate value.</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-center text-4xl font-bold mb-16">
            Services by Aaibliss
          </h2>

          <Card>
            <CardContent className="pt-6 grid md:grid-cols-2 gap-4">
              {[
                'Backend & API/Integration development',
                'SaaS architecture & system design',
                'AI-powered automation systems',
                'RAG chatbot development',
                'Microservices & event-driven systems',
                'Performance optimization',
                'Security hardening',
                'Legacy system migration & refactoring',
              ].map((service, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                  {service}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Vision</h2>

          <div className="text-3xl font-bold">Scale • Secure • Revenue</div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Scale', desc: 'Without rewriting systems' },
              { title: 'Secure', desc: 'Data & users from day one' },
              { title: 'Revenue', desc: 'Reduce cost with AI automation' },
            ].map((v, i) => (
              <Card key={i} className="border-primary/30">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg">{v.title}</h3>
                  <p className="text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-primary/5">
        <div className="container text-center max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold">Let’s Build Something That Lasts</h2>
          <p className="text-muted-foreground text-lg">
            Work directly with the founder & principal engineer of Aaibliss.
          </p>
          <Button size="lg" className="gap-2 px-8 py-6 text-lg">
            <Mail className="w-5 h-5" /> Get in Touch
          </Button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-8 border-t text-center text-muted-foreground">
        <p>© 2025 Aaibliss. All rights reserved.</p>
        <p className="text-sm">
          Founder-Led Engineering • Scale • Secure • Revenue
        </p>
      </footer>
    </div>
  )
}