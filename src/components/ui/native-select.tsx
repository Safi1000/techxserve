import * as React from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "./utils";

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type CustomSelectProps = {
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  /** Visual variant. "light" (default) for white forms, "dark" for the Media page. */
  variant?: "light" | "dark";
};

/**
 * Fully custom accessible dropdown. The menu is portaled to <body> with
 * position:fixed so it escapes all parent stacking contexts (e.g. created by
 * backdrop-blur or motion transforms). Closes on scroll/resize so the
 * floating position never drifts.
 */
export function NativeSelect({
  id,
  name,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  required,
  disabled,
  className,
  variant = "light",
}: CustomSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [highlightedIndex, setHighlightedIndex] = React.useState(-1);
  const [menuRect, setMenuRect] = React.useState<{ top: number; left: number; width: number } | null>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const listRef = React.useRef<HTMLUListElement>(null);

  const selected = options.find((o) => o.value === value);
  const isDark = variant === "dark";

  const computeMenuPosition = React.useCallback(() => {
    if (!triggerRef.current) return;
    const r = triggerRef.current.getBoundingClientRect();
    setMenuRect({ top: r.bottom + 4, left: r.left, width: r.width });
  }, []);

  // Open menu — capture position, set highlight to current value.
  const openMenu = React.useCallback(() => {
    computeMenuPosition();
    setOpen(true);
    const idx = options.findIndex((o) => o.value === value);
    setHighlightedIndex(idx >= 0 ? idx : options.findIndex((o) => !o.disabled));
  }, [computeMenuPosition, options, value]);

  // Close on outside click, scroll, or resize.
  React.useEffect(() => {
    if (!open) return;
    const onDocPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (triggerRef.current?.contains(target)) return;
      if (listRef.current?.contains(target)) return;
      setOpen(false);
    };
    const onScrollOrResize = () => setOpen(false);
    // Defer attaching listeners by one frame so the same click/focus that
    // opened the menu can't immediately close it (browser focus-scroll, etc).
    let raf = requestAnimationFrame(() => {
      document.addEventListener("pointerdown", onDocPointerDown);
      window.addEventListener("scroll", onScrollOrResize, true);
      window.addEventListener("resize", onScrollOrResize);
    });
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("pointerdown", onDocPointerDown);
      window.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [open]);

  // Auto-scroll highlighted option into view (within the listbox only).
  React.useEffect(() => {
    if (!open || highlightedIndex < 0 || !listRef.current) return;
    const item = listRef.current.children[highlightedIndex] as HTMLElement | undefined;
    if (!item) return;
    const list = listRef.current;
    const itemTop = item.offsetTop;
    const itemBottom = itemTop + item.offsetHeight;
    if (itemTop < list.scrollTop) list.scrollTop = itemTop;
    else if (itemBottom > list.scrollTop + list.clientHeight) list.scrollTop = itemBottom - list.clientHeight;
  }, [highlightedIndex, open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!open) {
        openMenu();
      } else if (highlightedIndex >= 0) {
        const opt = options[highlightedIndex];
        if (opt && !opt.disabled) {
          onChange(opt.value);
          setOpen(false);
        }
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) {
        openMenu();
      } else {
        setHighlightedIndex((i) => {
          for (let n = i + 1; n < options.length; n++) if (!options[n].disabled) return n;
          return i;
        });
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (open) {
        setHighlightedIndex((i) => {
          for (let n = i - 1; n >= 0; n--) if (!options[n].disabled) return n;
          return i;
        });
      }
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div className={cn("relative", className)}>
      {/* Hidden native select keeps form a11y / autofill for free */}
      <select
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        disabled={disabled}
        tabIndex={-1}
        aria-hidden="true"
        className="sr-only"
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value} disabled={o.disabled}>{o.label}</option>
        ))}
      </select>

      {/* Visible trigger — matches the Input component dimensions exactly */}
      <button
        ref={triggerRef}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        disabled={disabled}
        onClick={() => {
          if (open) setOpen(false);
          else openMenu();
        }}
        onKeyDown={handleKeyDown}
        className={cn(
          "flex h-9 w-full items-center justify-between gap-2 rounded-xl border-2 px-3 py-1 text-base md:text-sm text-left outline-none transition-all duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
          isDark
            ? "bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-purple-500/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            : "bg-input-background border-gray-200/50 text-gray-900 hover:border-[var(--brand-primary)]/40 focus:border-[var(--brand-primary)]",
          open && (isDark ? "border-purple-500" : "border-[var(--brand-primary)]"),
        )}
      >
        <span className={cn("truncate", !selected && (isDark ? "text-white/50" : "text-gray-400"))}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 shrink-0 transition-transform duration-200",
            open && "rotate-180",
            isDark ? "text-white/70" : "text-gray-500",
          )}
        />
      </button>

      {/* Portaled menu — escapes all parent stacking contexts */}
      {open && menuRect && createPortal(
        <ul
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          style={{
            position: "fixed",
            top: menuRect.top,
            left: menuRect.left,
            width: menuRect.width,
            zIndex: 9999,
          }}
          className={cn(
            "max-h-60 overflow-y-auto rounded-xl border shadow-2xl py-1 list-none m-0",
            "animate-in fade-in-0 zoom-in-95 origin-top duration-150",
            isDark
              ? "bg-gray-900 border-white/20 shadow-purple-500/20"
              : "bg-white border-gray-200 shadow-gray-400/30",
          )}
        >
          {options.map((option, index) => {
            const isSelected = option.value === value;
            const isHighlighted = index === highlightedIndex;
            return (
              <li
                key={option.value}
                role="option"
                aria-selected={isSelected}
                aria-disabled={option.disabled}
                onMouseEnter={() => !option.disabled && setHighlightedIndex(index)}
                onClick={() => {
                  if (option.disabled) return;
                  onChange(option.value);
                  setOpen(false);
                }}
                className={cn(
                  "flex items-center justify-between px-3 py-2 mx-1 my-0.5 rounded-lg text-sm cursor-pointer transition-colors duration-100",
                  option.disabled && "opacity-50 cursor-not-allowed",
                  isDark
                    ? cn(
                        "text-white/90",
                        isHighlighted && !option.disabled && "bg-gradient-to-r from-purple-500/30 to-cyan-500/30 text-white",
                        isSelected && !isHighlighted && "text-purple-300 font-medium bg-purple-500/10",
                      )
                    : cn(
                        "text-gray-800",
                        isHighlighted && !option.disabled && "bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]",
                        isSelected && !isHighlighted && "text-[var(--brand-primary)] font-medium bg-[var(--brand-primary)]/5",
                      ),
                )}
              >
                <span className="truncate">{option.label}</span>
                {isSelected && <Check className="w-4 h-4 shrink-0 ml-2" />}
              </li>
            );
          })}
        </ul>,
        document.body,
      )}
    </div>
  );
}
