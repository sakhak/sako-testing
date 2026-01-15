import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ActionKey = "inquiry" | "email" | "phone" | "whatsapp";

interface FloatingActionBarProps {
  onInquiryClick?: () => void;
  email?: string;
  phone?: string;
  whatsappNumber?: string; // e.g. "+85512345678"
}

const ease = [0.2, 0.8, 0.2, 1] as const;

const FloatingActionBar: React.FC<FloatingActionBarProps> = ({
  onInquiryClick,
  email = "sales@sakopower.com",
  phone = "+86 755 1234 5678",
  whatsappNumber = "+86 755 1234 5678",
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const actions = useMemo(
    () =>
      [
        {
          key: "inquiry" as ActionKey,
          label: "Inquiry",
          hint: "Send inquiry",
          icon: <IconChat className="w-6 h-6" />,
          onClick: () => onInquiryClick?.(),
        },
        {
          key: "email" as ActionKey,
          label: "Email",
          hint: email,
          icon: <IconMail className="w-6 h-6" />,
          onClick: () => window.open(`mailto:${email}`, "_self"),
        },
        {
          key: "phone" as ActionKey,
          label: "Phone",
          hint: phone,
          icon: <IconPhone className="w-6 h-6" />,
          onClick: () =>
            window.open(`tel:${phone.replace(/\s+/g, "")}`, "_self"),
        },
        {
          key: "whatsapp" as ActionKey,
          label: "WhatsApp",
          hint: whatsappNumber,
          icon: <IconWhatsapp className="w-6 h-6" />,
          onClick: () =>
            window.open(
              `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}`,
              "_blank",
              "noopener,noreferrer"
            ),
        },
      ] as const,
    [email, phone, whatsappNumber, onInquiryClick]
  );

  // Mobile dock shows 3 main + "More" (or show all if you want)
  const mobileMain = actions.slice(0, 3);
  const mobileMore = actions.slice(3);

  if (isMobile) {
    return (
      <>
        {/* Mobile Bottom Dock */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease }}
          className="fixed left-0 right-0 bottom-3 z-50 px-3"
        >
          <div className="mx-auto max-w-md">
            <div className="relative bg-gray-900/90 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-2 py-2">
                {mobileMain.map((a) => (
                  <ActionButton
                    key={a.key}
                    variant="mobile"
                    label={a.label}
                    icon={a.icon}
                    onClick={a.onClick}
                  />
                ))}

                {/* More */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMoreOpen((v) => !v)}
                  className="flex flex-col items-center justify-center w-20 py-2 rounded-xl text-white/90 hover:text-white hover:bg-white/5 transition-colors"
                  aria-label="More"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center shadow-lg">
                    <IconDots className="w-6 h-6" />
                  </div>
                  <span className="mt-1 text-[10px] font-black uppercase tracking-widest">
                    More
                  </span>
                </motion.button>
              </div>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease }}
                    className="border-t border-white/10"
                  >
                    <div className="grid grid-cols-4 gap-2 p-2">
                      {mobileMore.map((a) => (
                        <ActionButton
                          key={a.key}
                          variant="mobileSecondary"
                          label={a.label}
                          icon={a.icon}
                          onClick={a.onClick}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </>
    );
  }

  // Desktop Right Bar
  return (
    <motion.div
      initial={{ x: 24, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50"
    >
      <div className="flex flex-col gap-2">
        {actions.map((a) => (
          <DesktopAction
            key={a.key}
            label={a.label}
            hint={a.hint}
            onClick={a.onClick}
          >
            {a.icon}
          </DesktopAction>
        ))}
      </div>
    </motion.div>
  );
};

export default FloatingActionBar;

/* -------------------------- UI Pieces -------------------------- */

function DesktopAction({
  label,
  hint,
  onClick,
  children,
}: {
  label: string;
  hint: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      className="group relative w-14 h-14 rounded-2xl bg-red-600 text-white shadow-[0_20px_60px_rgba(220,38,38,0.25)]
                 hover:bg-gray-900 transition-colors border border-white/10 flex items-center justify-center"
      aria-label={label}
    >
      <motion.div whileHover={{ rotate: -6 }} transition={{ duration: 0.2 }}>
        {children}
      </motion.div>

      {/* Tooltip */}
      <div className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2">
        <div
          className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
                     transition-all duration-200"
        >
          <div className="bg-gray-900 text-white border border-white/10 rounded-xl shadow-2xl px-4 py-2.5 whitespace-nowrap">
            <div className="text-[10px] font-black uppercase tracking-[0.25em] text-white">
              {label}
            </div>
            <div className="text-[11px] font-semibold text-gray-300 mt-1">
              {hint}
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

function ActionButton({
  variant,
  label,
  icon,
  onClick,
}: {
  variant: "mobile" | "mobileSecondary";
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}) {
  const primary = variant === "mobile";
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`flex flex-col items-center justify-center rounded-xl transition-colors ${
        primary
          ? "w-20 py-2 text-white/90 hover:text-white hover:bg-white/5"
          : "py-2 text-white/80 hover:text-white hover:bg-white/5"
      }`}
      aria-label={label}
    >
      <div
        className={`flex items-center justify-center shadow-lg ${
          primary
            ? "w-10 h-10 rounded-xl bg-red-600"
            : "w-10 h-10 rounded-xl bg-white/10 border border-white/10"
        }`}
      >
        {icon}
      </div>
      <span className="mt-1 text-[10px] font-black uppercase tracking-widest">
        {label}
      </span>
    </motion.button>
  );
}

/* -------------------------- Icons (SVG) -------------------------- */

function IconChat({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        d="M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 1 1 18 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12h.01M12 12h.01M16 12h.01"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 6h16v12H4z" strokeLinejoin="round" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.06a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWhatsapp({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        d="M20 11.5a8.5 8.5 0 0 1-12.7 7.4L4 20l1.2-3.1A8.5 8.5 0 1 1 20 11.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.7 9.7c.2-.6.5-.6.9-.6h.8c.2 0 .4 0 .5.4l.6 1.5c.1.3.1.5-.1.7l-.5.6c.7 1.2 1.7 2.1 2.9 2.8l.6-.5c.2-.2.4-.2.7-.1l1.5.6c.3.1.4.3.4.5v.8c0 .4 0 .7-.6.9-.6.2-1.9.2-3.7-.8-1.8-1-3.3-2.6-4.3-4.4-1-1.8-1-3.1-.8-3.7Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDots({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        d="M5 12h.01M12 12h.01M19 12h.01"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
