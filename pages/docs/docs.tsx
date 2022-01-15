import dynamic from "next/dynamic"

const DocsHeader = dynamic(() => import('./docs.header'))
const DocsSidebar = dynamic(() => import('./docs.sidebar'))

const Docs: React.FC = () => {
  return <div>
    <DocsSidebar />
    <DocsHeader />
  </div>
}

export default Docs