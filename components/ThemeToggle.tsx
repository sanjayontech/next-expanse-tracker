'use client';

import { useTheme } from '@/context/ThemeContext';
import { use, useEffect, useState } from 'react';

export default function ThemeToggle() {
    const {theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // don't render until mounted to avoid hydration mismatch
    if (!mounted) {
        return null;
    }
}