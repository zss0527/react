import { forwardRef, useImperativeHandle, useRef } from "react"

const Input = forwardRef(
  function InnerInput(props, ref) {
    const inputRef = useRef(null)

    const focusHandler = () => {
      inputRef.current.focus()
    }

    //暴露函数给父组件调用
    useImperativeHandle(ref, () => {
      return {
        //暴露的方法，父组件可以直接使用这个方法名调用
        focusHandler
      }
    })

    return <input type="text" ref={inputRef} />
  })


const UseInperativeHandleLab = () => {
  const inputRef = useRef(null)
  const focusHandler = () => {
    //通过forwardRef可以获取子组件dom元素
    console.log(inputRef.current)
    //通过useImperativeHandle可以调用子组件方法
    inputRef.current.focusHandler()
  }
  return (
    <div>
      <Input ref={inputRef}></Input>
      <button onClick={focusHandler}>focus</button>
      <div style={{ marginTop: '50px' }}>
        通过forwardRef可以获取子组件dom元素<br />
        通过useImperativeHandle可以调用子组件方法
      </div>
    </div>
  )
}

export default UseInperativeHandleLab