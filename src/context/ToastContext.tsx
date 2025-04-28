import { LucideAlertTriangle, LucideCheck } from "lucide-react";
import React from "react";

type ToastVariant = "success" | "warning";

type ToastContextType = {
  showToast: (params: { variant: ToastVariant; message: string }) => void;
};

const ToastContext = React.createContext<ToastContextType | undefined>(
  undefined,
);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toast, setToast] = React.useState<{
    visible: boolean;
    message?: string;
    variant?: ToastVariant;
  }>({
    visible: false,
  });

  const showToast = ({
    variant,
    message,
  }: {
    variant: ToastVariant;
    message: string;
  }) => {
    setToast({
      visible: true,
      message,
      variant,
    });

    setTimeout(() => {
      setToast({
        visible: false,
        message: undefined,
        variant: undefined,
      });
    }, 5000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast.visible && (
        <div className="animate-bounce-in fixed top-4 right-4 z-50">
          <div
            className={`rounded-lg border-2 px-8 py-6 shadow-xl ${
              toast.variant === "success"
                ? "border-green-500 bg-green-200 text-green-900"
                : "border-yellow-500 bg-yellow-200 text-yellow-900"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl">
                {toast.variant === "success" ? (
                  <LucideCheck />
                ) : (
                  <LucideAlertTriangle />
                )}
              </div>
              <p className="text-lg font-semibold">{toast.message}</p>
            </div>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
