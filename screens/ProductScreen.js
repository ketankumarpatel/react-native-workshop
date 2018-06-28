import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import Header from '../components/Header';

class ProductScreen extends React.Component {
  state = {};

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView>
        <Header
          title="Product 1"
          subtitle="very very nice"
        />
        <View>
          <Text>
            This is the Product Screen
          </Text>
          <Button
            title="BUTTON"
            onPress={() => navigation.navigate('ProductScreen')}
          />
        </View>
      </ScrollView>
    );
  }
}

export default ProductScreen;
