import { classNames } from 'shared/lib/classnames/classnames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import classes from './Sidebar.module.scss';

type SidebarProps = {
  className?: string;
};
export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(
			  classes.sidebar,
			  { [classes.collapsed]: collapsed },
			  [className],
            )}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={classes.lang} />
            </div>
        </div>
    );
}
