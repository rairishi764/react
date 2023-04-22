import { Provider, TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import DropDown from 'react-native-paper-dropdown';

function Example() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState();

  const genderList = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Others', value: 'others' },
  ];

  return (
    <Provider>
      <SafeAreaView style={styles.containerStyle}>
        <DropDown
          label={'Gender'}
          mode={'outlined'}
          value={gender}
          setValue={setGender}
          list={genderList}
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          inputProps={{
            
            right: <TextInput.Icon name={'menu-down'} style={{marginTop:-90, }}/>,
          }}
          dropdownOffset={{ top: 0, left: 0 }}
          dropdownMargins={{ min: 0, max: 0 }}
        />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 20,
  },
});

export default Example;
