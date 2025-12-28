import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex items-center gap-1 rounded-full bg-primary px-2 py-1.5">
                <Sun className="h-4 w-4 text-primary-foreground" />
                <Moon className="h-4 w-4 text-primary-foreground" />
            </div>
        );
    }

    return (
        <button
            onClick={() => setTheme((resolvedTheme ?? theme) === "dark" ? "light" : "dark")}
            className="flex items-center gap-1 rounded-full bg-primary px-2 py-1.5 hover:opacity-90 transition-opacity"
            aria-label="Toggle theme"
        >
            <Sun
                className={`h-4 w-4 transition-opacity ${
                    (resolvedTheme ?? theme) === "light" ? "text-primary-foreground" : "text-primary-foreground/40"
                }`}
            />
            <Moon
                className={`h-4 w-4 transition-opacity ${
                    (resolvedTheme ?? theme) === "dark" ? "text-primary-foreground" : "text-primary-foreground/40"
                }`}
            />
        </button>
    );
}

        