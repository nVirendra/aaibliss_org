'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Code, 
  Database, 
  Lock, 
  Zap, 
  Brain, 
  Server, 
  Shield, 
  Rocket,
  CheckCircle2,
  Users,
  Bot,
  LineChart,
  Settings,
  Building2,
  Wrench,
  Search,
  Package,
  Target,
  Mail,
  ArrowRight,
  Cpu,
  Network,
  Cloud
} from 'lucide-react'

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
            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
)

const ApproachStep = ({ number, title, description }) => (
  <Card className="relative overflow-hidden">
    <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5">{number}</div>
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

const TechCategory = ({ title, techs }) => (
  <div>
    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
      <div className="w-1 h-6 bg-primary rounded-full" />
      {title}
    </h4>
    <div className="flex flex-wrap gap-2">
      {techs.map((tech, idx) => (
        <TechBadge key={idx}>{tech}</TechBadge>
      ))}
    </div>
  </div>
)

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
        </div>
        
        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Main Tagline */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold">Scale • Secure • Revenue</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              AI-Powered Backend &<br />
              <span className="text-primary">System Engineering Services</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We help startups, founders, and businesses build fast, scalable, and secure software systems that are ready for real users, real traffic, and real revenue.
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With <span className="font-semibold text-foreground">5+ years</span> of professional software development experience, Aaibliss specialize in backend systems, APIs, microservices, and AI-powered automation that reduce operational cost and engineering complexity.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" className="gap-2">
                <Mail className="w-5 h-5" />
                Let's Build Together
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                View Services <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Am Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-primary/10">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">👋 Who I Am</h2>
            </div>
            
            <div className="space-y-6 text-lg">
              <p className="text-muted-foreground">
                I'm an <span className="font-semibold text-foreground">AI-powered Backend & System Engineer</span> focused on performance, scalability, and security.
              </p>
              
              <p className="text-xl font-semibold">
                I don't just write code — <span className="text-primary">I design systems that survive growth.</span>
              </p>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">My core strengths:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'System design & architecture',
                    'Backend & API engineering',
                    'Security-aware development',
                    'Performance & scalability optimization',
                    'AI-driven automation for business workflows'
                  ].map((strength, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-background border">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Build Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Rocket className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">🧠 What I Build</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <ServiceCard
              icon={Server}
              title="Scalable SaaS Products"
              items={[
                'Multi-tenant SaaS platforms',
                'Role-based access & permissions',
                'Subscription & billing-ready architectures',
                'Admin panels & dashboards',
                'High-traffic, production-ready systems'
              ]}
            />
            
            <ServiceCard
              icon={Bot}
              title="AI-Powered Business Systems"
              items={[
                'RAG Chatbots for internal documents (HR, Legal, Support, Knowledge Base)',
                'AI Moderation Systems (content, image, audio, reports, abuse detection)',
                'AI Reporting & Analytics (auto insights, summaries, trend detection)',
                'Workflow automation to reduce manual work & operational cost'
              ]}
            />
            
            <ServiceCard
              icon={Building2}
              title="Enterprise & Startup Solutions"
              items={[
                'Internal tools & admin systems',
                'Legacy system modernization',
                'Backend refactoring & performance tuning',
                'API-first architecture for web & mobile apps'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Package className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">🛠 Tech Stack & Expertise</h2>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <TechBadge>Next.js</TechBadge>
                    <TechBadge>Tailwind CSS</TechBadge>
                  </div>
                  <p className="text-sm text-muted-foreground">Modern UI architecture (SEO + performance focused)</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="w-5 h-5 text-primary" />
                    Backend
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <TechBadge>Node.js</TechBadge>
                    <TechBadge>Express</TechBadge>
                    <TechBadge>Fastify</TechBadge>
                    <TechBadge>FastAPI</TechBadge>
                    <TechBadge>Laravel</TechBadge>
                  </div>
                  <p className="text-sm text-muted-foreground">REST & event-driven APIs</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    Databases
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <TechBadge>MySQL</TechBadge>
                    <TechBadge>PostgreSQL</TechBadge>
                    <TechBadge>MongoDB</TechBadge>
                    <TechBadge>Vector Databases</TechBadge>
                  </div>
                  <p className="text-sm text-muted-foreground">For AI & RAG systems</p>
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
                    <TechBadge>Event-driven</TechBadge>
                    <TechBadge>High-availability</TechBadge>
                  </div>
                  <p className="text-sm text-muted-foreground">Monolithic & Microservice architectures</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Messaging & Streaming
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge>NATS</TechBadge>
                    <TechBadge>Kafka</TechBadge>
                  </div>
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
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <TechBadge>Authentication</TechBadge>
                    <TechBadge>Authorization</TechBadge>
                    <TechBadge>RBAC</TechBadge>
                  </div>
                  <p className="text-sm text-muted-foreground">API security & data protection</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">🧩 My Approach</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ApproachStep
              number="1"
              title="Think First, Then Build"
              description="I start by understanding your business goal, growth plan, and current bottlenecks. Then I design a system that won't break when users increase."
            />
            <ApproachStep
              number="2"
              title="Build for Production"
              description="Clean, maintainable code. Scalable architecture. Secure by design. Performance optimized from day one."
            />
            <ApproachStep
              number="3"
              title="Optimize for Growth"
              description="Faster APIs. Reduced server cost. Better user experience. AI automation where it makes sense."
            />
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">💡 Why Work With Me?</h2>
            </div>
            
            <Card className="border-primary/50">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    '5+ years of real-world experience',
                    'Startup + enterprise mindset',
                    'Strong system design skills',
                    'AI-first problem solving',
                    'Focus on long-term scalability',
                    'Clear communication & ownership'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-background">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-6" />
                
                <p className="text-center text-xl font-semibold">
                  I don't deliver "just features" — <span className="text-primary">I deliver systems that generate value.</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Wrench className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">🔥 Services I Offer</h2>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Backend & API development',
                    'SaaS architecture & system design',
                    'AI-powered automation systems',
                    'RAG chatbot development',
                    'Microservices & event-driven systems',
                    'Performance optimization',
                    'Security hardening',
                    'Legacy system migration & refactoring'
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="p-1 rounded bg-primary/10 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">🌍 Vision</h2>
            </div>
            
            <div className="text-2xl md:text-3xl font-bold">
              Scale • Secure • Revenue
            </div>
            
            <p className="text-lg text-muted-foreground">
              My goal is to help businesses:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-primary/30">
                <CardContent className="pt-6 text-center">
                  <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Scale</h3>
                  <p className="text-muted-foreground">Without rewriting everything</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/30">
                <CardContent className="pt-6 text-center">
                  <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Secure</h3>
                  <p className="text-muted-foreground">Data and users from day one</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/30">
                <CardContent className="pt-6 text-center">
                  <LineChart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Revenue</h3>
                  <p className="text-muted-foreground">By reducing cost & improving efficiency with AI</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">📩 Let's Build Something Powerful</h2>
              <p className="text-lg text-muted-foreground">
                If you're:
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                'A startup founder',
                'A growing business',
                'A company looking to modernize systems',
                'Someone who wants AI to save time & money'
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-background border border-primary/20 hover:border-primary/50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <Button size="lg" className="gap-2 text-lg px-8 py-6">
                <Mail className="w-5 h-5" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container">
          <div className="text-center text-muted-foreground">
            <p>© 2025 AI-Powered Backend & System Engineering Services</p>
            <p className="text-sm mt-2">Scale • Secure • Revenue</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
