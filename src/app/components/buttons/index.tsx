import React from 'react'
import { MktButtonProps } from './interface'
import { MktButtonStyle } from './style'

function MktButton({ label, type, $maxWidth, $disabled, $width, $color, $height, $className, icon, onClick, suffixIcon }: MktButtonProps) {
  return (
    <MktButtonStyle
      type={type}
      $width={$width}
      $color={$color}
      $maxWidth={$maxWidth}
      disabled={$disabled}
      $height={$height}
      className={$className}
      onClick={onClick}
    >
      {icon}
      {label}
      {suffixIcon}
    </MktButtonStyle>
  )
}

export default MktButton