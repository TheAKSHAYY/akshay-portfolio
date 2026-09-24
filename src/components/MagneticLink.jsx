import { useRef } from 'react'

export default function MagneticLink({ children, className = '', ...props }) {
  const ref = useRef(null)
  const move = (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const item = ref.current; const rect = item.getBoundingClientRect()
    const x = (event.clientX - rect.left - rect.width / 2) * 0.16
    const y = (event.clientY - rect.top - rect.height / 2) * 0.16
    item.style.transform = `translate(${x}px, ${y}px)`
  }
  const leave = () => { if (ref.current) ref.current.style.transform = '' }
  return <a ref={ref} className={`magnetic ${className}`} onMouseMove={move} onMouseLeave={leave} {...props}>{children}</a>
}
