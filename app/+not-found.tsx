import { Link, Stack } from 'expo-router';
import { View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View className='flex-1 items-center justify-center bg-white'>
        <Link href="/" className='mt-4 text-blue-500'>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}