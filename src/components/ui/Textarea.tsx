"use client";

import { TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-gray-900 mb-1"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 hover:border-gray-400"
          } ${className}`}
          rows={4}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
