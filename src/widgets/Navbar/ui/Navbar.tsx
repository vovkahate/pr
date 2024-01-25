import { classNames } from 'shared/lib/classnames';
import classes from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface INavbarProps {
    className?: string;
}
export const Navbar = ({ className }: INavbarProps) => {
    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={classes.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={classes.mainLink}
                    to={'/'}
                >
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
