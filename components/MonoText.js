'use client';

export default function MonoText({ children, className = '' }) {
  return (
    <span className={`font-geist-mono ${className}`.trim()}>
      {children}
    </span>
  );
}
