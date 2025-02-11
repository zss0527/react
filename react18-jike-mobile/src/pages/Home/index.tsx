import './style.css'
import { Tabs } from 'antd-mobile'
import { useTabs } from './useTabs'
import HomeList from './HomeList'

const Home = () => {
  const { channels } = useTabs()

  return (
    <div className='tabContainer'>
      <Tabs>
        {channels.map(item => <Tabs.Tab title={item.name} key={item.id}>
          {/*list component*/}
          <div className='listContainer'>
            <HomeList channelId={'' + item.id} />
          </div>
        </Tabs.Tab>)}
      </Tabs>
    </div>
  )
}

export default Home