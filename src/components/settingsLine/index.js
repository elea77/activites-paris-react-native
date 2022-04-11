import React, { useState } from 'react'
import styled from 'styled-components'

const SettingsLine = ({title}) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View>
            <Text>{title}</Text>
            <Switch
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}

const View = styled.View`
    flex: 1;
    flexDirection: row;
    flexWrap: wrap;
    alignItems: center;
    marginBottom: 10px;
`

const Text = styled.Text`
    width: 80%;
    fontSize: 16px;
`

const Switch = styled.Switch`
    width: 20%;
`


export default SettingsLine