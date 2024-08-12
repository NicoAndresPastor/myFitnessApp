import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 0.5,
    paddingTop: 10,
    //shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
  },
  optionButton: {
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: '#f0f0f0',
    borderBottomColor: '#ccc',
    alignItems: 'center',
    width: '50%',
  },
  optionContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    
    
  },
  text: {
    fontSize: 12,
    color: '#8f8f8f',
    marginBottom: 5,
    marginLeft: 10,
  },
  optionText: {
    fontSize: 18,
    color: 'black',
  },
  selectedOption: {
    backgroundColor: '#39A7FF',
  },
  selectedOptionText: {
    fontWeight: 'bold',
  },
});

export default styles;
