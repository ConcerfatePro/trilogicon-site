import logoPng from '../assets/trilogicon-logo.png'

/**
 * Official Trilogicon mark (raster). Keeps circular emblem crisp via object-fit.
 * @param {'dark' | 'light'} [tone='dark'] — light inverts for use on pale backgrounds.
 */
export function TrilogiconMark({ className = '', size = 40, tone = 'dark' }) {
  const toneClass =
    tone === 'light'
      ? 'drop-shadow-none brightness-0 contrast-[1.05]'
      : 'drop-shadow-[0_0_12px_rgba(255,255,255,0.18)]'
  return (
    <img
      src={logoPng}
      alt=""
      width={size}
      height={size}
      decoding="async"
      className={`shrink-0 object-contain ${toneClass} ${className}`}
    />
  )
}
