export default function Modal({ modalVisible ,children, modalClose }) {
  document.onkeydown = (evt) => {
    evt = evt || window.event
    var isEscape = false
    if ("key" in evt) {
      isEscape = (evt.key === "Escape" || evt.key === "Esc")
    } else {
      isEscape = (evt.code === 27)
    }
    if (isEscape) {
      modalClose()
    }
  }
  return (
    <>
      {modalVisible ? (
        <>
          <div className="transition-all ease-in-out duration-1000 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-full w-full bg-slate-800" >
            {children}
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}