import { cn } from '@/lib/utils';
import React from 'react';
import { Platform, ScrollView, View } from 'react-native';

type MainContentProps = {
  children: React.ReactNode;
  className?: string;
  scrollable?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
};

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  full: 'max-w-full',
};

export function MainContent({
  children,
  className,
  scrollable = true,
  maxWidth = '2xl',
}: MainContentProps) {
  const content = (
    <View
      className={cn(
        'flex-1 bg-background',
        Platform.select({
          web: cn(
            'w-full',
            maxWidth !== 'full' && `md:mx-auto md:${maxWidthClasses[maxWidth]}`
          ),
        }),
        className
      )}
    >
      {children}
    </View>
  );

  if (scrollable) {
    return (
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {content}
      </ScrollView>
    );
  }

  return content;
}

