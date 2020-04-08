class LikeButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      liked: false
    }
  }
  render () {
    return (
      <button
        onClick={() => {
          this.setState({ liked: true })
        }}
      >
        {this.state.liked ? this.props.name : 'UnLike'}
      </button>
    )
  }
}

export default LikeButton
