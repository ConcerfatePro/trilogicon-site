import { motion } from 'framer-motion'

export function PrincipleCard({ title, body, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group relative flex flex-col border border-zinc-800 bg-tril-surface p-6 transition-[border-color,box-shadow] hover:border-zinc-600 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
    >
      <div className="mb-4 h-px w-8 bg-zinc-600 transition-colors group-hover:bg-zinc-400" />
      <h3 className="font-mono text-sm font-medium uppercase tracking-widest text-zinc-100">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{body}</p>
    </motion.article>
  )
}
