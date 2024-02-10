import { classNames } from 'shared/lib/classnames/classnames';
import { type ButtonHTMLAttributes } from 'react';
import classes from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}
type ButtonProps = {
  className?: string;
  theme?: ThemeButton;
} & React.PropsWithChildren &
ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const {
        className, children, theme, ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(classes.button, { [classes[theme]]: true }, [
			  className,
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
