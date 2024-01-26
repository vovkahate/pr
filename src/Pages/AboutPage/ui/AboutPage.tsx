import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation('about');
    return (
        <div>
            <div>{t('О сайте')}</div>
        </div>
    );
}

export default AboutPage;
