import styles from './goods.css'
import { connect } from 'dva'
import { Card, Button } from 'antd'
import { Component } from 'react'

@connect(
  state => ({
    // 通过loading命名空间获取加载状态
    loading: state.loading,
    // 获取指定命名空间的模型状态
    goodList: state.goods
  }),
  {
    addGood: title => ({
      type: 'goods/addGood',
      payload: { title }
    }),
    getList: () => ({
      type: 'goods/getList'
    })
  }
)
export default class extends Component {
  componentDidMount() {
    this.props.getList()
  }

  render() {
    console.log(this.props.loading)
    // 如果正在加载
    if (this.props.loading.models.goods) {
      return <div>加载中...</div>
    }

    return (
      <div className={styles.normal}>
        <h1>Page goods</h1>

        {/* 商品列表 */}
        <div>
          {this.props.goodList.map(good => {
            return (
              <Card key={good.title}>
                <div>{good.title}</div>
              </Card>
            )
          })}
        </div>

        {/* 添加新商品 */}
        <Button
          onClick={() => this.props.addGood('商品' + new Date().getTime())}
        >
          添加商品
        </Button>
      </div>
    )
  }
}
