import { LucideIcon } from 'lucide-react'

type TextInputProps = {
    title: string,
    type: string,
    placeholder: string,
    name: string,
    icon: LucideIcon,
    required: boolean
}

const TextInput = ({ title, type, placeholder, icon: Icon, name, required }: TextInputProps) => {
  
    const id = `id-${title.toLowerCase()}`

    return (
    <div className='flex flex-col'>
        <label htmlFor={id} className='font-mono text-[12px] text-neutral-700 leading-none'>{title}</label>
        <div className='flex gap-3 items-center border-b border-neutral-400 py-2 transition-all duration-300 has-focus:border-terracotta-600'>
            <Icon size={16} className='text-neutral-700'/>
            <input 
                type={type} 
                id={id}
                name={name}
                placeholder={placeholder}
                className='outline-none w-full'
                autoComplete={type}
                required={required}
            />
        </div>
    </div>
  )
}

export default TextInput