import { Link, useNavigate } from 'react-router-dom'
import { Card, Breadcrumb, Form, Button, Radio, DatePicker, Select, Popconfirm, message } from 'antd'
// 引入汉化包 时间选择器显示中文
import locale from 'antd/es/date-picker/locale/zh_CN'
// 导入资源
import { Table, Tag, Space } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import img404 from '@/assets/error.png'
import { useChannel } from '@/hooks/userChannel'
import { useEffect, useState } from 'react'
import { getArticleListAPI, delArticleAPI } from '@/apis/article'

const { Option } = Select
const { RangePicker } = DatePicker

const Article = () => {
  const navigate = useNavigate()
  const { channelList } = useChannel()
  // // 定义状态枚举
  const status = {
    1: <Tag color='warning'>待审核</Tag>,
    2: <Tag color='success'>审核通过</Tag>,
  }
  const columns = [
    {
      title: '封面',
      dataIndex: 'cover',
      width: 120,
      render: cover => {
        return <img src={cover.images[0] || img404} width={80} height={60} alt="" />
      }
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 220
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: data => status[data]
    },
    {
      title: '发布时间',
      dataIndex: 'pubdate'
    },
    {
      title: '阅读数',
      dataIndex: 'read_count'
    },
    {
      title: '评论数',
      dataIndex: 'comment_count'
    },
    {
      title: '点赞数',
      dataIndex: 'like_count'
    },
    {
      title: '操作',
      render: data => {
        return (
          <Space size="middle">
            <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={() => navigate(`/publish?id=${data.id}`)} />
            <Popconfirm
              title="删除文章"
              description="确认要删除当前文章吗?"
              onConfirm={() => onConfirm(data)}
              okText="Yes"
              cancelText="No"
            >
              <Button
                type="primary"
                danger
                shape="circle"
                icon={<DeleteOutlined />}
              />
            </Popconfirm>
          </Space>
        )
      }
    }
  ]

  // // 筛选功能
  // // 1. 准备参数
  const [reqData, setReqData] = useState({
    status: '',
    channel_id: '',
    begin_pubdate: '',
    end_pubdate: '',
    page: 1,
    per_page: 5
  })

  // // 获取文章列表
  const [list, setList] = useState([])
  const [count, setCount] = useState(0)
  useEffect(() => {
    async function getList() {
      const res = await getArticleListAPI(reqData)
      setList(res.data.results)
      setCount(res.data.total_count)
    }
    getList()
  }, [reqData])


  // 2. 获取筛选数据
  const onFinish = (formValue) => {
    console.log('formValue:', formValue)
    // 3. 把表单收集到数据放到参数中(不可变的方式)
    setReqData({
      ...reqData,
      channel_id: formValue.channel_id,
      status: formValue.status,
      begin_pubdate: formValue.date[0].format('YYYY-MM-DD'),
      end_pubdate: formValue.date[1].format('YYYY-MM-DD')
    })
    // 4. 重新拉取文章列表 + 渲染table逻辑重复的 - 复用
    // reqData依赖项发生变化 重复执行副作用函数,利用useEffect依赖数组的特性完成这一点
  }

  /*
    分页有两种方案：
      1. 前端分页，只请求一次，后段一次性返回所有数据，前端拿到数据后自己实现分页逻辑
        优点：网络请求次数少
        缺点：后段压力增大，请求时常变长
      2. 后端分页，每次请求前端指定页码和每页条数，后段只返回本页数据
        优点：前后端压力都变小
        缺点：频繁网络请求增加后段负载
  */
  //后端分页
  const onPageChange = (page) => {
    console.log('page:', page)
    // 修改参数依赖项 引发数据的重新获取列表渲染
    setReqData({
      ...reqData,
      page
    })
  }

  // // 删除
  const onConfirm = async (data) => {
    console.log('删除点击了', data)
    await delArticleAPI(data.id)
    setReqData({
      ...reqData  //理解useEffect的依赖项，这里即使reqData的内容没有改变也会触发useEffect函数的执行，因为依赖值发生了改变
    })
    message.success('删除文章成功')
  }

  return (
    <div>
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: '文章列表' },
          ]} />
        }
        style={{ marginBottom: 20 }}
      >
        <Form initialValues={{ status: '' }}
          onFinish={onFinish}>
          <Form.Item label="状态" name="status">
            <Radio.Group>
              <Radio value={''}>全部</Radio>
              <Radio value={1}>待审核</Radio>
              <Radio value={2}>审核通过</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="频道" name="channel_id">
            <Select
              placeholder="请选择文章频道"
              style={{ width: 120 }}
            >
              {channelList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
            </Select>
          </Form.Item>

          <Form.Item label="日期" name="date">
            {/* 传入locale属性 控制中文显示*/}
            <RangePicker locale={locale}></RangePicker>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 40 }}>
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {/* 表格区域 */}
      <Card title={`根据筛选条件共查询到${count}条结果：`}>
        <Table rowKey="id" columns={columns} dataSource={list} pagination={{
          total: count,
          pageSize: reqData.per_page,
          onChange: onPageChange
        }} />
      </Card>
    </div>
  )
}

export default Article