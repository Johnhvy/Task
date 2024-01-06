import Link from "next/link";
import { ThemeSwitch } from "../theme/theme-switch";

const Header = () => {
  return (
    <header className="bg-background border-b text-foreground py-2">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link
              href="/"
              className="font-bold text-slate-800 dark:text-slate-50"
            >
              iTasks
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/tasks">Tasks</Link>
              </li>
            </ul>
          </nav>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default Header;
