import { classNames } from 'shared/lib/classnames';
import classes from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}
interface IAppLinkProps extends LinkProps, React.PropsWithChildren {
    className?: string;
    theme?: AppLinkTheme;
}
export const AppLink: React.FC<IAppLinkProps> = (props: IAppLinkProps) => {
    const {
        to,
        className,
        theme = AppLinkTheme.PRIMARY,
        children,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(classes.applink, {}, [
                className,
                classes[theme],
            ])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
