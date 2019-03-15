import React from 'react'
import { shallow } from 'enzyme'
import Content from '.';

describe('<Content />', () => {

	it('Render template only with type, title of news', () => {
		const props = { type: 'Notícias', title: 'Testando conteúdo', image: 'https://images5.alphacoders.com/876/876590.png' }
		const wrapper = shallow(<Content {...props} />)

		expect(wrapper.find('h2').at(0).text()).toEqual('Notícias')
		expect(wrapper.find('h3').at(0).text()).toEqual('Testando conteúdo')
	})
})