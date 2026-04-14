/**
 * Site copy — edit strings here to update page content.
 */

export const brand = {
  name: 'Trilogicon',
  ticker: 'TRIL',
  tagline: 'Simple. Secure. User-focused.',
  statusLine: 'V1 & V2 live',
}

export const social = {
  xUrl: 'https://x.com/trilogicon/',
  xHandle: '@trilogicon',
  xLabel: 'Follow on X',
}

export const waitlist = {
  title: 'Early Trilogicon Waitlist',
  subtitle:
    'Share your email if you want occasional, low-noise project updates as work continues beyond V1 and V2. No spam, no token sale language — optional X handle for context only.',
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
  headline: 'V2 is live. The node is hardened for real networks.',
  lead:
    'Explore what shipped: wire v2 sessions, explicit sync, decode-before-apply messaging, safer persistence, genesis-bound data dirs, and stronger multi-node tests — built on the same simple V1 chain.',
  secondary:
    'TRIL is the native asset on an independent base layer — not a token on another network. Simple. Secure. User-focused.',
  ctaExploreV2: 'Explore V2',
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
    'The project prioritizes auditability and predictable behavior over trend-chasing and unnecessary complexity. Simple. Secure. User-focused.',
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
      body: 'Each release stays as small as the work allows. Fewer moving parts mean fewer places for subtle failure.',
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
  subtitle: 'Released. Fundamentals first — V2 hardens the node around this core.',
  intro:
    'The first release delivers a simple, secure digital value-transfer network: signed transfers, balance tracking, nonce-based replay protection, block validation, and multi-node synchronization. It does a small set of things deliberately well; V2 then improved how that chain behaves under real distributed conditions without widening the protocol.',
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
    'High-level structure of the node and protocol — not a full specification. V2 strengthened networking, sync, and persistence layers while keeping the core chain rules narrow.',
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
      body: 'Agreement on the canonical chain. V2 kept consensus rules stable while hardening how nodes exchange and apply data around those rules.',
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
  subtitle: 'V1 and V2 are complete in source. Later versions follow the same discipline.',
  items: [
    {
      title: 'V1 release',
      body: 'Shipped: secure value transfer, validation, and multi-node sync — a deliberately small protocol surface so behavior stays traceable.',
    },
    {
      title: 'V2 release',
      body: 'Shipped: node reliability work — wire v2 sessions, explicit catch-up sync, decode-before-apply messaging, defensive frame and batch limits, safer block and pending-transaction persistence, genesis binding per data directory, mempool resilience, clearer separation of consensus rules from local-node hardening, and stronger distributed tests.',
    },
    {
      title: 'Specification & documentation',
      body: 'Evolving — written material and code comments grow as operators need clearer reference. The repositories remain authoritative.',
    },
    {
      title: 'Roadmap',
      body: 'V3 and beyond are defined at a high level — consensus, performance, and decentralized operation only after the hardened core is trusted.',
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
      body: 'Shipped: wire session discipline, explicit sync, hardened parsing and limits, safer on-disk chain and pending tx storage, genesis binding to data dirs, mempool recovery, consensus/local separation, and stronger multi-node tests — without protocol sprawl.',
      href: '/v2',
      cta: 'What V2 shipped',
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

/** /v2 — V2 shipped; light-themed engineering retrospective */
export const v2Page = {
  docTitle: 'Trilogicon V2 — shipped',
  heroKicker: 'Release notes · engineering',
  heroTitle: 'Trilogicon V2',
  heroBadge: 'Shipped',
  heroLead:
    'V2 is complete. It hardens the node around the working V1 chain: wire discipline, explicit synchronization, safer persistence, and stronger proof under multi-node conditions.',
  heroSub:
    'Trilogicon remains Simple. Secure. User-focused. — a native base layer, not a feature platform. V2 did not expand the asset model; it made distributed operation more trustworthy.',
  summaryCards: [
    {
      label: 'V1',
      title: 'Proved the chain could function',
      body: 'Secure value transfer, validation, account state, and initial multi-node synchronization — a minimal, auditable core.',
    },
    {
      label: 'V2',
      title: 'Proved the node could keep functioning safely',
      body: 'Wrong peers, wrong genesis, malformed traffic, restarts, partial writes, pending-transaction recovery, delayed sync, and honest multi-node convergence — addressed with engineering evidence, not narrative.',
    },
    {
      label: 'Motto',
      title: 'Simple. Secure. User-focused.',
      body: 'Every version is judged against understandable rules, dependable behavior, and respect for operators and users — not hype or scope creep.',
    },
  ],
  anchorNav: [
    { id: 'overview', label: 'Overview' },
    { id: 'wire-protocol', label: 'Wire' },
    { id: 'sync', label: 'Sync' },
    { id: 'parsing', label: 'Decode' },
    { id: 'limits', label: 'Bounds' },
    { id: 'block-storage', label: 'Blocks' },
    { id: 'pending-tx', label: 'Pending' },
    { id: 'genesis-binding', label: 'Genesis' },
    { id: 'mempool', label: 'Mempool' },
    { id: 'separation', label: 'Separation' },
    { id: 'testing', label: 'Tests' },
    { id: 'not-became', label: 'Out' },
    { id: 'summary', label: 'Summary' },
    { id: 'discipline', label: 'Discipline' },
    { id: 'references', label: 'Refs' },
  ],
  overviewTitle: 'V1, then V2',
  overviewIntro:
    'V1 established the protocol fundamentals. V2 took that working chain and hardened the node until it behaved like a more serious distributed system — without rewriting what the chain means.',
  overviewCards: [
    {
      label: 'V1',
      title: 'Foundation',
      body: 'A native base layer with a deliberately small surface: transfers, balances, nonces, blocks, validation, and synchronization.',
    },
    {
      label: 'V2',
      title: 'Operational hardening',
      body: 'Networking, sync, decode paths, size limits, on-disk durability, genesis binding, mempool behavior, architectural boundaries, and tests aligned with real node conditions.',
    },
    {
      label: 'Unchanged',
      title: 'What V2 did not chase',
      body: 'No smart-contract platform, no staking redesign, no DeFi stack, no bridge narrative, and no marketing “high TPS” headline — reliability first.',
    },
  ],
  shippedSections: [
    {
      id: 'wire-protocol',
      navLabel: 'Wire',
      title: 'The wire protocol became more disciplined',
      intro:
        'V2 introduced a more formal peer session layer instead of treating every TCP connection as implicitly valid.',
      changed: [
        'Peers perform a wire v2 session handshake.',
        'The handshake carries the protocol version.',
        'It carries the genesis state commitment.',
        'It carries an advisory chain height.',
      ],
      matters: [
        'Nodes can reject peers on the wrong network.',
        'A node no longer risks syncing against a chain that looks structurally valid but belongs to a different genesis.',
        'The advisory height aids awareness; it does not decide consensus or sync bounds by itself — keeping logic safer and simpler.',
      ],
      compendium:
        'This matches the compendium’s V2 emphasis on peer behavior, message flows, and stronger networking.',
    },
    {
      id: 'sync',
      navLabel: 'Sync',
      title: 'Sync became more explicit and more reliable',
      intro: 'V1 could sync, but V2 made the catch-up path much more robust.',
      changed: [
        'Sync follows a clearer linear catch-up loop.',
        'A node asks for blocks starting from its current next height.',
        'It keeps requesting until the peer returns an empty batch.',
        'Block batch responses are capped instead of being unbounded.',
      ],
      matters: [
        'Lagging nodes recover more predictably.',
        'Delayed nodes catch up without ad hoc behavior.',
        'Peers cannot as easily force oversized history responses.',
        'Sync logic stayed simple — better for auditability.',
      ],
      compendium:
        'This aligns with the compendium’s goal of improving synchronization behavior and multi-node convergence.',
    },
    {
      id: 'parsing',
      navLabel: 'Decode',
      title: 'Message parsing was hardened before state mutation',
      intro:
        'One of the most important V2 engineering changes was splitting decode and parsing from state application.',
      changed: [
        'Inbound payloads are decoded before taking the main node lock.',
        'Malformed frames and unknown opcodes fail early.',
        'Quota checks run before expensive state mutation.',
        'Only decoded, structurally valid messages reach the apply path.',
      ],
      matters: [
        'Bad peers spend less time holding shared node state.',
        'Malformed input is rejected sooner and more cleanly.',
        'Denial-of-service style friction from junk traffic is reduced.',
        'The network layer behaves more like a filter and courier — not a place where consensus state changes casually.',
      ],
      compendium:
        'This follows project guidance: network code must not silently become consensus truth; bad input should fail cleanly instead of destabilizing the node.',
    },
    {
      id: 'limits',
      navLabel: 'Bounds',
      title: 'Frame-size and response-size limits were added',
      intro: 'V2 added defensive bounds around the networking layer.',
      changed: [
        'Outbound framed payload lengths are validated.',
        'Maximum wire frame sizes are enforced.',
        'Block responses are capped to a maximum batch size.',
      ],
      matters: [
        'Peers cannot easily push the node into sloppy oversized message behavior.',
        'Memory use and response behavior become more predictable.',
        'The protocol is safer under hostile or buggy network conditions.',
      ],
      compendium:
        'This is the kind of “harder to disrupt with simple bad behavior” work the V2 roadmap calls for.',
    },
    {
      id: 'block-storage',
      navLabel: 'Blocks',
      title: 'Persistent block storage moved from “works” to safer on restart',
      intro: 'V2 significantly improved on-disk chain durability.',
      changed: [
        'New block files use a stronger framed layout.',
        'New or empty chain.blocks files begin with a file magic header.',
        'Each stored block frame includes length and integrity check data.',
        'Legacy files remain readable for backward compatibility.',
        'Append behavior was tightened to reduce torn-write risk.',
        'Append failures are fail-closed — storage failure is treated as serious, not ignored.',
      ],
      matters: [
        'Restart behavior is safer.',
        'Corrupted or half-written storage is easier to detect.',
        'The node is less likely to continue on silently damaged history.',
        'Backward compatibility was preserved instead of breaking older data directories.',
      ],
      compendium:
        'This realizes the compendium’s V2 emphasis on storage strengthening, crash consistency, and recovery-minded persistence.',
    },
    {
      id: 'pending-tx',
      navLabel: 'Pending',
      title: 'Pending transaction persistence became atomic and lock-safe',
      intro: 'The pending_tx.tril path received real durability work in V2.',
      changed: [
        'Pending transaction writes append as full framed records.',
        'Draining the pending file uses atomic rewrite and rename.',
        'Temp-file durability was tightened.',
        'Parent-directory sync behavior was hardened around rewrites.',
        'An advisory lock file prevents append and drain operations from racing.',
        'Mempool state can be restored if a drain or rewrite fails mid-process.',
      ],
      matters: [
        'Restart is less likely to lose or corrupt pending transaction intent.',
        'Two code paths do not quietly race the same file.',
        'The node can fail safely instead of half-consuming queued transactions.',
        'Restart recovery is more trustworthy.',
      ],
      compendium:
        'This is a major reason V2 is an operational hardening release, not “just a networking tweak.” Persisted-chain reloads are a meaningful integration goal in the compendium.',
    },
    {
      id: 'genesis-binding',
      navLabel: 'Genesis',
      title: 'Data directories became bound to one genesis',
      intro: 'One of the strongest V2 safety additions.',
      changed: [
        'The node stores a genesis binding in the data directory.',
        'On startup, run and send verify or create that binding.',
        'The binding is tied to the genesis state commitment.',
        'Mismatches hard-fail instead of being tolerated.',
      ],
      matters: [
        'You cannot accidentally reuse a data directory with a different genesis.',
        'A class of split-brain operator mistakes is prevented.',
        'A node cannot look fine locally while belonging to different network history.',
      ],
      compendium:
        'In plain terms: V2 taught the node to remember which chain it belongs to.',
    },
    {
      id: 'mempool',
      navLabel: 'Mempool',
      title: 'Mempool handling became more resilient',
      intro: 'V2 improved local pending-transaction behavior around real node lifecycles.',
      changed: [
        'Mempool capacity behavior was made more explicit.',
        'FIFO handling became easier to preserve and restore safely.',
        'Pending-state cleanup was tightened around restart and sync flows.',
        'Post-sync and post-append paths behave more consistently instead of relying on a single happy-path sealing loop.',
      ],
      matters: [
        'Pending transactions are less likely to become messy after block catch-up.',
        'Local policy state is less fragile around restart and inbound chain changes.',
        'Block production and pending-file recovery behave more consistently together.',
      ],
      compendium:
        'This aligns with compendium guidance on mempool discipline, eviction and cleanup, and keeping local policy separate from consensus truth.',
    },
    {
      id: 'separation',
      navLabel: 'Separation',
      title: 'A cleaner line between consensus rules and local-node behavior',
      intro: 'A subtle but important architectural improvement.',
      changed: [
        'Consensus-affecting behavior was treated more carefully.',
        'Local-only changes and wire or persistence hardening were separated from core chain rules.',
        'The project kept a protocol-freeze mindset so “hardening work” did not accidentally rewrite consensus.',
      ],
      matters: [
        'V2 strengthens the node without changing what the chain fundamentally means.',
        'The network becomes more reliable without becoming a different protocol.',
        'V3 can focus on future consensus and performance work rather than cleaning up accidental V2 drift.',
      ],
      compendium:
        'This matches the roadmap idea that V2 improves the node as a distributed system, not as a rushed platform expansion.',
    },
    {
      id: 'testing',
      navLabel: 'Tests',
      title: 'Testing got much stronger',
      intro:
        'V2 was not only code changes — it was more proof. The compendium treats persisted chain reloads, integration tests, multi-node sync, delayed catch-up, and convergence checks as strong evidence the system is real.',
      changed: [
        'Persistence and restart scenarios.',
        'Delayed-node catch-up behavior.',
        'Multi-node synchronization.',
        'Malformed peer input handling.',
        'Network defense paths.',
        'Regression coverage around hardening changes.',
      ],
      matters: [
        'V2 was not only “we added safeguards.” It was also “we proved those safeguards under more realistic node behavior.”',
      ],
      compendium: null,
    },
  ],
  notBecameTitle: 'What V2 did not become',
  notBecameIntro:
    'V2 did not turn Trilogicon into a smart-contract chain, a staking system, or a new consensus design. It stayed focused on:',
  notBecameFocus: [
    'Better node reliability',
    'Better sync',
    'Better persistence',
    'Better peer handling',
    'Better restart safety',
    'Better operational trustworthiness',
  ],
  notBecameClosing:
    'That restraint is what the roadmap said V2 should be — and what the implementation honored.',
  outScopeTitle: 'Explicitly excluded (by design)',
  outScopeIntro: 'These were never goals of V2:',
  outScopeItems: [
    'Smart contracts',
    'Staking or validator economy redesign',
    'DeFi',
    'Bridges',
    'Multiple token standards',
    'Privacy features',
    'Major consensus redesign',
    'Performance chasing for marketing',
    '“High TPS” as a headline feature',
    'Broad protocol expansion unrelated to reliability',
  ],
  summaryTitle: 'The simplest summary',
  summaryParagraphs: [
    'V1 proved Trilogicon could function.',
    'V2 proved Trilogicon could keep functioning more safely under real node conditions: wrong peers, wrong genesis, malformed traffic, restarts, partial writes, pending transaction recovery, delayed synchronization, and multi-node operation.',
    'The update, in one sentence: take the working chain from V1 and harden the node around it until it behaves like a much more serious distributed system.',
  ],
  narrowTitle: 'Why the scope stayed narrow',
  narrowParagraphs: [
    'V2 was always about making nodes more reliable — not making the protocol bigger. Wider surfaces make failures harder to reproduce, test, and explain across independent operators.',
    'The work stays accountable to observable outcomes: stable sync, sane recovery, predictable peer behavior, and tests that reflect distributed reality.',
  ],
  meansTitle: 'What this means for Trilogicon',
  meansBody:
    'The project remains a native base-layer chain for understandable value transfer. Credibility comes from how the node behaves under stress — Simple. Secure. User-focused. — not from an expanding feature brochure.',
  closingTitle: 'References',
  closingBody:
    'Authoritative detail lives in the public repositories. This page describes what V2 delivered; the code is the contract.',
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
    { label: 'V2', href: '/v2' },
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
