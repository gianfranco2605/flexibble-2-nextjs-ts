import Image from "next/image"
import { MouseEventHandler } from "react"

type Props = {
    title: any,
    type?: 'button' | 'submit',
    leftIcon?: string | null,
    rightIcon?: string | null,
    isSubmitting?: boolean,
    handleClick?: MouseEventHandler,
    bgColor?: string,
    textColor?: string, 

}

const Button = ({ title, type, leftIcon, rightIcon, isSubmitting, handleClick, bgColor, textColor }: Props) => {
  return (
    <button
        type={type || 'button'}
        disable={isSubmitting}
        className={` flexCenter gap-3 px-4 py-3 ${textColor ? textColor : 'text-[#5E6F00]'} ${isSubmitting ? 'bg-black/50' : (bgColor ? bgColor : 'bg-[#D8FF00]')} rounded-xl text-md font-medium max-md:w-full`}
        
    >
    {leftIcon && <Image src={leftIcon} width={14} height={14} alt="left"  />}
    {rightIcon && <Image src={rightIcon} width={14} height={14} alt="left" />}    
    {title}
    </button>
  )
}

export default Button