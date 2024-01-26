import { classNames } from 'shared/lib/classnames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import classes from './LangSwitcher.module.scss';

type LangSwitcherProps = {
  className?: string;
};
export function LangSwitcher({ className }: LangSwitcherProps) {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(classes.langswitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    );
}
