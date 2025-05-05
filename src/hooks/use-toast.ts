'use client';

import { toast as sonnerToast } from 'sonner';
import * as React from 'react';

type ToastProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  variant?: 'default' | 'destructive';
};

const toast = (props: ToastProps) => {
  const { title, description, action, variant, ...rest } = props;

  return sonnerToast(title as string, {
    description,
    action,
    className: variant === 'destructive' ? 'bg-destructive text-destructive-foreground' : undefined,
    ...rest,
  });
};

function useToast() {
  return {
    toast,
    dismiss: (toastId?: string) => {
      if (toastId) {
        sonnerToast.dismiss(toastId);
      } else {
        sonnerToast.dismiss();
      }
    },
  };
}

export { useToast, toast };
