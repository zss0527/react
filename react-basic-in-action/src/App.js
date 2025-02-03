import React, { useRef, useState } from 'react';
import './App.scss'
import avatar from './images/bozai.png'
//加载lodash
import _ from 'lodash'
//加载classnames
import classNames from 'classnames'
//加载uuid
import { v4 as uuidv4 } from 'uuid'
//加载dayjs
import dayjs from 'dayjs'
//加载axios
import axios from 'axios'
import { useEffect } from 'react'

/**
 * 评论列表的渲染和操作
 *
 * 1. 根据状态渲染评论列表
 * 2. 删除评论
 */

// 评论列表数据
const defaultList = [
  {
    // 评论id
    rpid: 3,
    // 用户信息
    user: {
      uid: '13258165',
      avatar: 'http://toutiao.itheima.net/resources/images/99.jpg',
      uname: '周杰伦',
    },
    // 评论内容
    content: '哎哟，不错哦',
    // 评论时间
    ctime: '10-18 08:15',
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar: 'http://toutiao.itheima.net/resources/images/98.jpg',
      uname: '许嵩',
    },
    content: '我寻你千百度 日出到迟暮',
    ctime: '11-13 11:29',
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar,
      uname: '黑马前端',
    },
    content: '学前端就来黑马',
    ctime: '10-19 09:00',
    like: 66,
  },
]
// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar,
  // 用户昵称
  uname: '黑马前端',
}

/**
 * 导航 Tab 的渲染和操作
 *
 * 1. 渲染导航 Tab 和高亮
 * 2. 评论列表排序
 *  最热 => 喜欢数量降序
 *  最新 => 创建时间降序
 */

// 导航 Tab 数组
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]


//渲染评论列表
//1. 使用userState维护list
const App = () => {
  // const [commentList, setCommentList] = useState(_.orderBy(defaultList, ['like'], ['desc']))
  //通过接口数据进行渲染
  // const [commentList, setCommentList] = useState([])
  // useEffect(() => {
  //   //请求数据
  //   async function fetchData() {
  //     //axios请求数据
  //     const res = await axios.get('http://localhost:3001/list')
  //     setCommentList(res.data)
  //   }
  //   fetchData()

  // }, [])
  //通过自定义hook获取数据
  const [commentList, setCommentList] = useGetList()

  const handleDel = (rpid) => {
    console.log('删除评论', rpid)
    //对commentlist做过滤处理
    setCommentList(commentList.filter(item => item.rpid !== rpid))
  }

  const [type, setType] = useState('hot')
  const handleTabChange = (type) => {
    console.log('切换tab', type)
    setType(type)
    //基于列表的排序
    if (type === 'hot') {
      // setCommentList([...commentList].sort((a, b) => b.like - a.like))
      setCommentList(_.orderBy(commentList, ['like'], ['desc']))
    } else {
      // setCommentList([...commentList].sort((a, b) => new Date(b.ctime).getTime() - new Date(a.ctime).getTime())) 
      setCommentList(_.orderBy(commentList, ['ctime'], ['desc']))
    }
  }

  //发表评论
  const [content, setContent] = useState('')
  //聚焦
  const textareaRef = useRef(null)

  const handlePublish = () => {
    console.log('发表评论', content)
    //添加一条评论
    setCommentList([
      {
        rpid: uuidv4(), //生成唯一id
        user,
        content,
        ctime: dayjs().format('MM-DD HH:mm'),  //格式化时间
        like: 0,
      },
      ...commentList,
    ])
    //清空评论框
    setContent('')
    //重新聚焦
    textareaRef.current.focus()
  }

  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
            {/* <span className='nav-item'>最新</span>
            <span className='nav-item'>最热</span> */}
            {tabs.map(tab => (
              // <span key={tab.type} className={`nav-item ${type === tab.type && 'active'}`} onClick={() => handleTabChange(tab.type)}>
              //   {tab.text}
              // </span>
              <span key={tab.type} className={classNames('nav-item', { active: type === tab.type })} onClick={() => handleTabChange(tab.type)}>
                {tab.text}
              </span>
            ))}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              ref={textareaRef}
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text" onClick={handlePublish}>发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          {/* 评论项 */}
          {commentList.map(item => (
            // <div key={item.rpid} className="reply-item">
            //   {/* 头像 */}
            //   <div className="root-reply-avatar">
            //     <div className="bili-avatar">
            //       <img
            //         className="bili-avatar-img"
            //         alt=""
            //         src={item.user.avatar}
            //       />
            //     </div>
            //   </div>

            //   <div className="content-wrap">
            //     {/* 用户名 */}
            //     <div className="user-info">
            //       <div className="user-name">{item.user.uname}</div>
            //     </div>
            //     {/* 评论内容 */}
            //     <div className="root-reply">
            //       <span className="reply-content">{item.content}</span>
            //       <div className="reply-info">
            //         {/* 评论时间 */}
            //         <span className="reply-time">{item.ctime}</span>
            //         {/* 评论数量 */}
            //         <span className="reply-time">点赞数:{item.like}</span>
            //         {
            //           user.uid === item.user.uid &&
            //           <span className="delete-btn" onClick={() => handleDel(item.rpid)}>
            //             删除
            //           </span>
            //         }

            //       </div>
            //     </div>
            //   </div>
            // </div>
            <Item item={item} key={item.rpid} onDel={handleDel} />
          ))}

        </div>
      </div>
    </div>
  )
};

//自定义Hook封装数据请求处理逻辑
function useGetList() {
  //通过接口数据进行渲染
  const [commentList, setCommentList] = useState([])
  useEffect(() => {
    //请求数据
    async function fetchData() {
      //axios请求数据
      const res = await axios.get('http://localhost:3001/list')
      setCommentList(res.data)
    }
    fetchData()

  }, [])
  return [commentList, setCommentList]
}

//封装Item组件，用于渲染评论列表
//抽象原则：App组件作为“智能组件”，负责数据处理和逻辑处理，Item组件作为“UI组件”，负责数据的渲染
function Item({ item, onDel }) {
  return <div className="reply-item">
    {/* 头像 */}
    <div className="root-reply-avatar">
      <div className="bili-avatar">
        <img
          className="bili-avatar-img"
          alt=""
          src={item.user.avatar}
        />
      </div>
    </div>

    <div className="content-wrap">
      {/* 用户名 */}
      <div className="user-info">
        <div className="user-name">{item.user.uname}</div>
      </div>
      {/* 评论内容 */}
      <div className="root-reply">
        <span className="reply-content">{item.content}</span>
        <div className="reply-info">
          {/* 评论时间 */}
          <span className="reply-time">{item.ctime}</span>
          {/* 评论数量 */}
          <span className="reply-time">点赞数:{item.like}</span>
          {
            user.uid === item.user.uid &&
            <span className="delete-btn" onClick={() => onDel(item.rpid)}>
              删除
            </span>
          }

        </div>
      </div>
    </div>
  </div>
}

export default App;