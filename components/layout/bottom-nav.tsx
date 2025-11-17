import { cn } from '@/lib/utils';
import React from 'react';
import { Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type BottomNavProps = {
  children: React.ReactNode;
  className?: string;
};

export function BottomNav({ children, className }: BottomNavProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className={cn(
        'flex',
        Platform.select({
          web: 'md:hidden',
        }),
        Platform.select({
          web: 'fixed bottom-0 left-0 right-0',
          default: 'absolute bottom-0 left-0 right-0',
        }),
        'border-t border-border bg-background',
        className
      )}
      style={Platform.select({
        default: {
          paddingBottom: Math.max(insets.bottom, 8),
        },
      })}
    >
      <View
        className={cn(
          'flex-row items-center justify-around',
          'h-16 px-4',
          Platform.select({
            web: 'h-14',
          })
        )}
      >
        {children}
      </View>
    </View>
  );
}

