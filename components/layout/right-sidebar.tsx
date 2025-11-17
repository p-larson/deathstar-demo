import { cn } from '@/lib/utils';
import React from 'react';
import { Platform, ScrollView, View } from 'react-native';

type RightSidebarProps = {
  children: React.ReactNode;
  className?: string;
  minSize?: 'lg' | 'xl';
};

export function RightSidebar({
  children,
  className,
  minSize = 'lg',
}: RightSidebarProps) {
  return (
    <View
      className={cn(
        'hidden',
        Platform.select({
          web: minSize === 'lg' ? 'lg:flex' : 'xl:flex',
        }),
        Platform.select({
          web: 'lg:w-80 xl:w-96',
        }),
        'border-l border-border bg-background',
        className
      )}
    >
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingVertical: 16, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>
  );
}

