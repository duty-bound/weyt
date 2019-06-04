import React from 'react'

export class QuotaChart extends React.Component {

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")

    ctx.fillRect(10, 10, 50, 50)
  }

  render() {
    return <canvas ref="canvas" width="200" height="200" />
  }
}
