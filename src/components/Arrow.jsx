export default function Arrow({ diagonal = false }) {
  return <span className={diagonal ? 'arrow diagonal' : 'arrow'} aria-hidden="true">↗</span>
}
