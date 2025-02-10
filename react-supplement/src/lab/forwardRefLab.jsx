import { forwardRef, useRef } from 'react';

const Input = forwardRef(
  function innerinput(props, ref) {
    return <input type="text" ref={ref} />
  }
)

const Son = () => {
  return <input type="text" />
}
// Input.displayName = 'Input';


const ForwardRefLab = () => {
  const inputRef = useRef(null)
  const sonRef = useRef(null)
  const showRef = () => {
    console.log('sonref:', sonRef)
    console.log('inputRef:', inputRef)
    inputRef.current.focus()
  }
  return <div>
    <Son ref={useRef} />
    <Input ref={inputRef} />
    <button onClick={showRef}> focus </button>
    <div style={{ marginTop: '50px' }}>
      父组件可以通过为子组件绑定forwardRef属性来获取子组件dom元素
    </div>
  </div>
}

export default ForwardRefLab