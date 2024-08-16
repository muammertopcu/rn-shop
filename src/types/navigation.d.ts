import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  type TabParamList = {
    HomeStack: undefined;
    Cart: undefined;
  };

  type HomeStackParamList = {
    Home: undefined;
    ProductDetail: {productId: string};
  };

  type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;
  type ProductDetailScreenProps = NativeStackScreenProps<HomeStackParamList, 'ProductDetail'>;
}
