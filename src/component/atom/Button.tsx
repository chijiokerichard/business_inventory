
interface ButtonProps { 
    children: React.ReactNode;
    color?: string;
    bg?: string;
    type?: "button" | "submit" | "reset";
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function Button({children,color,bg,className,onClick,type}: ButtonProps) {
  return (
    <button style={{color:`${color}`, background:`${bg}`}} onClick={onClick} className={className?className:`bg-blue-500 px-3 py-1 text-white rounded-md`}>
        {children}
    </button>
  )
}
