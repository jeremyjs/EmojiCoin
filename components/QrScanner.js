import React, { Component } from 'react'
import {
  Alert,
  Linking,
  Dimensions,
  LayoutAnimation,
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { BarCodeScanner, Permissions } from 'expo'

class QrScanner extends Component {
  state = {
    hasCameraPermission: null,
  }

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    })
  }

  _handleBarCodeRead = (callback) => (result) => {
    callback(result.data)
  }

  render () {
    const { onQrCodeRead } = this.props

    if(this.state.hasCameraPermission === null) {
      return (
        <Text>
          Requesting Camera Permissions
        </Text>
      )
    }

    if(this.state.hasCameraPermission === false) {
      return (
        <Text style={{ color: '#fff' }}>
          Camera Permissions Required
        </Text>
      )
    }

    return (
      <BarCodeScanner
        onBarCodeRead={this._handleBarCodeRead(onQrCodeRead).bind(this)}
        style={{
          height: Dimensions.get('window').height,
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    flexDirection: 'row',
  },
  url: {
    flex: 1,
  },
  urlText: {
    color: '#fff',
    fontSize: 20,
  },
  cancelButton: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 18,
  },
})

export default QrScanner
