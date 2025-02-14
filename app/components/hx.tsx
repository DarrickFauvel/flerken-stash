import React, { JSX } from "react"

type HxProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
}

export default function Hx({ level, children, className }: HxProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return <Tag className={className}>{children}</Tag>
}
