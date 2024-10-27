import { Content, RootLayout, Sidebar, ActionButtonsRow, NotePreviewList, Editor, NoteTitle } from "@/components"
import { useRef } from "react"

function App(): JSX.Element {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }
  
  return (
    <RootLayout>
      <Sidebar className="p-2">
        <ActionButtonsRow className="flex justify-between mt-1" />
        <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
        </Sidebar>
      <Content ref={contentContainerRef} className="border-l bg-neutral-900/50 border-l-white/20">
        <NoteTitle className="pt-2" />
        <Editor />
      </Content>
    </RootLayout>
  )
}

export default App
