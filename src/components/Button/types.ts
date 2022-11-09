import { Variants } from 'theme/types';
import { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: Variants;
}

export interface ButtonStyledProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: Variants;
}

// export type AsProps<E extends ElementType = ElementType> = {
//   as?: E;
// };
// export type MergeProps<E extends ElementType> = AsProps<E> &
//   Omit<ComponentProps<E>, keyof AsProps>;

// export type PolymorphicComponentProps<E extends ElementType, P> = P &
//   MergeProps<E>;

// export type ButtonProps<
//   P extends ElementType = 'button'
// > = PolymorphicComponentProps<
//   P,
//   {
//     isLoading?: boolean;
//     isLoadingText?: string;
//     title: string;
//     variant?: Variants;
//     disabled?: boolean;
//   }
// >;
