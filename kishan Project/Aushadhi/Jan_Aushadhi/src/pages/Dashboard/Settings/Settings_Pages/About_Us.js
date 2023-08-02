import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { WebView } from 'react-native-webview';

export default class About_Us extends Component {
  render() {
    return (
      <WebView source={{ uri: 'http://janaushadhi.gov.in/aboutbppi.aspx/' }} />
    )
  }
}