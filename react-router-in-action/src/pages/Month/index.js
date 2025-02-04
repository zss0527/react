import { NavBar, DatePicker } from "antd-mobile";
import './index.scss'
import { useMemo, useState } from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import _ from 'lodash'

const Month = () => {
  const [dateVisible, setDateVisible] = useState(false)
  const [currentDate, setCurrentDate] = useState(() => {
    dayjs().format('YYYY-MM')
  })
  const [currentMonthList, setCurrentMontList] = useState([])
  const onConfirm = (val) => {
    setDateVisible(false)
    const formateDate = dayjs(val).format('YYYY-MM')
    setCurrentDate(formateDate)
    console.log(monthGroup[formateDate])
    setCurrentMontList(monthGroup[formateDate])

  }
  const billList = useSelector(state => state.bill.billList)
  //useMemo，依赖的数据发生变化时就会重新执行回调函数重新计算,常用来作为对状态变量进行计算并重新返回一个新的值
  const monthGroup = useMemo(() => {
    //return出去计算之后的值
    return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY-MM'))
  }, [billList])
  const monthResult = useMemo(() => {
    //支出、收入、结余
    const pay = currentMonthList.filter(item => item.type === 'pay').reduce((a, c) => a + c.money, 0)
    const income = currentMonthList.filter(item => item.type === 'income').reduce((a, c) => a + c.money, 0)
    return {
      pay, income, total: pay + income
    }
  }, [currentMonthList])
  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/*时间切换区域*/}
          <div className="date" onClick={() => setDateVisible(!dateVisible)}>
            <span className="text">
              {currentDate}月账单
            </span>
            {/*是否有expand类决定箭头方向*/}
            <span className={classNames('arrow', dateVisible && 'expand')}></span>
          </div>
          {/*统计区域*/}
          <div className='twoLineOverview'>
            <div className='item'>
              <span className='money'>{monthResult.pay.toFixed(2)}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.income.toFixed(2)}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.total.toFixed(2)}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/*时间选择器*/}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            max={new Date()}
            onClose={() => { setDateVisible(false) }}
            onConfirm={onConfirm}
            onCancel={() => { setDateVisible(false) }}
          />
        </div>
      </div>
    </div>
  )
};

export default Month;
