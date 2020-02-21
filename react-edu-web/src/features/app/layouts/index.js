import DefaultLayout from '@/features/app/layouts/default'
import SimpleLayout from '@/features/app/layouts/simple'

export default [
  { name: 'simple', layout: SimpleLayout, prefix: 'app' },
  { name: 'default', layout: DefaultLayout, default: true }
]
