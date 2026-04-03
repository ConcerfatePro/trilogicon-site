import logoPng from '../assets/trilogicon-logo.png'

/**
 * Official Trilogicon mark (raster). Keeps circular emblem crisp via object-fit.
 */
export function TrilogiconMark({ className = '', size = 40 }) {
  return (
    <img
      src={logoPng}
      alt=""
      width={size}
      height={size}
      decoding="async"
      className={`shrink-0 object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.18)] ${className}`}
    />
  )
}
