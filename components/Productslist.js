// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/

import React, { useState }  from 'react';
import { RadioButton ,Alert,CheckBox, Modal,TouchableWithoutFeedback, Body,  Modal as RNModal,
  Pressable,Title,Header,TouchableOpacity, SafeAreaView, StyleSheet,Button, View,Dimensions,ScrollView,Image, Text,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RadioGroup from 'react-native-radio-buttons-group';
import styles from '../styles/style'; 

const DeviceWidth = Dimensions.get('window').width

const data = [
  {id: 'a', value: 'Sport Shoes', offer: 'Up to 50% off' , pic: 'https://rukminim1.flixcart.com/image/120/120/k0463rk0/shoe/g/e/j/787-10-tying-blue-original-imafdk8v9zunhj5u.jpeg?q=80'},
  {id: 'b', value: 'Wrist Watchs' , offer: 'Up to 20% off', pic: 'https://rukminim1.flixcart.com/image/120/120/jsc3ssw0/watch/z/f/y/1170-bl-br-fogg-original-imafdv97yfsrn9wt.jpeg?q=80'},
  {id: 'c', value: 'Womens Sarees', offer: 'Up to 60% off', pic: 'https://rukminim1.flixcart.com/image/120/120/k12go7k0/sari/p/h/c/free-bd030-bollydoll-designer-original-imafgjen5kwbudbm.jpeg?q=80' },
  {id: 'd', value: 'Headphons', offer: 'Up to 30% off', pic: 'https://rukminim1.flixcart.com/image/120/120/kj0bp8w0-0/headphone/l/j/0/bassheads-103-black-boat-original-imafyz3wqtqfzzwd.jpeg?q=80'},
  {id: 'e', value: 'Explore Now', offer: 'Up to 80% off', pic: 'https://rukminim1.flixcart.com/image/240/240/jrf8o7k0/hand-messenger-bag/a/h/3/fashion-shoulder-bag-pg-10-shoulder-bag-urban-trend-original-imaexs9wmanzw6hh.jpeg?q=60'},
  {id: 'f', value: 'Big Saving', offer: 'Up to 90% off', pic: 'https://rukminim1.flixcart.com/image/120/120/khxqt8w0-0/pendrive/type-a-to-type-c/c/g/g/sdddc2-064g-i35-sandisk-original-imafxubtqtxahat2.jpeg?q=80'},
  {id: 'g', value: 'Baby Care', offer: 'Up to 30% off', pic: 'https://rukminim1.flixcart.com/image/240/242/jgy0fbk0/bath-towel/p/6/3/ultra-soft-hooded-classic-and-designer-baby-bath-towel-bath-original-imaeqx28bykqqscx.jpeg?q=60'},
  {id: 'h', value: 'Routers', offer: 'Up to 80% off', pic: 'https://rukminim1.flixcart.com/image/240/240/jhjg13k0/router/g/n/n/tp-link-archer-c20-ac-wireless-dual-band-original-imaf5j9whw9bbetb.jpeg?q=60'},
  {id: 'i', value: 'Computers', offer: 'Up to 90% off', pic: 'https://rukminim1.flixcart.com/image/120/120/jn4x47k0/microphone-accessory/d/p/p/mobspy-3-5mm-clip-microphone-for-youtube-collar-mic-for-voice-original-imaf9vucqafs6gdm.jpeg?q=80'},
];

const numColumns = 2;
const size = Dimensions.get('window').width/numColumns;

const Productslist = ({navigation,route}) => {

  console.disableYellowBox = true; 
 
  navigation.setOptions({
    title: route.params.paramKey,
    headerStyle: {
        backgroundColor: '#2874F0', //Set Header color
    },
    headerTintColor: '#fff', //Set Header text color
    //headerShown: false ,
    headerBackImage: () => <Icon name="chevron-back-sharp" color={'#fff'} size={25} /> ,
    headerTitleStyle: {
        fontWeight: 'normal', //Set Header text style
        left: -18,
        fontSize:19
    },
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisiblenew, setModalVisiblenew] = useState(false);
  //const [checked, setChecked] = React.useState('first');


  const ScreenContainer = ({ children }) => {
  return (
    <View style={s.container}>
      { children }
    </View>
  );
}

  const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Product 1 ',
    value: 'Product1'
  }, {
    id: '2',
    label: 'Product 2',
    value: 'Product2'
  }, {
    id: '3',
    label: 'Product 3',
    value: 'Product3'
  }, {
    id: '4',
    label: 'Product 4',
    value: 'Product4'
  }, {
    id: '5',
    label: 'Product 5',
    value: 'Product5'
  }]

  const [radioButtons, setRadioButtons] = useState(radioButtonsData)

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
}


const [checkboxes, setCheckboxes] = useState([{
  id: 1,
  title: 'Product 1',
  checked: false,
}, {
  id: 2,
  title: 'Product 2',
  checked: false,
}, {
  id: 2,
  title: 'Product 2',
  checked: false,
}, {
  id: 3,
  title: 'Product 3',
  checked: false,
}, {
  id: 4,
  title: 'Product 4',
  checked: false,
}, {
  id: 5,
  title: 'Product 5',
  checked: false,
}, {
  id: 6,
  title: 'Product 6',
  checked: false,
}, {
  id: 7,
  title: 'Product 7',
  checked: false,
}, {
  id: 8,
  title: 'Product 80',
  checked: false,
}]);

  const onButtonPress = () => {

  const selectedCheckBoxes = checkboxes.find((cb) => cb.checked === true);
  // selectedCheckBoxes will have checboxes which are selected
  }


  const toggleCheckbox = (id, index) => {

  const checkboxData = [...checkboxes];
  checkboxData[index].checked = !checkboxData[index].checked;
  setCheckboxes(checkboxData);
  }

  const checBoxesView = checkboxes.map((cb, index) => {
    return (
      <View style={styles.checkboxContainer}> 
        <CheckBox
            key={cb.id}
            checked={cb.checked}
            onPress={() => toggleCheckbox(cb.id, index)} 
            style={styles.checkbox}
          />
        <Text style={styles.label}>{cb.title}</Text>
      </View>
    );
});

  return (   
    <ScreenContainer>  
     <View style={ styles.top_filter}>
        <View style={{ flex:1, width:"100%",justifyContent:'center',}}> 

        <Pressable onPress={() => setModalVisiblenew(true)}>
           <View style={styles.nestedButtonView}>
              <View style={styles.iconstyle}>
                <Icon
                  style={styles.hedericon}
                  size={20}
                  color={'#242729'}
                  name="ios-grid-outline"/>
              </View>
                <Text>Short</Text>
             </View>
            </Pressable> 
          </View> 
          
      <View style={{ flex:1, width:100,}}> 
      <Pressable onPress={() => setModalVisible(true)}>
          <View style={styles.nestedButtonView}>
              <View style={styles.iconstyle}>
                <Icon
                  style={styles.hedericon}
                  size={20}
                  color={'#242729'}
                  name="md-funnel-outline"/>
              </View>
                <Text>Filter</Text>
             </View>
             </Pressable> 
          </View>
      
        <Modal
        presentationStyle="formSheet"
        animationType="fade"
        swipeToClose= "true"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

              <RadioGroup  
                radioButtons={radioButtons} 
                onPress={onPressRadioButton} 
            />

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >

              <Text style={styles.textStyle}> FILTER </Text>
            </Pressable>
          </View>
        </View>
      </Modal>


      <RNModal
          onRequestClose={() => {
            //Alert.alert("Modal has been closed.");
            setModalVisiblenew(!modalVisiblenew);
          }}
          visible={modalVisiblenew}
          onDismiss={() => console.log("on dismiss")}
          presentationStyle={"pageSheet"}>
          <View style={styles.filter_checkbox}>
              { checBoxesView }
            <Button
              onPress={() => setModalVisiblenew(false)}
              title="Filter"
            />
          </View>
        </RNModal>


        
        
     </View>

   <ScrollView>
    <View>
     
    <FlatList 
      data={data}
      renderItem={({item}) => (
       <View style={ styles.box_product_list }>
          <TouchableOpacity onPress={() =>
              navigation.push('Productdetail', {
                paramKey: 'Sport Shose',
              })} 
           style={[styles.box_product_list_inner,{width:DeviceWidth*0.5}]}>

            <View style={styles.product_list_wish_icon}>
              <Icon
                  size={18}
                  color={'#242729'}
                  name="ios-heart-outline"/>
              </View>

              <View>
                <Image  source={{ uri : item.pic }} style={styles.box_product_img} />
              </View>
        
              <View style={styles.box_product_list_inner_cont}>
                <Text style={styles.box_product_list_inner_title}>{item.value}  </Text>
                <Text style={styles.box_product_list_inner_title_new}>
                   {item.offer} 
                </Text>
              </View>
 
            </TouchableOpacity> 
          </View>
      )}
      keyExtractor={item => item.id}
      numColumns={numColumns} />
      </View>
      
    </ScrollView>
    </ScreenContainer>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    borderWidth: 0,
    position: 'relative'
  },
});

export default Productslist;
 
