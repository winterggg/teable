import { useViews } from '@teable/sdk/hooks';
import { Selector } from '@teable/ui-lib/base';
import { useTranslation } from 'next-i18next';
import { developerConfig } from '@/features/i18n/developer.config';

export const ViewBuilder = ({
  viewId,
  onChange,
}: {
  viewId?: string;
  onChange: (viewId: string | undefined) => void;
}) => {
  const views = useViews();
  const { t } = useTranslation(developerConfig.i18nNamespaces);

  return (
    <Selector
      className="w-80"
      selectedId={viewId}
      onChange={(id) => onChange(id || undefined)}
      candidates={views}
      placeholder={t('sdk:common.selectPlaceHolder')}
    />
  );
};