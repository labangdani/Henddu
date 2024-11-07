

export default function SvgIcon({path}){

    return (
    <span className="inline-flex justify-center items-center w-10 h-10">
        <svg viewBox="0 0 24 24" width={200} height={200} className="inline-block">
          <path fill="currentColor" d={path} />
        </svg>
        <slot />
      </span>
    )
}