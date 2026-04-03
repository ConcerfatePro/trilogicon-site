import { useCallback, useId, useState } from 'react'
import { motion } from 'framer-motion'
import { FaqAccordionItem } from '../components/faq/FaqAccordionItem'
import { faqCategories } from '../data/faqData'

const MESSAGE_MAX = 4000
const MESSAGE_MIN = 8

function ContactSection() {
  const sectionId = useId()

  return (
    <section
      id="contact"
      aria-labelledby={`${sectionId}-contact-heading`}
      className="border-t border-zinc-800 bg-tril-black"
    >
      <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Contact</p>

          <h2
            id={`${sectionId}-contact-heading`}
            className="mt-3 text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl"
          >
            Still have a question?
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500 md:text-base">
            If your question is not covered above, you can reach out directly using the contact
            details below. As the project develops, more structured communication and documentation
            will be added.
          </p>

          <p className="mt-3 text-sm text-zinc-600">
            Common questions may be incorporated into this page over time as development progresses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35 }}
          className="mt-12 rounded border border-zinc-800 bg-tril-surface/40 p-6 md:p-10"
        >
          <div className="space-y-6">
            <div className="border-b border-zinc-800 pb-5">
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">Email</p>
              <a
                href="mailto:contact@trilogicon.com"
                className="mt-2 inline-block text-sm text-zinc-100 transition-colors hover:text-white md:text-base"
              >
                contact@trilogicon.com
              </a>
            </div>

            <div className="border-b border-zinc-800 pb-5">
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">X</p>
              <a
                href="https://x.com/trilogicon/"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm text-zinc-100 transition-colors hover:text-white md:text-base"
              >
                x.com/trilogicon
              </a>
            </div>

            <div>
              <p className="text-xs leading-relaxed text-zinc-600">
                For direct inquiries, email is the best contact method. Updates are also shared
                publicly through X and the site as development progresses.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


export function FaqContactPage() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="min-h-svh bg-tril-black pt-24 pb-0">
      <header className="border-b border-zinc-800/90">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Trilogicon · TRIL
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-500 md:text-lg">
              Answers to common questions about Trilogicon, its goals, and V1 development—organized
              for clarity without unnecessary noise.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <div className="space-y-16 md:space-y-20">
          {faqCategories.map((cat, catIndex) => (
            <motion.section
              key={cat.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: catIndex * 0.03 }}
              aria-labelledby={`faq-cat-${cat.id}`}
            >
              <div className="mb-6 flex items-end justify-between gap-4 border-b border-zinc-800 pb-4">
                <h2
                  id={`faq-cat-${cat.id}`}
                  className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-zinc-300"
                >
                  {cat.title}
                </h2>
                <span className="font-mono text-[10px] text-zinc-600" aria-hidden>
                  {String(catIndex + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="rounded border border-zinc-800 bg-tril-surface/30 px-1 md:px-4">
                {cat.items.map((item) => (
                  <FaqAccordionItem
                    key={item.id}
                    itemId={item.id}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openId === item.id}
                    onToggle={toggle}
                  />
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      <ContactSection />
    </div>
  )
}
