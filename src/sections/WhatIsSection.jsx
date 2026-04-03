import { motion } from 'framer-motion'
import { SectionShell } from '../components/SectionShell'
import { whatIs } from '../content/copy'

export function WhatIsSection() {
  return (
    <SectionShell id="vision">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4 }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Vision</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
          {whatIs.title}
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
          {whatIs.intro}
        </p>
      </motion.div>

      <ul className="mt-14 grid gap-4 md:grid-cols-2">
        {whatIs.bullets.map((item, i) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="border border-zinc-800 bg-tril-elevated p-6 md:p-8"
          >
            <h3 className="font-mono text-sm font-medium text-zinc-200">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">{item.body}</p>
          </motion.li>
        ))}
      </ul>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mt-12 max-w-2xl border-l-2 border-zinc-600 pl-6 text-sm leading-relaxed text-zinc-500"
      >
        {whatIs.closing}
      </motion.p>
    </SectionShell>
  )
}
