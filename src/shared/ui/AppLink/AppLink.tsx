import { classNames } from 'shared/lib/classnames';
import { Link, type LinkProps } from 'react-router-dom';
import classes from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
type AppLinkProps = {
  className?: string;
  theme?: AppLinkTheme;
} & LinkProps &
React.PropsWithChildren;
export const AppLink: React.FC<AppLinkProps> = (props: AppLinkProps) => {
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
