/* 
  用setInterval定时器，测试组件数据变化
*/

import React, {
  Component
  // PureComponent
} from 'react'

// 常规组件render -> 数据一直“变化”
// class Comment extends Component {
//   render() {
//     // console.log('render')
//     return (
//       <div>
//         <p>{this.props.body}</p>
//         <p>--------{this.props.author}</p>
//       </div>
//     )
//   }
// }

// 常规组件shouldComponentUpdate -> 数据根据条件“变化”
// class Comment extends Component {
//   shouldComponentUpdate(nextProps) {
//     if (
//       nextProps.body === this.props.body &&
//       nextProps.author === this.props.author
//     ) {
//       return false
//     } else {
//       return true
//     }
//   }
//   render() {
//     console.log('render')
//     return (
//       <div>
//         <p>{this.props.body}</p>
//         <p>--------{this.props.author}</p>
//       </div>
//     )
//   }
// }

// 纯组件PureComponent优化shouldComponentUpdate -> 仅数据变化时发生“变化”（缺点是必须用class形式）
// class Comment extends PureComponent {
//   render() {
//     console.log('render')
//     return (
//       <div>
//         <p>{this.props.body}</p>
//         <p>--------{this.props.author}</p>
//       </div>
//     )
//   }
// }

// react.memo纯函数式组件代替PureComponent -> 仅数据变化时发生“变化”（最优）
const Comment = React.memo(({ body, author }) => {
  console.log('render')

  return (
    <div>
      <p>{body}</p>
      <p>--------{author}</p>
    </div>
  )
})

export default class CommentList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        comments: [
          { body: 'react is very good', author: 'facebook' },
          { body: 'vue is very good', author: 'youyuxi' }
        ]
      })
    }, 1000)
  }

  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => (
          // <Comment key={i} body={c.body} author={c.author} />
          <Comment key={i} {...c} />
          // data={c}
        ))}
      </div>
    )
  }
}
