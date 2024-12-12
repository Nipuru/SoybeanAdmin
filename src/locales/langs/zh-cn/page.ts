const page: App.I18n.Schema['translation']['page'] = {
  function: {
    multiTab: {
      backTab: '返回 function_tab',
      routeParam: '路由参数'
    },
    request: {
      repeatedError: '重复请求错误',
      repeatedErrorMsg1: '自定义请求错误 1',
      repeatedErrorMsg2: '自定义请求错误 2',
      repeatedErrorOccurOnce: '重复请求错误只出现一次'
    },
    toggleAuth: {
      adminOrUserVisible: '管理员和用户可见',
      adminVisible: '管理员可见',
      authHook: '权限钩子函数 `hasAuth`',
      superAdminVisible: '超级管理员可见',
      toggleAccount: '切换账号'
    }
  },
  login: {
    bindWeChat: {
      title: '绑定微信'
    },
    codeLogin: {
      getCode: '获取验证码',
      imageCodePlaceholder: '请输入图片验证码',
      reGetCode: '{{time}}秒后重新获取',
      sendCodeSuccess: '验证码发送成功',
      title: '验证码登录'
    },
    common: {
      back: '返回',
      codeLogin: '验证码登录',
      codePlaceholder: '请输入验证码',
      confirm: '确定',
      confirmPasswordPlaceholder: '请再次输入密码',
      login: '登录',
      loginSuccess: '登录成功',
      passwordPlaceholder: '请输入密码',
      welcomeBack: '欢迎回来，{{userName}} ！'
    },
    pwdLogin: {
      admin: '管理员',
      forgetPassword: '忘记密码？',
      otherAccountLogin: '其他账号登录',
      otherLoginMode: '其他登录方式',
      register: '注册账号',
      rememberMe: '记住我',
      superAdmin: '超级管理员',
      title: '密码登录',
      user: '普通用户'
    },
    register: {
      agreement: '我已经仔细阅读并接受',
      policy: '《隐私权政策》',
      protocol: '《用户协议》',
      title: '注册账号'
    },
    resetPwd: {
      title: '重置密码'
    }
  },
  manage: {
    common: {
      status: {
        disable: '禁用',
        enable: '启用'
      }
    },
    menu: {
      activeMenu: '高亮的菜单',
      addChildMenu: '新增子菜单',
      addMenu: '新增菜单',
      button: '按钮',
      buttonCode: '按钮编码',
      buttonDesc: '按钮描述',
      constant: '常量路由',
      editMenu: '编辑菜单',
      fixedIndexInTab: '固定在页签中的序号',
      form: {
        activeMenu: '请选择高亮的菜单的路由名称',
        button: '请选择是否按钮',
        buttonCode: '请输入按钮编码',
        buttonDesc: '请输入按钮描述',
        fixedIndexInTab: '请输入固定在页签中的序号',
        fixedInTab: '请选择是否固定在页签中',
        hideInMenu: '请选择是否隐藏菜单',
        home: '请选择首页',
        href: '请输入外链',
        i18nKey: '请输入国际化key',
        icon: '请输入图标',
        keepAlive: '请选择是否缓存路由',
        layout: '请选择布局组件',
        localIcon: '请选择本地图标',
        menuName: '请输入菜单名称',
        menuStatus: '请选择菜单状态',
        menuType: '请选择菜单类型',
        multiTab: '请选择是否支持多标签',
        order: '请输入排序',
        page: '请选择页面组件',
        parent: '请选择父级菜单',
        pathParam: '请输入路径参数',
        queryKey: '请输入路由参数Key',
        queryValue: '请输入路由参数Value',
        routeName: '请输入路由名称',
        routePath: '请输入路由路径'
      },
      hideInMenu: '隐藏菜单',
      home: '首页',
      href: '外链',
      i18nKey: '国际化key',
      icon: '图标',
      iconType: {
        iconify: 'iconify图标',
        local: '本地图标'
      },
      iconTypeTitle: '图标类型',
      id: 'ID',
      keepAlive: '缓存路由',
      layout: '布局',
      localIcon: '本地图标',
      menuName: '菜单名称',
      menuStatus: '菜单状态',
      menuType: '菜单类型',
      multiTab: '支持多页签',
      order: '排序',
      page: '页面组件',
      parent: '父级菜单',
      parentId: '父级菜单ID',
      pathParam: '路径参数',
      query: '路由参数',
      routeName: '路由名称',
      routePath: '路由路径',
      title: '菜单列表',
      type: {
        directory: '目录',
        menu: '菜单'
      }
    },
    role: {
      addRole: '新增角色',
      buttonAuth: '按钮权限',
      editRole: '编辑角色',
      form: {
        roleCode: '请输入角色编码',
        roleDesc: '请输入角色描述',
        roleName: '请输入角色名称',
        roleStatus: '请选择角色状态'
      },
      menuAuth: '菜单权限',
      roleCode: '角色编码',
      roleDesc: '角色描述',
      roleName: '角色名称',
      roleStatus: '角色状态',
      title: '角色列表'
    },
    user: {
      addUser: '新增用户',
      editUser: '编辑用户',
      form: {
        nickName: '请输入昵称',
        userName: '请输入用户名',
        userRole: '请选择用户角色',
        userStatus: '请选择用户状态'
      },
      nickName: '昵称',
      title: '用户列表',
      userName: '用户名',
      userRole: '用户角色',
      userStatus: '用户状态'
    },
  }
};

export default page;
