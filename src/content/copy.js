/**
 * Site copy — edit strings here to update page content.
 */

export const brand = {
  name: 'Trilogicon',
  ticker: 'TRIL',
}

export const social = {
  xUrl: 'https://x.com/trilogicon/',
  xHandle: '@trilogicon',
}

export const waitlist = {
  title: 'Want occasional updates?',
  subtitle:
    'Low-noise notes when testnet tooling, explorer work, or public testing moves forward.',
  emailLabel: 'Email',
  emailPlaceholder: 'you@example.com',
  xLabel: 'X handle (optional)',
  xPlaceholder: 'trilogicon',
  submit: 'Join updates',
  submitting: 'Sending…',
  success: 'Thanks. You are on the list.',
  errorGeneric: 'Something went wrong. Try again later.',
  unavailable: 'Updates are temporarily unavailable.',
}

export const sourceUrl = 'https://github.com/ConcerfatePro/trilogicon-core'
export const docsHref = '/v2'

export const home = {
  hero: {
    title: 'Trilogicon',
    subheading: 'A minimal blockchain built in Rust.',
    ctaDocs: 'Read the docs',
    ctaSource: 'View source',
  },
  whatIs: {
    title: 'What is Trilogicon?',
    body:
      'Trilogicon is an account-based blockchain for signed value transfer. It uses accounts, balances, nonces, blocks, and deterministic validation so nodes can replay the chain from the same genesis.',
  },
  currentState: {
    title: 'Current state',
    items: [
      { label: 'V1', detail: 'protocol core complete' },
      { label: 'V2', detail: 'node hardening complete' },
      { label: 'Next', detail: 'testnet tooling and stronger network behavior' },
    ],
  },
  baseLayer: {
    title: 'Built from the base layer',
    body:
      'The project is starting with the parts a chain cannot fake: signed transactions, replay protection, block validation, persistence, and sync. More can come later. The base layer has to be understandable first.',
  },
  next: {
    title: 'What comes next?',
    body:
      'Next work is focused on branch selection, block indexing, reorg checks, replay testing, faucet tooling, and an explorer. Wallet work comes later.',
  },
  tril: {
    title: 'TRIL',
    body: 'TRIL is the native unit of Trilogicon.',
    optional: 'No token sale language. No meme branding.',
  },
  faq: [
    {
      question: 'Is Trilogicon live?',
      answer:
        'Not as a public production network yet. V1 and V2 are complete for their scope, and testnet tooling is still being worked on.',
    },
    {
      question: 'What is TRIL?',
      answer: 'TRIL is the native unit of Trilogicon.',
    },
    {
      question: 'Why Rust?',
      answer:
        'Rust is a good fit for state, signatures, blocks, networking, and persistence.',
    },
    {
      question: 'Is this a token sale?',
      answer: 'No.',
    },
    {
      question: 'Where is the code?',
      answer: null,
      linkLabel: 'GitHub',
      linkHref: sourceUrl,
    },
  ],
}

export const nav = {
  links: [
    { label: 'Docs', href: docsHref },
    { label: 'Source', href: sourceUrl, external: true },
    { label: 'Updates', href: '/#updates' },
  ],
}

export const footer = {
  note: `${brand.name} · ${brand.ticker}`,
  links: [
    { label: 'Docs', href: docsHref },
    { label: 'Source', href: sourceUrl, external: true },
    { label: 'Updates', href: '/#updates' },
  ],
}

/** Legacy / other pages — keep v2, support, source blocks for /v2 and /support routes */
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

export const v1 = {
  title: 'Trilogicon V1',
  subtitle: 'Released. Fundamentals first — V2 hardens the node around this core.',
  intro:
    'The first release delivers a simple, secure digital value-transfer network: signed transfers, balance tracking, nonce-based replay protection, block validation, and multi-node synchronization.',
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

/** /v2 — V2 shipped; engineering retrospective */
export const v2Page = {
  docTitle: 'Trilogicon V2 — shipped',
  heroKicker: 'Release notes · engineering',
  heroTitle: 'Trilogicon V2',
  heroBadge: 'Shipped',
  heroLead:
    'V2 is complete. It hardens the node around the working V1 chain: wire discipline, explicit synchronization, safer persistence, and stronger proof under multi-node conditions.',
  heroSub:
    'Trilogicon remains a native base layer, not a feature platform. V2 did not expand the asset model; it made distributed operation more trustworthy.',
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
      label: 'Scope',
      title: 'Narrow on purpose',
      body: 'Understandable rules, dependable behavior, and respect for operators — not hype or scope creep.',
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
    'The project remains a native base-layer chain for understandable value transfer. Credibility comes from how the node behaves under stress — not from an expanding feature brochure.',
  closingTitle: 'References',
  closingBody:
    'Authoritative detail lives in the public repositories. This page describes what V2 delivered; the code is the contract.',
  ctaHome: 'Home',
  ctaProgress: 'Progress',
  ctaGithub: 'Core repository',
  githubUrl: 'https://github.com/ConcerfatePro/trilogicon-core',
}

/** /support */
export const supportPage = {
  kicker: 'Trilogicon · TRIL',
  title: 'Support Trilogicon',
  intro:
    'Trilogicon is a long-term engineering project focused on simple, understandable digital value transfer. Optional contributions can help with infrastructure, testing, documentation, and related project costs.',
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
