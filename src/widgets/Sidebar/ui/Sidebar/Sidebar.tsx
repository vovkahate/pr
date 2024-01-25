import { classNames } from 'shared/lib/classnames';
import classes from './Sidebar.module.scss';
import { useState } from 'react';
interface ISidebarProps {
    className?: string;
}
export const Sidebar = ({ className }: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };
    return (
        <div
            className={classNames(
                classes.sidebar,
                { [classes.collapsed]: collapsed },
                [className]
            )}
        >
            <button onClick={onToggle}>toggle</button>
        </div>
    );
};
