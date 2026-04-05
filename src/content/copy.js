/**
 * Site copy — edit strings here to update page content.
 */

export const brand = {
  name: 'Trilogicon',
  ticker: 'TRIL',
  tagline: 'Simple, secure cryptocurrency network',
  statusLine: 'V1 live',
}

export const social = {
  xUrl: 'https://x.com/trilogicon/',
  xHandle: '@trilogicon',
  xLabel: 'Follow on X',
}

export const waitlist = {
  title: 'Early Trilogicon Waitlist',
  subtitle:
    'Share your email if you want occasional, low-noise project updates now that V1 is live and later work continues. No spam, no token sale language — optional X handle for context only.',
  emailLabel: 'Email address',
  emailPlaceholder: 'you@example.com',
  xLabel: 'X handle (optional)',
  xPlaceholder: 'trilogicon',
  helper:
    'Protected with a bot challenge. We use your email only for occasional project updates. Duplicate requests are handled quietly.',
  submit: 'Join waitlist',
  submitting: 'Submitting…',
  success:
    'Thank you. Your request has been received.',
  errorGeneric: 'Something went wrong. Please try again later.',
  configHint:
    'This build has no waitlist API URL or Turnstile site key embedded. See instructions below.',
}

export const hero = {
  headline: 'Native chain. Account model. V1 is live.',
  lead:
    'Trilogicon v1 is now live. The first release is focused on the fundamentals of secure value transfer: signed transfers, balance tracking, nonce-based replay protection, block validation, and multi-node synchronization.',
  secondary:
    'TRIL is the native asset. The ledger is account-based (balance + nonce per account). Built as a simple, secure, and understandable foundation first — no token on another chain; this is intentional protocol work.',
  ctaVision: 'Read the vision',
  ctaV1: 'Explore V1',
  ctaSource: 'View source',
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
    'V1 is intentionally narrow: the goal is a small, auditable surface area you can read in the public repositories. Later versions can build on that only if the base stays understandable and secure. If that discipline resonates, you are exactly the kind of reader this project is for.',
  ],
  signOff: 'Trilogicon Dev',
  signRole: 'Project lead',
}

export const v1 = {
  title: 'Trilogicon V1',
  subtitle: 'Released. Intentionally scoped — fundamentals first.',
  intro:
    'The first release delivers a simple, secure digital value-transfer network: signed transfers, balance tracking, nonce-based replay protection, block validation, and multi-node synchronization. It does a small set of things deliberately well so later versions can build on something solid.',
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
    'Limited scope is a strength: disciplined protocol design before optional complexity. Built as a simple, secure, and understandable foundation first.',
}

export const source = {
  kicker: 'Open source',
  title: 'Public repositories',
  paragraphs: [
    'The repositories are public for anyone who wants to inspect the code and follow development.',
  ],
  coreLabel: 'Core implementation',
  coreDescription:
    'Protocol rules, validation, and node software — start here if you want to read or run the implementation.',
  coreUrl: 'https://github.com/ConcerfatePro/trilogicon-core',
  coreLinkLabel: 'trilogicon-core on GitHub',
}

export const architecture = {
  title: 'System overview',
  subtitle:
    'High-level structure of the node and protocol — not a full specification. Details evolve as the project advances beyond the V1 baseline.',
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
  title: 'Project status',
  subtitle: 'V1 shipped. Work continues on documentation, hardening, and later versions.',
  items: [
    {
      title: 'V1 release',
      body: 'The first version is live in source: secure value transfer, validation, and multi-node sync — scoped deliberately small so behavior stays traceable.',
    },
    {
      title: 'Specification & documentation',
      body: 'Evolving — written material and code comments will grow as operators and contributors need clearer reference.',
    },
    {
      title: 'Roadmap',
      body: 'Defined at a high level — multi-version evolution is planned; each step stays subordinate to security and clarity.',
    },
    {
      title: 'Hardening & follow-on work',
      body: 'Ongoing — networking, sync edge cases, and operational tooling are natural next focuses after a minimal correct core.',
    },
    {
      title: 'Transparency',
      body: 'No public sale narrative and no fabricated metrics on this page. Inspect the repositories for what is actually implemented.',
    },
  ],
  disclaimer:
    'This site summarizes intent and scope; authoritative detail is in the public code and any published specs. Always verify behavior against the implementation you run.',
}

export const roadmap = {
  title: 'Version roadmap',
  subtitle: 'Disciplined evolution — not rushed expansion.',
  versions: [
    {
      id: 'V1',
      title: 'V1',
      body: 'Shipped: simple, secure value transfer; accounts; signed transfers; validation; nonce-based replay protection; multi-node synchronization.',
    },
    {
      id: 'V2',
      title: 'V2',
      body: 'Locked scope: networking reliability, synchronization, recovery, persistence, observability, and reliability-focused testing.',
      href: '/v2',
      cta: 'Read locked scope',
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

/** /v2 — locked engineering scope; light-themed page */
export const v2Page = {
  docTitle: 'Trilogicon V2 — locked scope',
  heroKicker: 'Version scope',
  heroTitle: 'Trilogicon V2',
  heroBadge: 'Locked engineering scope',
  heroLead:
    'V2 is the reliability phase for Trilogicon node software.',
  heroSub:
    'The work is centered on networking, synchronization, recovery, persistence, message flow, observability, and reliability-focused testing under real multi-node conditions. It does not expand the asset model or turn the chain into a broader application platform.',
  summaryCards: [
    {
      label: 'Status',
      title: 'V1 is complete',
      body: 'The native base layer, account model, signed transfers, validation, and initial multi-node operation are already established.',
    },
    {
      label: 'V2 focus',
      title: 'Reliability and recovery',
      body: 'The next phase is about safer peer behavior, clearer synchronization, stronger restart behavior, and more dependable node operation.',
    },
    {
      label: 'Constraint',
      title: 'No protocol expansion',
      body: 'V2 does not broaden Trilogicon into a smart-contract platform, DeFi stack, staking redesign, or marketing-driven feature set.',
    },
  ],
  anchorNav: [
    { id: 'context', label: 'Context' },
    { id: 'goal', label: 'Goal' },
    { id: 'in-scope', label: 'In scope' },
    { id: 'out-of-scope', label: 'Out of scope' },
    { id: 'discipline', label: 'Discipline' },
    { id: 'references', label: 'References' },
  ],
  contextTitle: 'Context',
  contextIntro:
    'V2 follows a completed V1. It is a defined engineering phase for node resilience, not an open-ended roadmap bucket.',
  contextCards: [
    {
      label: 'After V1',
      title: 'The foundation is already set',
      body: 'V1 established a native base layer with a deliberately small protocol surface: value transfer, balances, nonces, validation, and initial multi-node synchronization.',
    },
    {
      label: 'What V2 changes',
      title: 'Node behavior under real conditions',
      body: 'V2 focuses on how nodes connect, exchange data, recover, catch up, reload persisted state, and expose enough operational detail to debug distributed behavior.',
    },
    {
      label: 'What stays fixed',
      title: 'The protocol remains narrow',
      body: 'TRIL remains the native asset on an independent base-layer chain. V2 does not redefine the asset model or widen the protocol into a general application platform.',
    },
  ],
  goalTitle: 'Locked V2 goal',
  goalLead:
    'Make Trilogicon nodes more reliable, more recoverable, and more predictable in real multi-node conditions.',
  goalConstraintLabel: 'Constraint',
  goalConstraintBody:
    'Improve node behavior and network resilience without expanding the core asset model or turning the chain into a broader application platform.',
  inScopeTitle: 'In scope',
  inScopeIntro:
    'Each item below is reliability work for distributed node operation. The scope is technical, limited, and testable.',
  inScopePillars: [
    {
      key: 'networking',
      title: 'Networking reliability',
      items: [
        'Cleaner peer connection handling',
        'Stronger message validation boundaries',
        'Defensive handling of malformed, stale, or spammy peer data',
        'Safer and more predictable peer behavior',
      ],
    },
    {
      key: 'sync',
      title: 'Synchronization improvements',
      items: [
        'Safer block download and catch-up flow',
        'Clearer chain tip comparison',
        'Better node catch-up behavior',
        'Improved behavior when a node falls behind and rejoins',
      ],
    },
    {
      key: 'recovery',
      title: 'Failure recovery',
      items: [
        'Stronger restart behavior',
        'Better recovery after interruption or crash',
        'Clearer recovery path from persisted chain and state',
        'Safer handling of incomplete local progress',
      ],
    },
    {
      key: 'storage',
      title: 'Storage and persistence strengthening',
      items: [
        'Stronger persistence guarantees',
        'Cleaner chain and state storage boundaries',
        'Safer reload behavior',
        'Stronger recovery-oriented storage design',
      ],
    },
    {
      key: 'messages',
      title: 'Message-flow cleanup',
      items: [
        'Clearer and more explicit peer message handling',
        'Better separation between transport or network handling and consensus validation',
        'Less coupling between node subsystems',
      ],
    },
    {
      key: 'observability',
      title: 'Observability',
      items: [
        'Better logging for sync, peer events, block acceptance and rejection, and recovery',
        'Enough operational visibility to debug distributed node behavior',
        'Clearer insight into what the node is doing during network activity',
      ],
    },
    {
      key: 'testing',
      title: 'Reliability-focused testing',
      items: [
        'More multi-node synchronization tests',
        'Restart and recovery tests',
        'Malformed peer and message tests',
        'Fork and reorganization behavior tests',
        'Convergence tests showing honest nodes reach the same result',
      ],
    },
  ],
  outScopeTitle: 'Explicitly out of scope',
  outScopeIntro:
    'These items are outside the locked V2 boundary and should not be read into this phase.',
  outScopeItems: [
    'Smart contracts',
    'Staking or validator economy redesign',
    'DeFi',
    'Bridges',
    'Multiple token standards',
    'Privacy features',
    'Major consensus redesign',
    'Performance chasing for marketing purposes',
    '“High TPS” expansion as a headline feature',
    'Broad protocol expansion unrelated to reliability',
  ],
  narrowTitle: 'Why V2 stays narrow',
  narrowParagraphs: [
    'V2 is about making nodes more reliable, not making the protocol bigger. A wider surface area makes failures harder to reproduce, harder to test, and harder to reason about across independent operators.',
    'The locked scope keeps engineering accountable to outcomes that can be checked directly: stable synchronization, sane recovery, clearer operating signals, and predictable behavior when peers or local state are imperfect.',
  ],
  meansTitle: 'What this means for Trilogicon',
  meansBody:
    'The project remains a native base-layer chain focused on understandable value transfer. V2 invests in the harder operational work around that core: peers, restarts, persistence, validation boundaries, and tests that reflect actual multi-node behavior. Credibility comes from node behavior, not from a larger feature list.',
  closingTitle: 'References',
  closingBody:
    'Public repositories remain the authoritative source for implementation detail. This page is a scope statement, not a speculative product pitch.',
  ctaHome: 'Home',
  ctaRoadmap: 'Version roadmap',
  ctaGithub: 'Core repository',
  githubUrl: 'https://github.com/ConcerfatePro/trilogicon-core',
}

/** /support — voluntary development support; not investment or token sale language */
export const supportPage = {
  kicker: 'Trilogicon · TRIL',
  title: 'Support Trilogicon',
  intro:
    'Trilogicon is being built as a long-term engineering project focused on simple, secure, and understandable digital value transfer. For those who want to support development, optional contributions can help with infrastructure, testing, documentation, and related project costs.',
  whatHelpsTitle: 'What support helps with',
  whatHelpsItems: [
    'Website and infrastructure costs',
    'Development tooling',
    'Testing environments',
    'Documentation and public resources',
    'Future testnet-related needs',
  ],
  donationTitle: 'Donation address',
  addressNetworkLabel: 'Ethereum / EVM-compatible address',
  address: '0x2aedd5341ca809390f897dfd1c0dc63486432214',
  verifyNote:
    'Before sending anything, verify this address carefully—character by character. Blockchain transfers are irreversible.',
  copyButtonLabel: 'Copy address',
  copiedMessage: 'Address copied',
  transparencyTitle: 'Transparency',
  transparencyBody:
    'Support is entirely optional and does not provide ownership, governance rights, investment returns, or special financial status in the project. Contributions are simply a voluntary way to support Trilogicon’s continued development.',
  thankYouTitle: 'Thank you',
  thankYouBody: 'Thank you to everyone following and supporting the project in good faith.',
}

export const footer = {
  note: `${brand.name} · ${brand.ticker} · ${brand.statusLine.toLowerCase()}`,
  links: [
    { label: 'Vision', href: '/#vision' },
    { label: 'Builder', href: '/#builder' },
    { label: 'V1 scope', href: '/#v1' },
    { label: 'V2 scope', href: '/v2' },
    { label: 'Source', href: '/#source' },
    { label: 'Architecture', href: '/#architecture' },
    { label: 'Roadmap', href: '/#roadmap' },
    { label: 'Status', href: '/#status' },
    { label: 'Waitlist', href: '/#waitlist' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Support', href: '/support' },
    { label: 'Contact', href: '/faq#contact' },
    {
      label: 'GitHub',
      href: 'https://github.com/ConcerfatePro/trilogicon-core',
      external: true,
    },
  ],
}

export const nav = {
  links: [
    { label: 'Vision', href: '/#vision' },
    { label: 'Builder', href: '/#builder' },
    { label: 'V1', href: '/#v1' },
    { label: 'V2', href: '/v2' },
    { label: 'Source', href: '/#source' },
    { label: 'Architecture', href: '/#architecture' },
    { label: 'Roadmap', href: '/#roadmap' },
    { label: 'Status', href: '/#status' },
    { label: 'Waitlist', href: '/#waitlist' },
    { label: 'Support', href: '/support' },
    { label: 'FAQ', href: '/faq' },
  ],
}
