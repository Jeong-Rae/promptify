import { Select as RadixSelect } from '@radix-ui/themes';
import type { ComponentProps } from 'react';

type RadixSelectRootProps = ComponentProps<typeof RadixSelect.Root>;
type RadixSelectTriggerProps = ComponentProps<typeof RadixSelect.Trigger>;
type RadixSelectContentProps = ComponentProps<typeof RadixSelect.Content>;
type RadixSelectItemProps = ComponentProps<typeof RadixSelect.Item>;
type RadixSelectGroupProps = ComponentProps<typeof RadixSelect.Group>;
type RadixSelectLabelProps = ComponentProps<typeof RadixSelect.Label>;
type RadixSelectSeparatorProps = ComponentProps<typeof RadixSelect.Separator>;

export interface SelectProps extends Omit<RadixSelectRootProps, 'children'> {
  width?: string | number;
  className?: string;
  children: React.ReactNode;
}

export const Select = ({ 
  width,
  className,
  children,
  ...props
}: SelectProps) => {
  return (
    <RadixSelect.Root {...props}>
      <RadixSelect.Trigger 
        variant="soft"
        color="teal"
        className={className}
        style={{ width: width || '220px' }}
      />
      <RadixSelect.Content position="popper">
        {children}
      </RadixSelect.Content>
    </RadixSelect.Root>
  );
};

Select.Item = RadixSelect.Item;
Select.Group = RadixSelect.Group;
Select.Label = RadixSelect.Label;
Select.Separator = RadixSelect.Separator;
Select.Trigger = RadixSelect.Trigger;

export type SelectRootProps = RadixSelectRootProps;
export type SelectTriggerProps = RadixSelectTriggerProps;
export type SelectContentProps = RadixSelectContentProps;
export type SelectItemProps = RadixSelectItemProps;
export type SelectGroupProps = RadixSelectGroupProps;
export type SelectLabelProps = RadixSelectLabelProps;
export type SelectSeparatorProps = RadixSelectSeparatorProps; 