import { useRoute } from '@sa/simple-router';
import { Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { useSubmit } from 'react-router-dom';

import { selectToken, selectUserInfo } from '@/store/slice/auth';

const UserAvatar = memo(() => {
  const token = useAppSelector(selectToken);
  const { t } = useTranslation();
  const userInfo = useAppSelector(selectUserInfo);
  const submit = useSubmit();
  const route = useRoute();
  const router = useRouterPush();

  function logout() {
    window?.$modal?.confirm({
      cancelText: t('common.cancel'),
      content: t('common.logoutConfirm'),
      okText: t('common.confirm'),
      onOk: () => {
        let needRedirect = false;
        if (!route.meta?.constant) needRedirect = true;
        submit({ needRedirect, redirectFullPath: route.fullPath }, { action: '/logout', method: 'post' });
      },
      title: t('common.tip')
    });
  }

  function onClick({ key }: { key: string }) {
    logout()
  }
  function login() {
    router.routerPushByKey('login');
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className="flex-center gap-8px">
          <SvgIcon
            className="text-icon"
            icon="ph:sign-out"
          />
          {t('common.logout')}
        </div>
      )
    }
  ];
  return token ? (
    <Dropdown
      menu={{ items, onClick }}
      placement="bottomRight"
      trigger={['click']}
    >
      <div>
        <ButtonIcon className="px-12px">
          <SvgIcon
            className="text-icon-large"
            icon="ph:user-circle"
          />
          <span className="text-16px font-medium">{userInfo.userName}</span>
        </ButtonIcon>
      </div>
    </Dropdown>
  ) : (
    <Button onClick={login}>{t('page.login.common.login')}</Button>
  );
});

export default UserAvatar;
