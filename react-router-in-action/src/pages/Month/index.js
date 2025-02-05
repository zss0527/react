import { NavBar, DatePicker } from "antd-mobile";
import './index.scss'
import { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import _ from 'lodash'
import DailyBill from "./components/DayBill";

const Month = () => {
  const [dateVisible, setDateVisible] = useState(false)
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().format('YYYY-MM')
  })
  const [currentMonthList, setCurrentMontList] = useState([])
  const onConfirm = (val) => {
    setDateVisible(false)
    const formateDate = dayjs(val).format('YYYY-MM')
    setCurrentDate(formateDate)
    setCurrentMontList(monthGroupData[formateDate])
  }
  const billList = useSelector(state => state.bill.billList)
  console.log('currentMonthList:', currentMonthList)
  console.log('billList:', billList)
  //useMemo，依赖的数据发生变化时就会重新执行回调函数重新计算,常用来作为对状态变量进行计算并重新返回一个新的值
  const monthGroupData = useMemo(() => {  //按月分组的数据
    //return出去计算之后的值
    return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY-MM'))
  }, [billList])
  const { dayGroupData, dayGroupKeys } = useMemo(() => {  //按月分组的数据
    //return出去计算之后的值
    const dayGroupData = _.groupBy(currentMonthList, (item) => dayjs(item.date).format('YYYY-MM-DD'))
    const dayGroupKeys = Object.keys(dayGroupData)
    return { dayGroupData, dayGroupKeys }
  }, [currentMonthList])
  const monthResult = useMemo(() => {
    //支出、收入、结余
    const pay = currentMonthList.filter(item => item.type === 'pay').reduce((a, c) => a + c.money, 0)
    const income = currentMonthList.filter(item => item.type === 'income').reduce((a, c) => a + c.money, 0)
    return {
      pay, income, total: pay + income
    }
  }, [currentMonthList])


  //初始加载时把当前月的统计数据显示出来
  useEffect(() => {
    const nowDate = dayjs().format('YYYY-MM')
    if (monthGroupData[nowDate]) {
      setCurrentMontList(monthGroupData[nowDate])
    }
  }, [monthGroupData])



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
        {/*单日列表统计*/}
        {
          dayGroupKeys.map(key => {
            return <DailyBill key={key} date={key} dayBillList={dayGroupData[key]} />
          })
        }
      </div>
    </div>
  )
};

export default Month;
