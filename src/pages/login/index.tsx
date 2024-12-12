import { mixColor } from '@sa/color';
import { Card } from 'antd';
import { Button, Checkbox, Divider, Form, Input, Space } from 'antd';
import { useLogin } from '@/hooks/common/login';

import { getDarkMode, getThemeSettings } from '@/store/slice/theme';

const COLOR_WHITE = '#ffffff';

type AccountKey = 'admin' | 'super' | 'user';
interface Account {
  key: AccountKey;
  label: string;
  password: string;
  userName: string;
}

type LoginParams = Pick<Account, 'password' | 'userName'>;

function useBgColor() {
  const darkMode = useAppSelector(getDarkMode);
  const { themeColor } = useAppSelector(getThemeSettings);


  const ratio = darkMode ? 0.5 : 0.2;
  const bgColor = mixColor(COLOR_WHITE, themeColor, ratio);

  return bgColor;
}

export function Component() {
  const bgColor = useBgColor();
  const { t } = useTranslation();
  const [form] = Form.useForm<LoginParams>();
  const { loading, toLogin } = useLogin();

  const {
    formRules: { pwd, userName: userNameRules }
  } = useFormRules();

  async function handleSubmit() {
    const params = await form.validateFields();
    toLogin(params);
  }

  useKeyPress('enter', () => {
    handleSubmit();
  });

  return (
    <div
      className="relative size-full flex-center overflow-hidden bg-layout"
      style={{ backgroundColor: bgColor }}
    >

      <Card
        bordered={false}
        className="relative z-4 w-auto rd-12px"
      >
        <div className="w-400px lt-sm:w-300px">
          <header className="flex-y-center justify-between">
            <SystemLogo className="text-64px text-primary lt-sm:text-48px" />
            <h3 className="text-28px text-primary font-500 lt-sm:text-22px">{t('system.title')}</h3>
            <div className="i-flex-col">
              <ThemeSchemaSwitch
                className="text-20px lt-sm:text-18px"
                showTooltip={false}
              />
              <LangSwitch showTooltip={false} />
            </div>
          </header>
          <main className="pt-24px">
            <h3 className="text-18px text-primary font-medium">{t('page.login.pwdLogin.title')}</h3>
            <Form
              className="pt-24px"
              form={form}
              initialValues={{
                password: '123456',
                userName: 'Soybean'
              }}
            >
              <Form.Item
                name="userName"
                rules={userNameRules}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                rules={pwd}
              >
                <Input.Password autoComplete="password" />
              </Form.Item>
              <Space
                className="w-full"
                direction="vertical"
                size={24}
              >
                <Button
                  block
                  loading={loading}
                  shape="round"
                  size="large"
                  type="primary"
                  onClick={handleSubmit}
                >
                  {t('common.confirm')}
                </Button>
              </Space>
            </Form>
          </main>
        </div>
      </Card>
    </div>
  );
}
