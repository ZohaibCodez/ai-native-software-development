/**
 * OriginalTab Component - displays original page content unchanged
 */
import React, { ReactNode } from 'react';

interface OriginalTabProps {
  children: ReactNode;
}

export default function OriginalTab({ children }: OriginalTabProps): React.ReactElement {
  return (
    <div role="tabpanel" id="original-panel" aria-labelledby="original-tab">
      {children}
    </div>
  );
}
