export const sidebar_menus = [
  { name: 'data-analysis', url: '#', icon: 'area-chart', text: '数据分析', active: true },
  { name: 'user-center', url: '#/user', icon: 'users', text: '用户中心' },
  { name: 'course-mgr', url: 'javascript:void(0)', icon: 'object-group', text: '课程管理', children:
    [
      { name: 'course-list', url: '#/course', text: '课程列表' },
      { name: 'course-add', url: '#/course/add', text: '课程添加' },
      { name: 'course-cate', url: '#/course/cate', text: '课程分类' },
      { name: 'course-topic', url: '#/course/topic', text: '课程专题' }
    ]
  },
  { name: 'ops-center', url: 'javascript:void(0)', icon: 'bars', text: '运营中心' },
  { name: 'model-center', url: '#/model', icon: 'calculator', text: '建模中心' },
  { name: 'setting', url: 'javascript:void(0)', icon: 'cog', text: '系统设置', children:
    [
      { name: 'setting-site', url: '#', text: '站点设置' },
      { name: 'setting-user', url: '#/setting/user', text: '用户设置' },
      { name: 'setting-role', url: '#', text: '角色设置' },
      { name: 'setting-course', url: '#', text: '课程设置' },
      { name: 'setting-ops', url: '#', text: '运营设置' },
      { name: 'setting-fis', url: '#', text: '财务设置' }
    ]
  }
];
