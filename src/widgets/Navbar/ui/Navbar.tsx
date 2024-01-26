import { classNames } from 'shared/lib/classnames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import classes from './Navbar.module.scss';

type INavbarProps = {
  className?: string;
};
export function Navbar({ className }: INavbarProps) {
    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <div className={classes.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={classes.mainLink}
                    to="/"
                >
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    О сайте
                </AppLink>
            </div>
        </div>
    );
}
