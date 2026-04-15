1. 根据功能划分使用createSlice创建slice reducer，包括name，initialState，和reducer里定义action函数并导出这些action；
2. 使用configureStore将每个slice reducer配置在store里并导出store；
3. 在根index.js中使用<Provider store={store}><APP/></Provider>为全局注入store；
4. 在使用store的地方通过useSelector订阅某个reducer的state，通过useDispatch派发具体的action修改state；