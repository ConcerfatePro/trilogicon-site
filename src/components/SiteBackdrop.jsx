/**
 * Minimal network backdrop: faint nodes and edges (blockchain-like),
 * slight perspective for understated depth. Low contrast for readability.
 */

/** viewBox 0–1000 × 0–700 */
const NODES = [
  [48, 338],
  [118, 302],
  [188, 328],
  [258, 288],
  [328, 312],
  [398, 276],
  [468, 298],
  [538, 262],
  [608, 284],
  [678, 248],
  [748, 272],
  [818, 242],
  [888, 266],
  [958, 228],
  [218, 392],
  [288, 428],
  [358, 404],
  [428, 452],
  [318, 198],
  [388, 168],
  [508, 388],
  [578, 418],
  [648, 356],
  [718, 398],
  [158, 318],
  [798, 308],
]

/** Chain spine + short branches / cross-links */
const EDGES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 12],
  [12, 13],
  [2, 14],
  [14, 15],
  [15, 16],
  [16, 17],
  [3, 18],
  [18, 19],
  [6, 20],
  [20, 21],
  [8, 22],
  [22, 23],
  [1, 24],
  [24, 2],
  [10, 25],
  [25, 11],
  [5, 22],
]

function NetworkSvg({ className, lineAlpha, nodeAlpha, nodeR }) {
  const stroke = `rgba(250, 250, 250, ${lineAlpha})`
  const fill = `rgba(250, 250, 250, ${nodeAlpha})`
  return (
    <svg
      className={className}
      viewBox="0 0 1000 700"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke={stroke} strokeWidth={0.85} strokeLinecap="round" fill="none">
        {EDGES.map(([a, b], i) => {
          const [x1, y1] = NODES[a]
          const [x2, y2] = NODES[b]
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} vectorEffect="non-scaling-stroke" />
        })}
      </g>
      <g fill={fill}>
        {NODES.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={nodeR} vectorEffect="non-scaling-stroke" />
        ))}
      </g>
    </svg>
  )
}

export function SiteBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div className="absolute inset-0 bg-zinc-50 dark:bg-tril-black" />
      <div
        className="absolute inset-0 opacity-[0.35] dark:hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgb(0 0 0 / 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgb(0 0 0 / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute inset-0 hidden dark:block">
        <div className="site-backdrop-orb-left absolute -left-[18%] top-[-8%] h-[min(72vh,520px)] w-[min(68vw,520px)] rounded-full opacity-[0.08] blur-[120px]" />
        <div className="site-backdrop-orb-right absolute -right-[12%] top-[28%] h-[min(62vh,480px)] w-[min(62vw,480px)] rounded-full opacity-[0.07] blur-[130px]" />
        <div className="site-backdrop-orb-bottom absolute bottom-[-10%] left-[20%] h-[min(50vh,400px)] w-[min(80vw,640px)] rounded-full opacity-[0.05] blur-[140px]" />
        <div className="site-network-shell absolute inset-0 overflow-hidden">
          <div className="site-network-plane">
            <div className="site-network-layer site-network-layer--back">
              <NetworkSvg
                className="site-network-svg -translate-x-[2%] -translate-y-[5%] scale-[1.04]"
                lineAlpha={0.038}
                nodeAlpha={0.058}
                nodeR={1.1}
              />
            </div>
            <div className="site-network-layer site-network-layer--front">
              <NetworkSvg className="site-network-svg" lineAlpha={0.09} nodeAlpha={0.13} nodeR={1.35} />
            </div>
          </div>
        </div>
        <div className="site-grid-overlay absolute inset-0 opacity-[0.035]" />
        <div className="site-noise-overlay absolute inset-0 opacity-[0.018]" />
      </div>
    </div>
  )
}
