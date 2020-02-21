import CourseListPage from '@/features/course/containers/list'
import CourseAddPage from '@/features/course/containers/add'
import CourseCategoryPage from '@/features/course/containers/category'
import CourseTopicPage from '@/features/course/containers/topic'

export default [{
  path: 'course',
  name: '课程模块',
  children: [
    { name: '课程列表页面', component: CourseListPage, default: true  },
    { name: '课程添加页面', component: CourseAddPage, path: 'add' },
    { name: '课程分类页面', component: CourseCategoryPage, path: 'cate' },
    { name: '课程专题页面', component: CourseTopicPage, path: 'topic' }
  ]
}]
