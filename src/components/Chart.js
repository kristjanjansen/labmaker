import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { line, area } from 'd3-shape'

import { colors } from '../styles'

class Chart extends Component {

    render() {
        const { width, height, values, color } = this.props
        return (
            <svg width={width} height={height}>
                <path d={this.area(values)} fill={colors[color]} opacity="0.15" />
                <path d={this.line(values)} fill="none" stroke={colors[color]} />
            </svg>
        )
    }

    xScale(index) {
        return scaleLinear()
            .domain([0, this.props.values.length - 1])
            .range([0, this.props.width])
            (index)
    }

    yScale(value) {
        return scaleLinear()
            .domain([0, 5])
            .range([this.props.height, 0])
            (value)
    }

    line(values) {
        return line()
            .x((d, index) => this.xScale(index))
            .y(d => this.yScale(d))
            (values)
    }

    area(values) {
        return area()
            .x((d, index) => this.xScale(index))
            .y1(d => this.yScale(d))
            .y0(d => this.yScale(0))
            (values)
    }

} 

Chart.defaultProps = {
    width: 75,
    height: 15,
    values: [],
    color: 'white'
}

export default Chart
