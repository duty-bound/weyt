import React from 'react'
import PropTypes from 'prop-types'

export class QuotaChart extends React.Component {

  constructor() {
    super()

    this.booked = 'RGB(100, 150, 100)'
    this.vacant = 'RGB(200, 200, 200)'
    this.drawCircle = this.drawCircle.bind(this)
  }

  drawCircle(ctx, x, y, r) {
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI, true)
    ctx.fill()
  }

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    ctx.canvas.width = 100
    ctx.canvas.height = 100
    const center = canvas.width / 2
    const n = this.props.quota
    const r = 10
    const radius = center - r - 1
    const segmentAngle = 2 * Math.PI / n
    let x, y

    //draw quota circles
    for(let i = 0; i < n; i++) {
      ctx.fillStyle = i < this.props.booked ? this.booked : this.vacant
      x = center + Math.sin(segmentAngle * i) * radius
      y = center - Math.cos(segmentAngle * i) * radius
      this.drawCircle(ctx, x, y, r)
    }

    //draw text
    ctx.font = "30px Arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillStyle = this.booked
    ctx.fillText(`${this.props.booked}`, center - (ctx.measureText(`${this.props.booked}/`).width / 2), center)
    ctx.fillStyle = this.vacant
    ctx.fillText(`/`, center, center)
    ctx.fillText(`${n}`, center + (ctx.measureText(`/${n}`).width / 2), center)
  }

  render() {
    return <canvas ref="canvas" width="200" height="200" />
  }
}

QuotaChart.propTypes = {
    quota: PropTypes.number.isRequired,
    booked: PropTypes.number.isRequired,
}
