import { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

const UseCallbackLab = () => {
  const changeHandler1 = (value) => console.log('value:', value)
  const changeHandler2 = useCallback((value) => console.log('value:', value), [])
  const [count, setCount] = useState(0)
  return (
    <div>
      <Input1 onChange={changeHandler1} />
      <button onClick={() => { setCount(count + 1) }}>{count}</button>
      <Input2 onChange={changeHandler2} />
      <br />
      <div style={{ marginTop: '30px' }}>
        useCallback包裹起来的函数在组件重新渲染时可以保持引用类型值稳定，被包裹的函数作为子组件的props时，防止父组件的渲染导致子组件也渲染
      </div>
    </div>
  )

}

const Input1 = memo(function Input({ onChange }) {
  console.log('子组件Input1重新渲染了')
  return <input type='text' onChange={(e) => onChange(e.target.value)} />
})
const Input2 = memo(function Input({ onChange }) {
  console.log('子组件Input2重新渲染了')
  return <input type='text' onChange={(e) => onChange(e.target.value)} />
})
Input1.propTypes = {
  onChange: PropTypes.func.isRequired,
};
Input2.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default UseCallbackLab