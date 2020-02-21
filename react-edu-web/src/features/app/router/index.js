import { loadLayoutRoutesConfig } from 'm2-react'
import layouts from '@/features/app/layouts'
import commonRouter from '@/features/common/router'
import homeRouter from '@/features/home/router'
import userRouter from '@/features/user/router'
import authRouter from '@/features/auth/router'
import courseRouter from '@/features/course/router'
import modelRouter from '@/features/model/router'
import settingRouter from '@/features/setting/router'

const routes = loadLayoutRoutesConfig(layouts, [
  commonRouter,
  homeRouter,
  userRouter,
  authRouter,
  courseRouter,
  modelRouter,
  settingRouter
])

export default {
  routes,
  routeType: 'hash',
  redirectUrl: '/app/auth',
  redirect404: '/app/common/404'
}
