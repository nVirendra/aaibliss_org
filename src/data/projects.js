/* ── Projects data ──
   Add a new product by pushing another entry here — cards and the
   detail modal on the Projects section render straight from this list.

   videoUrl accepts a YouTube link (any format) or a direct .mp4 URL.
   Leave it null until a real demo is ready; the card will fall back
   to the static `poster` image with no play button. */

export const projects = [
  {
    id: 'paydash',
    category: 'Systems Engineering',
    name: 'PayDash',
    tagline: "A payment core built to survive flash-sale traffic without losing a transaction.",
    problem: "Most payment stacks buckle the moment traffic spikes — and flash sales or checkout surges are exactly when dropped transactions cost the most.",
    approach: "We rebuilt the transaction pipeline around idempotent writes, a Redis-backed queue for burst absorption, and event-driven settlement over NATS — so every request is processed exactly once, even under load.",
    features: [
      'Idempotent transaction pipeline with automatic retries',
      'Redis-backed queuing to absorb traffic bursts',
      'Real-time reconciliation dashboard',
    ],
    impact: [
      { val: '38%', label: 'Infra cost reduction' },
      { val: '42ms', label: 'Avg. latency under load' },
    ],
    tech: ['Node.js', 'Fastify', 'Redis', 'NATS', 'PostgreSQL'],
    poster: '/portfolio_paydash.png',
    videoUrl: 'https://www.youtube.com/watch?v=PRqGuM2y39o',
    links: { live: null, details: true },
  },
  {
    id: 'nexlify-ai',
    category: 'AI & Automation',
    name: 'Nexlify AI',
    tagline: 'A retrieval-augmented support agent that actually knows the docs.',
    problem: "Support and onboarding teams drown in repetitive questions that are already answered somewhere in the docs — nobody has time to search 40,000+ pages by hand.",
    approach: "We built a RAG pipeline over a vector store of the full documentation set, tuned retrieval and prompting to minimize hallucination, and wired it into existing support tools so answers show up where the team already works.",
    features: [
      'Vector search over 40,000+ documentation pages',
      'Source-cited answers to reduce hallucination',
      'Drop-in widget for existing support tools',
    ],
    impact: [
      { val: '85%', label: 'Queries resolved automatically' },
      { val: '3×', label: 'Support volume handled' },
    ],
    tech: ['FastAPI', 'pgvector', 'Redis', 'OpenAI', 'LangChain'],
    poster: '/portfolio_nexlify.png',
    videoUrl: 'https://www.youtube.com/watch?v=PRqGuM2y39o',
    links: { live: null, details: true },
  },
  {
    id: 'saasify',
    category: 'SaaS Architecture',
    name: 'SaaSify',
    tagline: "A real-time analytics engine that doesn't fall over at 10 million events a day.",
    problem: "Growing SaaS products generate more events than their analytics stack can chew — dashboards lag, queries time out, and teams stop trusting their own data.",
    approach: "We designed a time-series ingestion pipeline on ClickHouse with pre-aggregated rollups and a Go-based ingestion layer, so dashboards stay fast no matter how much volume comes in.",
    features: [
      'Ingests 10M+ events per day in real time',
      'Sub-200ms dashboard load times',
      'Serverless ingestion layer that scales on demand',
    ],
    impact: [
      { val: '10M+', label: 'Events processed per day' },
      { val: '<200ms', label: 'Dashboard load time' },
    ],
    tech: ['Next.js', 'ClickHouse', 'Go', 'AWS Lambda', 'Tailwind CSS'],
    poster: '/portfolio_saasify.png',
    videoUrl: 'https://www.youtube.com/watch?v=PRqGuM2y39o',
    links: { live: null, details: true },
  },
]
