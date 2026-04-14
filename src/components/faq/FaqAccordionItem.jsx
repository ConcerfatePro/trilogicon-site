import { ChevronDown } from 'lucide-react'

export function FaqAccordionItem({
  itemId,
  question,
  answer,
  isOpen,
  onToggle,
}) {
  return (
    <div className="border-b border-zinc-200 last:border-b-0 dark:border-zinc-800">
      <h3 className="m-0">
        <button
          type="button"
          id={`faq-trigger-${itemId}`}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${itemId}`}
          onClick={() => onToggle(itemId)}
          className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:bg-zinc-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:hover:bg-zinc-900/40 dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-tril-black md:py-5"
        >
          <span className="font-mono text-[13px] font-medium leading-snug text-zinc-900 dark:text-zinc-100 md:text-sm">
            {question}
          </span>
          <ChevronDown
            className={`mt-0.5 h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
            strokeWidth={1.5}
            aria-hidden
          />
        </button>
      </h3>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            id={`faq-panel-${itemId}`}
            role="region"
            aria-labelledby={`faq-trigger-${itemId}`}
            className="pb-5 pr-2 md:pr-8"
          >
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-500 md:text-[15px]">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
