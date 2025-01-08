export const Content = ({children}) => {
  return (
    <div className="mx-auto h-screen flex flex-col max-w-[550px] bg-color gap-3">
      {children}
    </div>
  )
}