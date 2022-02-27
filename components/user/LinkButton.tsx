import cl from "clsx"
import Link from "next/link"

interface Props {
  text?: string
  link: string
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element
  className?: string
}

function LinkButton({ text, link, Icon, className }: Props) {
  return (
    <Link href={link}>
      <a className="flex items-center space-x-4 rounded-md py-1 px-2 font-bold hover:bg-[#ffcd1f]">
        <Icon className={cl("h-8 w-8", className)} />
        <h1>{text}</h1>
      </a>
    </Link>
  )
}

export default LinkButton
