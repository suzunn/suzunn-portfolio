'use client';

import { useEffect, useState } from 'react';
import ClientOnly from './ClientOnly';

export default function SkillsSection() {
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsWide(window.innerWidth > 768);
    };
    
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <ClientOnly>
      <section className={isWide ? 'wide-layout' : 'narrow-layout'}>
        {/* ...skills content... */}
      </section>
    </ClientOnly>
  );
}
