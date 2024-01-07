import { Layout } from "./pages/layout/Layout"
import { AppRouter } from "./router/AppRouter"




export const App = () => {
  return (
    <Layout>
        <AppRouter />
    </Layout>
  )
}
