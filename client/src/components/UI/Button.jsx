import React from 'react';
import { cva } from 'class-variance-authority';

const Button = ({ bg, text, border, size, type, onClick, ...props }) => {
  return (
    <button type={type} onClick={onClick} className={buttonVariants({ bg, text, border, size })} {...props} />
  );
};

const buttonVariants = cva("flex items-center justify-center gap-[10px] font-bold text-[17px] py-[10px] rounded-[10px]", {
    variants : {
        text : {
            black : "text-[color:var(--black)]",
            green : "text-[color:var(--green)]",
            white : "text-[color:var(--white)]",
            orange : "text-[color:var(--orange)]",
        },
        border : {
            none : "border-none",
            grey : "border-2 border-[color:var(--grey)]",
            green : "border-2 border-[color:var(--green)]",
            orange : "border-2 border-[color:var(--orange)]",
        },
        size : {
            sm : "px-[24px]",
            md : "px-[30px]",
            lg : "px-[50px]"
        },
        bg : {
            transparent : "bg-transparent",
            black : "bg-[color:var(--black)]",
            orange : "bg-[color:var(--orange)]"
        }
    },
    defaultVariants : {
        text : "black",
        border : "none",
        bg : "orange",
        size : "md"
    }
});

export default Button;
