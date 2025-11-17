import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import React from 'react';
import { Platform, Pressable, View } from 'react-native';

type NavItemProps = {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  onPress?: () => void;
  href?: string;
  showLabel?: boolean;
  className?: string;
};

export function NavItem({
  icon,
  label,
  active = false,
  onPress,
  href,
  showLabel = false,
  className,
}: NavItemProps) {
  const content = (
    <View
      className={cn(
        'flex-row items-center gap-3',
        showLabel ? 'justify-start px-4' : 'justify-center',
        Platform.select({
          web: 'md:justify-start md:px-4',
        }),
        'rounded-full',
        active && 'bg-accent',
        Platform.select({
          web: 'hover:bg-accent/50',
        }),
        'py-3',
        className
      )}
    >
      {icon && (
        <View className="items-center justify-center" style={{ width: 24, height: 24 }}>
          {icon}
        </View>
      )}
      {(showLabel || Platform.OS === 'web') && (
        <Text
          className={cn(
            'text-base font-medium',
            active ? 'text-foreground' : 'text-muted-foreground',
            !showLabel && Platform.select({ web: 'hidden md:block' })
          )}
        >
          {label}
        </Text>
      )}
    </View>
  );

  if (href) {
    return (
      <Pressable onPress={onPress} className="w-full">
        {content}
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onPress} className="w-full">
      {content}
    </Pressable>
  );
}

