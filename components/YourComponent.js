'use client';

import { useEffect, useState } from 'react';
import styles from './YourComponent.module.css';

export default function YourComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`${styles.base} geist geist-mono`}>
      {mounted ? (
        <div className={styles.browserSpecific}>
          {/* Client-side rendered content */}
        </div>
      ) : (
        <div className={styles.base}>
          {/* Server-side rendered content */}
        </div>
      )}
    </div>
  );
}
