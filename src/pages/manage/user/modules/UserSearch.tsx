import { Button, Col, Flex, Form, Input, Row, Select } from 'antd';

import { enableStatusOptions } from '@/constants/business';
import { translateOptions } from '@/utils/common';

const UserSearch: FC<Page.SearchProps> = memo(({ form, reset, search }) => {
  const { t } = useTranslation();
  const {
    patternRules: { email, phone }
  } = useFormRules();

  return (
    <Form
      form={form}
      labelCol={{
        md: 7,
        span: 5
      }}
    >
      <Row
        wrap
        gutter={[16, 16]}
      >
        <Col
          lg={6}
          md={12}
          span={24}
        >
          <Form.Item
            className="m-0"
            label={t('page.manage.user.userName')}
            name="userName"
          >
            <Input placeholder={t('page.manage.user.form.userName')} />
          </Form.Item>
        </Col>

        <Col
          lg={6}
          md={12}
          span={24}
        >
          <Form.Item
            className="m-0"
            label={t('page.manage.user.nickName')}
            name="nickName"
          >
            <Input placeholder={t('page.manage.user.form.nickName')} />
          </Form.Item>
        </Col>

        <Col
          lg={6}
          md={12}
          span={24}
        >
          <Form.Item
            className="m-0"
            label={t('page.manage.user.userStatus')}
            name="userStatus"
          >
            <Select
              allowClear
              options={translateOptions(enableStatusOptions)}
              placeholder={t('page.manage.user.form.userStatus')}
            />
          </Form.Item>
        </Col>

        <Col
          lg={6}
          md={12}
          span={24}
        >
          <Form.Item className="m-0">
            <Flex
              align="center"
              gap={12}
              justify="end"
            >
              <Button
                icon={<IconIcRoundRefresh />}
                onClick={reset}
              >
                {t('common.reset')}
              </Button>
              <Button
                ghost
                icon={<IconIcRoundSearch />}
                type="primary"
                onClick={search}
              >
                {t('common.search')}
              </Button>
            </Flex>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
});

export default UserSearch;
