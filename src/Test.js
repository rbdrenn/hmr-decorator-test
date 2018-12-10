import React, { Component } from 'react'
import { connect } from 'react-redux'

/*
Test 1: normal export of class with connect HOC

WORKS
*/

// class Test extends Component {
// 	render() {
// 		return <div>Change me</div>
// 	}
// }
// export default connect()(Test)

/*
Test 2: export with connect HOC as decorator

DOES NOT WORK
*/

@connect()
export default class Test extends Component {
	render() {
		return <div>Change me</div>
	}
}
