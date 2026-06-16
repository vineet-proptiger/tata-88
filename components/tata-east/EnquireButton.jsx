'use client'
import React from 'react'
import { useModal } from './ModalContext'

export default function EnquireButton({ children, className, style, onClick, ...props }) {
  const { setIsOpen } = useModal()

  const handleClick = (e) => {
    setIsOpen(true)
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <button className={className} style={style} onClick={handleClick} {...props}>
      {children}
    </button>
  )
}
