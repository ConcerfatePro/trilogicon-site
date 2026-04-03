/**
 * FAQ content — edit questions and answers here.
 * Categories can be extended by adding objects to `faqCategories`.
 */

export const faqCategories = [
  {
    id: 'general',
    title: 'General',
    items: [
      {
        id: 'gen-what',
        question: 'What is Trilogicon?',
        answer:
          'Trilogicon is a simple, secure, user-focused cryptocurrency network being built from scratch. It is designed as a base-layer protocol with its own native asset and node software, emphasizing clear rules and dependable value transfer over feature overload or hype-driven design.',
      },
      {
        id: 'gen-tril',
        question: 'What does TRIL represent?',
        answer:
          'TRIL is the ticker symbol for Trilogicon’s native asset. It represents the unit used for value transfer and network-level fees within the protocol.',
      },
      {
        id: 'gen-goal',
        question: 'What is the main goal of Trilogicon?',
        answer:
          'The goal is to build a clear, reliable, and genuinely useful digital value-transfer network. Success is measured by sound protocol behavior, security, and long-term practicality rather than short-term attention or unnecessary complexity.',
      },
      {
        id: 'gen-why',
        question: 'Why is Trilogicon being built?',
        answer:
          'Trilogicon is being built with a user-focused goal in mind: trustworthy transfers, understandable rules, secure ownership, predictable network behavior, and long-term usefulness. Rather than prioritizing narrative or rapid feature expansion, the project focuses on building a foundation that people can understand and rely on.',
      },
      {
        id: 'gen-user-focused',
        question: 'What is meant by a “user-focused” network?',
        answer:
          'It means design decisions prioritize clarity, safety, and predictable outcomes for the people using the network. Trust should come from understandable rules, strong validation, and dependable behavior rather than marketing language or unnecessary complexity.',
      },
    ],
  },
  {
    id: 'v1',
    title: 'V1 Development',
    items: [
      {
        id: 'v1-focus',
        question: 'What is the primary focus of Trilogicon V1?',
        answer:
          'V1 is focused on the core foundation: account creation, balances, sending and receiving TRIL, signature verification, replay protection through nonces, transaction and block validation, blockchain validation, and synchronization across nodes. The objective is to build a minimal and correct value-transfer network before expanding scope.',
      },
      {
        id: 'v1-experimental',
        question: 'Is Trilogicon still experimental?',
        answer:
          'The project is still early and under active development. That said, the direction is intentional: the protocol boundaries, security posture, and scope are being chosen deliberately rather than ad hoc. “Experimental” here reflects the stage of development, not a lack of design discipline.',
      },
      {
        id: 'v1-live',
        question: 'Is Trilogicon currently live?',
        answer:
          'No. Trilogicon is currently in development and is not being presented as a live production mainnet. All public communication reflects that stage honestly, without fabricated launch claims or operational metrics.',
      },
      {
        id: 'v1-excluded',
        question: 'What features are intentionally excluded from V1?',
        answer:
          'V1 does not include smart contracts, DeFi, governance systems, bridges, advanced staking, privacy features, or additional token types beyond the core network design. These areas introduce additional complexity and audit surface, so they are deferred until the base layer is sound.',
      },
      {
        id: 'v1-adopters',
        question: 'Are early adopters being brought in now, or later?',
        answer:
          'The immediate priority is building the foundation correctly: consistent validation, reliable state transitions, and dependable node behavior. Broader visibility and community growth can develop gradually as the implementation and documentation mature.',
      },
      {
        id: 'v1-minimal',
        question: 'Why keep V1 intentionally minimal?',
        answer:
          'A narrow first version reduces the number of interacting failure modes and makes validation easier to reason about. Establishing correct transfers, block behavior, and synchronization first creates a stronger foundation for later versions.',
      },
      {
        id: 'v1-simplicity',
        question: 'Why is simplicity important in early protocol design?',
        answer:
          'Complexity compounds quickly. Each additional subsystem increases the number of ways consensus, state, and networking can fail or diverge. Keeping the early design simple improves auditability, implementation confidence, and long-term maintainability.',
      },
    ],
  },
  {
    id: 'technical',
    title: 'Technical',
    items: [
      {
        id: 'tech-chain',
        question: 'Is Trilogicon its own blockchain?',
        answer:
          'Yes. Trilogicon is intended to be its own base-layer blockchain rather than a token issued on another network. It defines its own blocks, validation rules, and native asset within the protocol.',
      },
      {
        id: 'tech-account',
        question: 'Is Trilogicon account-based or UTXO-based?',
        answer:
          'Trilogicon uses an account-based ledger model. Each account maintains state such as a balance and nonce, which supports simpler reasoning around authorization ordering and replay protection for the project’s goals.',
      },
      {
        id: 'tech-smart-contracts',
        question: 'Will Trilogicon include smart contracts?',
        answer:
          'Smart contracts are not part of V1. The current focus is a simple and secure transfer network with strict validation rules. More advanced programmability would only be considered later if the base layer is strong enough to support it responsibly.',
      },
      {
        id: 'tech-meme-token',
        question: 'Will there be a meme token or additional token alongside the network?',
        answer:
          'No additional token is planned for V1. The focus is on the core network and its native asset rather than parallel token experiments that distract from protocol correctness and security.',
      },
      {
        id: 'tech-user-focused',
        question: 'What makes Trilogicon user-focused in technical terms?',
        answer:
          'The design emphasizes clarity of rules, strong ownership verification, replay protection, deterministic state transitions, and predictable node behavior. The goal is to make the system easier to understand, safer to use, and more dependable over time.',
      },
      {
        id: 'tech-problem',
        question: 'What problem is Trilogicon trying to solve?',
        answer:
          'Many cryptocurrency systems become difficult to understand, overly extended with features, or driven by short-term incentives. Trilogicon focuses on a smaller and more disciplined objective first: reliable digital value transfer with understandable infrastructure and dependable operation.',
      },
      {
        id: 'tech-rust',
        question: 'What role does Rust play in the project?',
        answer:
          'Rust is the intended language for the core node implementation. It was chosen for memory safety, performance, and maintainability in systems programming, with the goal of building reference software that matches the protocol’s security expectations.',
      },
      {
        id: 'tech-evolve',
        question: 'How will the project evolve after V1?',
        answer:
          'Later versions are expected to improve networking, synchronization, resilience, consensus design, and performance after V1 establishes a correct and stable foundation. Broader features would only be considered cautiously and when justified by maturity and clarity.',
      },
      {
        id: 'tech-longterm',
        question: 'Is Trilogicon designed for long-term development?',
        answer:
          'Yes. Trilogicon is being approached as a multi-version project focused on disciplined, long-term evolution rather than a one-time release. Maintainability, clarity, and long-term usefulness are core goals.',
      },
    ],
  },
  {
	  id: 'community',
	  title: 'Community / Contact',
	  items: [
		{
		  id: 'com-updates',
		  question: 'Where can updates be followed?',
		  answer:
			'Updates are shared through the project’s public channels as development progresses.\n\nX: https://x.com/trilogicon/',
		},
		{
		  id: 'com-questions',
		  question: 'Where should questions be sent?',
		  answer:
			'For direct inquiries, you can reach out via email or through the contact section on this page.\n\nEmail: contact@trilogicon.com\nX: https://x.com/trilogicon/\n\nCommon topics may be added to this FAQ over time as the project and its documentation continue to grow.',
		},
		{
		  id: 'com-docs',
		  question: 'Will documentation or this FAQ expand later?',
		  answer:
			'Yes. As the protocol and implementation mature, additional documentation and FAQ coverage will be added. Early pages are focused on clarity, structure, and honest communication.',
		},
	  ],
	}
]

export const contactSectionContent = {
  title: 'Still have a question?',
  description:
    'If your question is not covered here, you can reach out directly.\n\nEmail: contact@trilogicon.com\nX: https://x.com/trilogicon/\n\nAs the project develops, more structured communication and documentation will be added.',
  note: 'Common questions may be incorporated into this page over time as development progresses.',
}