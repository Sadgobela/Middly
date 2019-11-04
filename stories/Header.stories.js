import React from 'react'
import Header from '../src/components/Header/desktop'
import MobileHeader from '../src/components/Header/mobile'

export default {
  title: 'Header'
}

export const desktop = () => <Header />

export const mobile = () => <MobileHeader />
