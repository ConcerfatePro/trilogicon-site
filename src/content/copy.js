/**
 * Site copy — edit strings here to update page content.
 */

export const brand = {
  name: 'Trilogicon',
  ticker: 'TRIL',
  tagline: 'Simple, secure cryptocurrency network',
  statusLine: 'In development',
}

export const social = {
  xUrl: 'https://x.com/trilogicon/',
  xHandle: '@trilogicon',
  xLabel: 'Follow on X',
}

export const hero = {
  headline: 'Native chain. Account model. Built for clarity.',
  lead:
    'Trilogicon is a from-scratch base-layer network with its own protocol rules and node software. V1 focuses on sound transfers, strict validation, and a foundation you can reason about — not hype.',
  secondary:
    'TRIL is the native asset. The ledger is account-based (balance + nonce per account). No token on another chain; this is intentional protocol work.',
  ctaVision: 'Read the vision',
  ctaV1: 'Explore V1',
  ctaRoadmap: 'View roadmap',
}

export const whatIs = {
  title: 'What Trilogicon is',
  intro:
    'Trilogicon is a long-term, multi-version blockchain project. The aim is reliable digital value transfer: trustworthy signatures, deterministic state, and rules users and operators can understand.',
  bullets: [
    {
      title: 'Native blockchain',
      body: 'Base-layer network with its own asset (TRIL), not a wrapped token on Ethereum, Solana, or elsewhere.',
    },
    {
      title: 'Account-based ledger',
      body: 'Each account holds a balance and a nonce. The model is chosen for clarity and clean extension in later versions.',
    },
    {
      title: 'Secure value transfer',
      body: 'Signed transactions, verification, replay protection via nonces, and validation before state changes.',
    },
    {
      title: 'Built from scratch',
      body: 'Protocol direction, architecture, and implementation are original engineering — not a rebranded fork.',
    },
  ],
  closing:
    'The project prioritizes auditability and predictable behavior over trend-chasing and unnecessary complexity.',
}

export const whyExists = {
  title: 'Why it exists',
  problemTitle: 'The problem',
  problem:
    'Many crypto systems are hard to understand, overloaded with features, or driven by short-term narrative. When users cannot map how a network behaves, trust and long-term usefulness suffer.',
  responseTitle: 'The response',
  response:
    'Trilogicon is being designed to prioritize understandable protocol rules, predictable system behavior, secure ownership, clean architecture, and practical utility over time — without pretending the hard parts are already solved.',
}

export const principles = {
  title: 'Core principles',
  items: [
    {
      key: 'simplicity',
      title: 'Simplicity',
      body: 'V1 stays minimal and disciplined. Fewer moving parts mean fewer places for subtle failure.',
    },
    {
      key: 'security',
      title: 'Security',
      body: 'Strong signatures, strict validation, deterministic transitions, and explicit rejection of invalid transactions and blocks.',
    },
    {
      key: 'reliability',
      title: 'Reliability',
      body: 'Behavior you can depend on: consistent sync, clear rules, and node software aimed at correct execution.',
    },
    {
      key: 'clarity',
      title: 'Clarity',
      body: 'Documentation and protocol choices favor what operators and users can read, test, and audit.',
    },
    {
      key: 'longterm',
      title: 'Long-term usefulness',
      body: 'Engineering and roadmap favor durable foundations over launch-day spectacle.',
    },
  ],
}

export const builder = {
  title: 'From the builder',
  kicker: 'Personal note',
  paragraphs: [
    'I am building Trilogicon as a long-term protocol effort: a native chain with clear rules, careful validation, and software that can be reasoned about — not another rebranded stack or hype-driven roadmap.',
    'V1 is intentionally narrow. I would rather establish correct fundamentals — signatures, state, blocks, sync — than layer on features that make the system harder to audit or trust.',
    'What you see on this site is the real stage of the project: active design and implementation work, with no claim of a finished network or manufactured metrics. If that honesty resonates, you are exactly the kind of reader this project is for.',
  ],
  signOff: 'Trilogicon Dev',
  signRole: 'Project lead',
}

export const v1 = {
  title: 'Trilogicon V1',
  subtitle: 'Intentionally scoped. Fundamentals first.',
  intro:
    'V1 establishes a simple, secure digital value-transfer network. It does a small set of things deliberately well so later versions can build on something solid.',
  includesTitle: 'In V1',
  includes: [
    'Account creation',
    'Balances',
    'Sending and receiving TRIL',
    'Signed transactions',
    'Signature verification',
    'Nonces and replay protection',
    'Block creation and validation',
    'Blockchain validation',
    'Synchronization across nodes',
    'Deterministic state handling',
  ],
  excludedTitle: 'Not in V1',
  excluded: [
    'Smart contracts',
    'DeFi and NFTs',
    'Bridges',
    'Governance systems',
    'Multiple asset types',
    'Heavy privacy complexity',
    'Advanced staking models',
    'Ultra-high TPS chasing',
    'Bloated ecosystem layers',
  ],
  scopeNote:
    'Limited scope is a strength: disciplined protocol design before optional complexity.',
}

export const architecture = {
  title: 'System overview',
  subtitle:
    'High-level structure of the node and protocol — not a full specification. Details evolve as V1 solidifies.',
  modules: [
    {
      id: 'account',
      title: 'Account',
      body: 'Identity in the ledger: balance and nonce; the basis for transfers and replay rules.',
    },
    {
      id: 'transaction',
      title: 'Transaction',
      body: 'Sender, receiver, amount, fee, nonce, time, signature — verified before acceptance.',
    },
    {
      id: 'signature',
      title: 'Signature',
      body: 'Cryptographic proof tying intent to keys; core to secure ownership.',
    },
    {
      id: 'block',
      title: 'Block',
      body: 'Height, previous hash, timestamp, transactions, producer data, proof field as consensus matures, block hash.',
    },
    {
      id: 'state',
      title: 'State',
      body: 'Deterministic application of valid blocks to account sets; strict validation at each step.',
    },
    {
      id: 'consensus',
      title: 'Consensus',
      body: 'Agreement on the canonical chain; exact mechanism for V1 is under careful design.',
    },
    {
      id: 'sync',
      title: 'Node sync',
      body: 'Peers exchange blocks and headers so independent nodes converge on consistent history.',
    },
  ],
  rustNote:
    'Core implementation targets Rust for safety, performance, and maintainability. Illustrative module names include wallet, transaction, block, blockchain, state, crypto, network, consensus, and config.',
}

export const status = {
  title: 'Development status',
  subtitle: 'Early, active, honest.',
  items: [
    {
      title: 'V1 architecture',
      body: 'In progress — structure and protocol boundaries are being defined with security-first discipline.',
    },
    {
      title: 'Protocol design',
      body: 'Active — transaction and block shapes, validation rules, and state transitions are central focus areas.',
    },
    {
      title: 'Roadmap',
      body: 'Defined at a high level — multi-version evolution is planned; nothing is rushed to “mainnet theater.”',
    },
    {
      title: 'Documentation',
      body: 'Evolving — public material will grow as the specification stabilizes.',
    },
    {
      title: 'Implementation',
      body: 'Rust node software is in progress / planned alongside the written protocol.',
    },
  ],
  disclaimer:
    'There is no mainnet claim, no public sale narrative, and no fabricated metrics on this page. What you see reflects real, in-flight engineering.',
}

export const roadmap = {
  title: 'Version roadmap',
  subtitle: 'Disciplined evolution — not rushed expansion.',
  versions: [
    {
      id: 'V1',
      title: 'V1',
      body: 'Simple, secure value transfer; accounts; signed transfers; validation; nonce-based replay protection; multi-node foundation.',
    },
    {
      id: 'V2',
      title: 'V2',
      body: 'Improved networking, synchronization, and node reliability; more resilient peer behavior.',
    },
    {
      id: 'V3',
      title: 'V3',
      body: 'Stronger consensus / validator model, performance work, and more robust decentralized operation.',
    },
    {
      id: 'V4+',
      title: 'V4+',
      body: 'Only after the core is genuinely strong — possible tooling, programmability, or extensions if justified and if the base stays understandable and secure.',
    },
  ],
}

export const footer = {
  note: `${brand.name} · ${brand.ticker} · ${brand.statusLine.toLowerCase()}`,
  links: [
    { label: 'Vision', href: '/#vision' },
    { label: 'Builder', href: '/#builder' },
    { label: 'V1 scope', href: '/#v1' },
    { label: 'Architecture', href: '/#architecture' },
    { label: 'Roadmap', href: '/#roadmap' },
    { label: 'Status', href: '/#status' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/faq#contact' },
    { label: 'GitHub', href: '#', placeholder: true },
  ],
}

export const nav = {
  links: [
    { label: 'Vision', href: '/#vision' },
    { label: 'Builder', href: '/#builder' },
    { label: 'V1', href: '/#v1' },
    { label: 'Architecture', href: '/#architecture' },
    { label: 'Roadmap', href: '/#roadmap' },
    { label: 'Status', href: '/#status' },
    { label: 'FAQ', href: '/faq' },
  ],
}
