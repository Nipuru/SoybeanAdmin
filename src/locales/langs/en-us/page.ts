const page: App.I18n.Schema['translation']['page'] = {
  function: {
    multiTab: {
      backTab: 'Back function_tab',
      routeParam: 'Route Param'
    },
    request: {
      repeatedError: 'Repeated Request Error',
      repeatedErrorMsg1: 'Custom Request Error 1',
      repeatedErrorMsg2: 'Custom Request Error 2',
      repeatedErrorOccurOnce: 'Repeated Request Error Occurs Once'
    },
    toggleAuth: {
      adminOrUserVisible: 'Admin and User Visible',
      adminVisible: 'Admin Visible',
      authHook: 'Auth Hook Function `hasAuth`',
      superAdminVisible: 'Super Admin Visible',
      toggleAccount: 'Toggle Account'
    }
  },
  login: {
    bindWeChat: {
      title: 'Bind WeChat'
    },
    codeLogin: {
      getCode: 'Get verification code',
      imageCodePlaceholder: 'Please enter image verification code',
      reGetCode: 'Reacquire after {{time}}s',
      sendCodeSuccess: 'Verification code sent successfully',
      title: 'Verification Code Login'
    },
    common: {
      back: 'Back',
      codeLogin: 'Verification code login',
      codePlaceholder: 'Please enter verification code',
      confirm: 'Confirm',
      confirmPasswordPlaceholder: 'Please enter password again',
      login: 'Login',
      loginSuccess: 'Login successfully',
      passwordPlaceholder: 'Please enter password',
      welcomeBack: 'Welcome back, {{userName}} !'
    },
    pwdLogin: {
      admin: 'Admin',
      forgetPassword: 'Forget password?',
      otherAccountLogin: 'Other Account Login',
      otherLoginMode: 'Other Login Mode',
      register: 'Register',
      rememberMe: 'Remember me',
      superAdmin: 'Super Admin',
      title: 'Password Login',
      user: 'User'
    },
    register: {
      agreement: 'I have read and agree to',
      policy: '《Privacy Policy》',
      protocol: '《User Agreement》',
      title: 'Register'
    },
    resetPwd: {
      title: 'Reset Password'
    }
  },
  manage: {
    common: {
      status: {
        disable: 'Disable',
        enable: 'Enable'
      }
    },
    menu: {
      activeMenu: 'Active Menu',
      addChildMenu: 'Add Child Menu',
      addMenu: 'Add Menu',
      button: 'Button',
      buttonCode: 'Button Code',
      buttonDesc: 'Button Desc',
      constant: 'Constant',
      editMenu: 'Edit Menu',
      fixedIndexInTab: 'Fixed Index In Tab',
      form: {
        activeMenu: 'Please select route name of the highlighted menu',
        button: 'Please select whether it is a button',
        buttonCode: 'Please enter button code',
        buttonDesc: 'Please enter button description',
        fixedIndexInTab: 'Please enter the index fixed in the tab',
        fixedInTab: 'Please select whether to fix in the tab',
        hideInMenu: 'Please select whether to hide menu',
        home: 'Please select home',
        href: 'Please enter href',
        i18nKey: 'Please enter i18n key',
        icon: 'Please enter iconify name',
        keepAlive: 'Please select whether to cache route',
        layout: 'Please select layout component',
        localIcon: 'Please enter local icon name',
        menuName: 'Please enter menu name',
        menuStatus: 'Please select menu status',
        menuType: 'Please select menu type',
        multiTab: 'Please select whether to support multiple tabs',
        order: 'Please enter order',
        page: 'Please select page component',
        parent: 'Please select whether to parent menu',
        pathParam: 'Please enter path param',
        queryKey: 'Please enter route parameter Key',
        queryValue: 'Please enter route parameter Value',
        routeName: 'Please enter route name',
        routePath: 'Please enter route path'
      },
      hideInMenu: 'Hide In Menu',
      home: 'Home',
      href: 'Href',
      i18nKey: 'I18n Key',
      icon: 'Icon',
      iconType: {
        iconify: 'Iconify Icon',
        local: 'Local Icon'
      },
      iconTypeTitle: 'Icon Type',
      id: 'ID',
      keepAlive: 'Keep Alive',
      layout: 'Layout Component',
      localIcon: 'Local Icon',
      menuName: 'Menu Name',
      menuStatus: 'Menu Status',
      menuType: 'Menu Type',
      multiTab: 'Multi Tab',
      order: 'Order',
      page: 'Page Component',
      parent: 'Parent Menu',
      parentId: 'Parent ID',
      pathParam: 'Path Param',
      query: 'Query Params',
      routeName: 'Route Name',
      routePath: 'Route Path',
      title: 'Menu List',
      type: {
        directory: 'Directory',
        menu: 'Menu'
      }
    },
    role: {
      addRole: 'Add Role',
      buttonAuth: 'Button Auth',
      editRole: 'Edit Role',
      form: {
        roleCode: 'Please enter role code',
        roleDesc: 'Please enter role description',
        roleName: 'Please enter role name',
        roleStatus: 'Please select role status'
      },
      menuAuth: 'Menu Auth',
      roleCode: 'Role Code',
      roleDesc: 'Role Description',
      roleName: 'Role Name',
      roleStatus: 'Role Status',
      title: 'Role List'
    },
    user: {
      addUser: 'Add User',
      editUser: 'Edit User',
      form: {
        nickName: 'Please enter nick name',
        userName: 'Please enter user name',
        userRole: 'Please select user role',
        userStatus: 'Please select user status'
      },
      nickName: 'Nick Name',
      title: 'User List',
      userName: 'User Name',
      userRole: 'User Role',
      userStatus: 'User Status'
    }
  }
};

export default page;
