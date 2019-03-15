import React from 'react'
import { shallow } from 'enzyme'

import Header from '.'

import uolLogo from '../../../static/images/uolLogo.png'
import adMoohLogo from '../../../static/images/adMoohLogo.png'

describe('<Header />', () => {
	it('render component when passed to logos', () => {
		const props = { uolLogo, adMoohLogo }
		const wrapper = shallow(<Header {...props} />)

		expect(wrapper.find('img').at(0).prop('src')).toEqual(uolLogo)
		expect(wrapper.find('img').at(1).prop('src')).toEqual(adMoohLogo)
	})
})