"use client";

import type { ReactNode, MouseEvent } from "react";

/**
 * A submit button for a <form action={serverAction}> that asks for
 * confirmation before letting the submit go through — for destructive
 * actions like delete, without needing a full modal/dialog component.
 */
export function ConfirmSubmitButton({
  children,
  confirmMessage,
  className,
}: {
  children: ReactNode;
  confirmMessage: string;
  className?: string;
}) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!confirm(confirmMessage)) {
      e.preventDefault();
    }
  };

  return (
    <button type="submit" className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
