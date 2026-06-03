/**
 * FAQ content — edit questions and answers here.
 */

export const faqCategories = [
  {
    id: 'general',
    title: 'General',
    items: [
      {
        id: 'gen-live',
        question: 'Is Trilogicon live?',
        answer:
          'Not as a public production network. V1 and V2 are complete for their scope, but public testnet tooling is still being worked on.',
      },
      {
        id: 'gen-tril',
        question: 'What is TRIL?',
        answer: 'TRIL is the native unit of Trilogicon.',
      },
      {
        id: 'gen-rust',
        question: 'Why Rust?',
        answer:
          'Rust fits the kind of project this is: state, signatures, blocks, networking, persistence, and a lot of places where careless code becomes expensive later.',
      },
      {
        id: 'gen-run',
        question: 'Can I run it?',
        answer:
          'Check the core repository and any README or operator notes there. Public run instructions are still being cleaned up as testnet tooling matures.',
      },
      {
        id: 'gen-sale',
        question: 'Is this a token sale?',
        answer: 'No.',
      },
      {
        id: 'gen-different',
        question: 'What makes it different?',
        answer:
          'The base layer is kept narrow: signed transfers, deterministic validation, and node behavior you can reason about without a feature brochure.',
      },
    ],
  },
  {
    id: 'community',
    title: 'Contact',
    items: [
      {
        id: 'com-updates',
        question: 'Where can updates be followed?',
        answer:
          'X: https://x.com/trilogicon/\nCore source: https://github.com/ConcerfatePro/trilogicon-core',
      },
      {
        id: 'com-questions',
        question: 'Where should questions be sent?',
        answer:
          'Email: contact@trilogicon.com\nX: https://x.com/trilogicon/',
      },
    ],
  },
]

export const contactSectionContent = {
  title: 'Still have a question?',
  description: 'Email: contact@trilogicon.com\nX: https://x.com/trilogicon/',
  note: '',
}
