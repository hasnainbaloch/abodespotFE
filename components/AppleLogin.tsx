// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';
// import { authorize, refresh } from 'react-native-app-auth';

// const config = {
//   issuer: 'https://appleid.apple.com',
//   clientId: '<YOUR_CLIENT_ID>',
//   redirectUrl: '<YOUR_REDIRECT_URL>',
//   serviceConfiguration: {
//     authorizationEndpoint: 'https://appleid.apple.com/auth/authorize',
//     tokenEndpoint: 'https://appleid.apple.com/auth/token',
//   },
// };

// const MyApp = () => {
//   const [user, setUser] = useState(null);

//   const handleAppleLogin = async () => {
//     try {
//       const authState = await authorize(config);
//       setUser(authState.user);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await refresh(config, user.refreshToken);
//       setUser(null);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View>
//       {user ? (
//         <>
//           <Text>Welcome, {user.name}!</Text>
//           <Button title="Logout" onPress={handleLogout} />
//         </>
//       ) : (
//         <Button title="Sign in with Apple" onPress={handleAppleLogin} />
//       )}
//     </View>
//   );
// };

// export default MyApp;
