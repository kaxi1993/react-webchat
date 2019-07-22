import React, {
  Component
} from 'react'


class CarouselItem extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    const { title, subtitle, url, buttons } = this.props

    const buttonTags = buttons.map(({ text, payload }, i) => {
      return <button className='sc-carousel--action' onClick={this.props.onCarouselClicked} data-payload={payload} key={i}> {text} </button>
    })

    return (
      <div className='sc-carousel--item'>
        <div className='sc-carousel--thumbnail'>
          <img src={url} alt={title} className='sc-carousel--photo' />
        </div>
        <div className='sc-carousel--info'>
          <div className='sc-carousel--title'>{title}</div>
          <div className='sc-carousel--subtitle'>$ {subtitle.toLocaleString()}</div>
        </div>
    
        <div className='sc-carousel--actions'>
          {buttonTags}
        </div>
      </div>
    )
  }
}

const CarouselMessage = (props) => {
  const CarouselList = props.data.map((item, i) => <CarouselItem {...item} key={i} />)
  
  return (
    <div className = "sc-carousel">
      {CarouselList}
    </div>
  )
}

export default CarouselMessage
