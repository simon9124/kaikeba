import React, { Component, PureComponent } from 'react'

// PureComponent
// class Comment extends PureComponent {
//   render() {
//     console.log('render')
//     return (
//       // <div>
//       //   <p>{this.props.data.body}</p>
//       //   <p>--------{this.props.data.author}</p>
//       // </div>
//       <div>
//         <p>{this.props.body}</p>
//         <p>--------{this.props.author}</p>
//       </div>
//     )
//   }
// }

// shouldComponentUpdate
// class Comment extends Component {
//   shouldComponentUpdate(nextProps) {
//     if (
//       nextProps.data.body === this.props.data.body &&
//       nextProps.data.author === this.props.data.author
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
//         <p>{this.props.data.body}</p>
//         <p>--------{this.props.data.author}</p>
//       </div>
//     )
//   }
// }

// react.memo纯函数
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
