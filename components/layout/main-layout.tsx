import { cn } from '@/lib/utils';
import React from 'react';
import { Platform, View } from 'react-native';

type MainLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <View
      className={cn(
        'flex-1 bg-background',
        Platform.select({
          web: 'max-w-screen-2xl mx-auto',
        }),
        className
      )}
    >
      <View
        className={cn(
          'flex-1 flex-row',
          Platform.select({
            web: 'md:flex-row',
          })
        )}
      >
        {children}
      </View>
    </View>
  );
}

