import { classNames } from 'shared/lib/classnames';
import classes from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
}
interface IButtonProps
    extends React.PropsWithChildren,
        ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}
export const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
    const { className, children, theme, ...otherProps } = props;
    return (
        <button
            className={classNames(classes.button, { [classes[theme]]: true }, [
                className,
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
