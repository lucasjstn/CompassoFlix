import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import IconReturn from 'react-native-vector-icons/AntDesign';
import Toggle from "react-native-toggle-element";
import IconEye from 'react-native-vector-icons/Ionicons';
import IconPencil from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Octicons';


export default function ListMovies() {
    const [toggleValue, setToggleValue] = useState(false);
    const [setModal] = useState(false);

    return (  
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.return}>
                    <IconReturn style={styles.IconReturn} name="arrowleft" size={25} />
                </TouchableOpacity>
            </View>
            <View>
                <Toggle 
                    value={toggleValue}
                    onPress={newState => {
                        setToggleValue(newState);
                    }}
                    containerStyle={styles.toggleContainer}
                    trackBarStyle={styles.trackBarStyle}
                    trackBar={styles.trackBar}
                    thumbButton={styles.thumbButton}
                    animationDuration={250}
                    leftComponent={
                        <IconEye name={'eye'} size={14} color={toggleValue ? '#000' : '#FFF'} />
                    }
                    rightComponent={
                        <IconPencil
                        name={'pencil'}
                        size={18}
                        color={toggleValue ? '#FFF' : '#000'}
                        />
                    }
                />
            </View> 
            <Text style={styles.nameList}>
                Filmes que mudaram a minha vida
            </Text>

            <Text style={styles.descriptionList}>
                Essa é uma lista de filmes que vai mudar a sua vida e gerar reflexão sobre diversos temas. Aproveite para unir o útil ao agradável e usar seu tempo livre para conhecer histórias inspiradoras.
            </Text>
            <View>
                <TouchableOpacity>
                    <Image style={styles.image} source={require('../../../assets/16.png')}/>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Image style={styles.image} source={require('../../../assets/16.png')}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={styles.image} source={require('../../../assets/16.png')}/>
                </TouchableOpacity>
            </View>

            <View style={styles.teste}>
                <TouchableOpacity>
                    <Image style={styles.image2} source={require('../../../assets/16.png')}/>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Image style={styles.image2} source={require('../../../assets/16.png')}/>
                </TouchableOpacity>

                <TouchableOpacity> 
                    <Image style={styles.image2} source={require('../../../assets/16.png')}/>
                </TouchableOpacity>
            </View>

            <View style={styles.teste}>
                <TouchableOpacity style={styles.teste1}>
                    <Image style={styles.image2} source={require('../../../assets/16.png')}/>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.teste1}>
                    <Image style={styles.image2} source={require('../../../assets/16.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.teste1}>
                    <Image style={styles.image2} source={require('../../../assets/16.png')}/>
                </TouchableOpacity>
            </View>
            {toggleValue && (
                <TouchableOpacity 
                    style={styles.delete}
                    onPress={() => {
                        setModal(true);
                    }}
                >
                    <Icon name={'horizontal-rule'} size={6} color={'red'} />
                </TouchableOpacity>
            )}
        </View>
    )
}

