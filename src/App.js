import React, { Component } from 'react';
import { Provider, defaultTheme, Button, TextField, View, Flex, Heading, Content } from '@adobe/react-spectrum';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputValue: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event });
  };

  addItem = () => {
    const { data, inputValue } = this.state;
    if (inputValue.trim() !== '') {
      this.setState({
        data: [...data, inputValue],
        inputValue: '',
      });
    }
  };

  deleteItem = (index) => {
    this.setState((prevState) => {
      const newData = [...prevState.data];
      newData.splice(index, 1);
      return { data: newData };
    });
  };

  render() {
    const { data, inputValue } = this.state;

    return (
      <Provider theme={defaultTheme}>
        <View padding="size-200">
          <Heading level={1}>Hava Havai Frontend Assignment</Heading>
          <Flex direction="column" gap="size-200">
            <TextField
              label="New Item"
              value={inputValue}
              onChange={this.handleInputChange}
              placeholder="Enter a new item"
            />
            <Button variant="cta" onPress={this.addItem}>
              Add Item
            </Button>
            <View>
              <Heading level={2}>Item List</Heading>
              {data.length === 0 ? (
                <Content>No items added yet.</Content>
              ) : (
                <ul>
                  {data.map((item, index) => (
                    <li key={index}>
                      {item}{' '}
                      <Button variant="negative" onPress={() => this.deleteItem(index)}>
                        Delete
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </View>
          </Flex>
        </View>
      </Provider>
    );
  }
}

export default App;
