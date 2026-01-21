"use client";

import { SelectHTMLAttributes, forwardRef } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = "", id, ...props }, ref) => {
    const selectId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-gray-900 mb-1"
        >
          {label}
        </label>
        <select
          ref={ref}
          id={selectId}
          className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 hover:border-gray-400"
          } ${className}`}
          {...props}
        >
          <option value="">Sélectionnez une option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
