import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text } from 'react-native';
// import io from 'socket.io-client';



function Inbox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState('');

  // useEffect(() => {
  //   const socket = io('http://your-socket-io-server-url');
  //   setSocket(socket);

  //   socket.on('message', message => {
  //     setMessages(prevMessages => [...prevMessages, message]);
  //   });
  // }, []);

  // function sendMessage() {
  //   socket.emit('message', { sender: username, text: input });
  //   setInput('');
  // }

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.sender}>{'item.sender'}: </Text>
            <Text style={styles.message}>{'item.text'}</Text>
          </View>
        )}
        keyExtractor={item => 'item.text'}
      />
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Enter your message"
      />
      <Button title="Send"/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  sender: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  message: {
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
});

export default Inbox;