import { StatusBar, Text } from 'react-native';
import { MainContainer } from './src/utils/Containers';

export default function App() {
  return (
    <MainContainer>
      <Text>This is going to be a recipe application...</Text>
      <StatusBar style="auto" />
    </MainContainer>
  );
}
