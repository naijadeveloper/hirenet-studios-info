"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className="bg-orange-300">
            <div className="grid gap-1">
              {title && (
                <ToastTitle className="text-orange-800">{title}</ToastTitle>
              )}
              {description && (
                <ToastDescription className="font-extrabold text-background">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="text-background hover:text-background focus:ring-transparent" />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
