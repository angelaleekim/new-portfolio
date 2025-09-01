'use client';

import { useEffect, useState } from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { Switch, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: '2em',
      }}
    >
      <Switch
        size="md"
        onLabel={<IconSun size={16} stroke={2.5} />}
        offLabel={<IconMoon size={16} stroke={2.5} />}
        checked={colorScheme === 'dark'}
        onChange={() => toggleColorScheme()}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}
