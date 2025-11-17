import { cn } from '@/lib/utils';
import React from 'react';
import { Platform, ScrollView, View } from 'react-native';

type SidebarProps = {
  children: React.ReactNode;
  className?: string;
  showOnMobile?: boolean;
};

export function Sidebar({ children, className, showOnMobile = false }: SidebarProps) {
  return (
    <View
      className={cn(
        showOnMobile ? 'flex' : 'hidden',
        Platform.select({
          web: 'md:flex',
        }),
        Platform.select({
          web: 'md:w-64 lg:w-72',
        }),
        'border-r border-border bg-background',
        className
      )}
    >
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingVertical: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>
  );
}

