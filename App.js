import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <TouchableOpacity 
          style={styles.Button} 
          onPress={()=>{
            alert('Hello World!')
          }}>
          <Text style={styles.ButtonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    height: 42,
    borderRadius: 5,
    borderWeidth: 2,
    borderColor: "#DA552F",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  ButtonText: {
      fontSize: 16,
      color: "#DA552F",
      fontWeight: "bold"
  }
});
