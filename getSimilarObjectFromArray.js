const arr1 = [
  {
    menuId: 'home',
    menuTitle: 'Home',
    menuIcon: 'home',
    roleAccessPermission: '1'
  },
  {
    menuId: 'messages-inbox',
    menuTitle: 'Message Center',
    menuIcon: 'message-inbox',
    roleAccessPermission: '2',
    subMenus: [
      {
        menuId: 'messages-inbox',
        menuTitle: 'Inbox',
        roleAccessPermission: '2.1'
      },
      {
        menuId: 'new_message',
        menuTitle: 'New message',
        roleAccessPermission: '2.2'
      },
      {
        menuId: 'sent_messages',
        menuTitle: 'Sent',
        roleAccessPermission: '2.3'
      },
      {
        menuId: 'archived_messages',
        menuTitle: 'Archived',
        roleAccessPermission: '2.4'
      }
    ]
  },
  {
    menuId: 'Account-Info',
    menuTitle: 'Account Info',
    menuIcon: 'Account-Info',
    roleAccessPermission: '3'
  },
  {
    menuId: 'manage-users',
    menuTitle: 'Manage Users ',
    menuIcon: 'manage-users',
    roleAccessPermission: '4'
  },
  {
    menuId: 'admin-reports',
    menuTitle: 'Reports',
    menuIcon: 'admin-reports',
    roleAccessPermission: '5'
  },
  {
    menuId: 'admin-settings',
    menuTitle: 'Settings',
    menuIcon: 'admin-settings',
    roleAccessPermission: '6'
  },
  {
    menuId: 'support',
    menuTitle: 'Support',
    menuIcon: 'support',
    roleAccessPermission: '7'
  }
];

const arr2 = [
  {
    roleAccessPermission: '1',
    accessType: true
  },
  {
    roleAccessPermission: '2',
    accessType: true,
    subMenus: [
      {
        roleAccessPermission: '2.1',
        accessType: true
      },
      {
        roleAccessPermission: '2.2',
        accessType: true
      }
    ]
  },
  {
    roleAccessPermission: '3',
    accessType: true
  },
  {
    roleAccessPermission: '5',
    accessType: true
  },
  {
    roleAccessPermission: '7',
    accessType: true
  }
];

const checkSimilarObjectInArray = (a, b, checkBy) => {
  b = b.map(item => {
    for (let i = 0; i < a.length; i++) {
      if (a[i].roleAccessPermission === item.roleAccessPermission) {
        let subMenus = [];
        if (a[i].subMenus && item.subMenus) {
          subMenus = item.subMenus.map(subMenusItem => {
            for (let j = 0; j < a[i].subMenus.length; j++) {
              if (a[i].subMenus[j][`${checkBy}`] === subMenusItem[`${checkBy}`]) {
                Object.assign(a[i].subMenus[j], subMenusItem);
                return a[i].subMenus[j];
              }
            }
          });
          Object.assign(item.subMenus, subMenus);
        }
        return { ...a[i], ...item };
      }
    }
  });
  return b;
};

console.log(checkSimilarObjectInArray(arr1, arr2, 'roleAccessPermission'));
