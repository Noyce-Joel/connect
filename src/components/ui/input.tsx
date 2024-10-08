import * as React from "react";

import { cn } from "@/lib/utils/mainUtils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full border border-input bg-transparent px-3 py-1 text-sm   file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
        style={{ borderRadius: "0.375rem" }} // 0.375rem is the same as 'rounded-md'
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
