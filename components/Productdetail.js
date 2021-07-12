// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/

import React from 'react';
import {TouchableOpacity,Animated,ScreenContainer,Pressable, SafeAreaView, StyleSheet,Card, View,Dimensions,ScrollView,Image, Text,FlatList} from 'react-native';
import styles from '../styles/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';

const DeviceWidth = Dimensions.get('window').width

const Productdetail = ({navigation,route}) => {

    console.disableYellowBox = true; 
  
    navigation.setOptions({
    title: route.params.paramKey,
    headerStyle: {
        backgroundColor: '#2874F0', //Set Header color
    },
    headerBackImage: () => <Icon name="chevron-back-sharp" color={'#fff'} size={25} /> ,
    headerTintColor: '#fff', //Set Header text color
    headerTitleStyle: {
        fontWeight: 'normal', //Set Header text style
        left: -18,
        fontSize:19
    },
  });
    

  const ScreenContainer = ({ children }) => {
    return (
      <View style={s.container}>
        { children }
      </View>
    );
  }
   
  const data = [
    {id: 'a'},
    {id: 'a'},
    {id: 'a'},
    {id: 'a'},
    {id: 'a'},
    {id: 'a'},
    {id: 'a'},
    {id: 'a'},
    {id: 'a'},
  ];
  
  const numColumns = 2;
  const size = Dimensions.get('window').width/numColumns;

  return (
 <ScreenContainer>  
  <ScrollView>
   <View>
    <View style={{ flex: 2, alignItems: "center", justifyContent: "center", }}>
    <View style={{ backgroundColor: "#fff",  width:'100%'}}>
      <View style={{ height: 200, width: "100%" }}>
      <Image
            source={{ uri : 'https://rukminim1.flixcart.com/image/850/850/jx9aefk0/dslr-camera/g/a/q/200d-ii-200d-ii-canon-original-imafhr8tgjvucefj.jpeg?q=20' }}
            style={styles.product_detail}
          />
      </View>
      <View style={{ padding: 10, width: "100%" }}>
        <Text style={styles.product_detail_title}>Canon EOS 200D II DSLR Camera EF-S 18 - 55 mm IS STM and 55 - 250 mm IS STM (Black)</Text>
        

        <View style={{flexDirection: 'row'}}>
         <View>
            <Text style={styles.product_detail_rating}> 4.4
            <Icon style={styles.hedericon}
              size={10}
              color={'#fff'}
              name="md-star-sharp"/></Text>
         </View>
         
         <View style={{ flex:1}}>
            <Text style={styles.product_detail_total_rating}>2,254 ratings</Text>
         </View>

         <View style={styles.prouct_detail_like}>
            <Icon
          size={20}
          color={'#242729'}
          name="ios-heart-outline"/>
      </View>
    </View> 


       <View style={{flexDirection: 'row',marginBottom:10, height:50, borderBottomWidth:1, 
        borderColor: '#dfe0e2'}}>
         <View style={{ flex:2}}>
            <Text style={styles.product_detail_amount}>Rs. 64.990 </Text>
         </View>
         
         <View style={{ flex:1}}>
            <Text style={styles.product_detail_amount_offer}>65.990</Text>
         </View>

         <View style={{ flex:1}}>
            <Text style={styles.product_detail_amount_discount}>1% off</Text>
         </View>

        </View>  

        <Text style={{ color: "#777", paddingTop: 5 }}>
        Canon EOS 200D II DSLR Camera EF-S 18 - 55 mm IS STM and 55 - 250 mm IS STM (Black)
        </Text>

      </View>
    </View>
  </View>


 <View style={{ backgroundColor:'#f0f0f0'}}>
  <View style={ styles.buy_product_offer_block}>
   
   <View>
     <Text style={ styles.product_detail_heading }>Available  offers </Text>
   </View>
   
    <View style={styles.buy_product_offer}>
      <Text style={{ lineHeight:15, padding:5, width:'100%'}}>
        <Icon
          style={styles.hedericon}
          size={16}
          color={'#3ab720'}
          name="pricetag-sharp"/> 
           <Text style={{fontWeight: "bold"}}> Bank Offer </Text>10% off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply
        </Text>
       </View>

       <View>
         <Text style={{ lineHeight:15, padding:5, color:'#2874F0',width:'100%'}}> +2 offers </Text>
       </View>
     </View>



  <View style={ styles.buy_product_offer_block}>
    <View>
       <Text style={ styles.product_detail_heading }> Size- UK/India </Text>
     </View>

      <View style={ styles.prodct_size }>
 
       <View  style={ styles.prodct_size_chart }>
         <Text>6</Text>
       </View>

       <View  style={ styles.prodct_size_chart }>
         <Text>8</Text>
       </View>

       <View  style={ styles.prodct_size_chart }>
         <Text>10</Text>
       </View>

       <View  style={ styles.prodct_size_chart }>
         <Text>12</Text>
       </View>

       <View  style={ styles.prodct_size_chart }>
         <Text>14</Text>
       </View>

    </View>

  </View>



<View>
  <View style={ styles.buy_product_offer_block}>
    <View>
       <Text style={ styles.product_detail_heading } > Product Detail </Text>
     </View>

     <View style={ styles.prodct_size }>
       <View  style={ styles.prodct_detail }>
         <Text style={{ color:'#6a737c'}}>Color</Text>
       </View>

       <View  style={ styles.prodct_detail }>
         <Text style={{ fontWeight:'bold' }}>Greyy</Text>
       </View>
    </View>

    <View style={ styles.prodct_size }>
      <View  style={ styles.prodct_detail }>
        <Text style={{ color:'#6a737c'}}>Sole Material</Text>
      </View>

      <View  style={ styles.prodct_detail }>
        <Text style={{ fontWeight:'bold' }}>Phylon-Rubber EVA</Text>
      </View>
  </View>

     <View>         
         <Text style={ styles.prodct_details}>
             Details
         </Text>

         <Text style={{ padding:5, textAlign:'justify', fontSize: 16, lineHeight:22}}>ARCH SUPPORT : Arch support flip flops for men give you a refreshing feel of 
           satisfaction every time you  slip you  feet your feet into your thnog sandals. </Text>
      </View>
    </View>
  </View>


  <View>
  <View style={ styles.buy_product_offer_block}>
    <View>
       <Text style={ styles.product_detail_heading }> Rating & Reviews </Text>
     </View>
    
     <View style={{ flexDirection:'row'}}>

      <View style={{ flexDirection:'row', marginTop:8}}> 
       <View style={{ backgroundColor:'green', borderRadius:100, marginLeft:6,}}>
           <Text style={{ padding: 5, paddingLeft:14,  fontSize:20, paddingRight:12, color:'#fff'}}>
             4.1 <Icon style={styles.hedericon}
            size={20}
            color={'#fff'}
            name="md-star-sharp"/></Text>
       </View>

       <View>
          <Text style={{ fontSize:15, lineHeight:30, paddingLeft:12, color:'#6a737c'}}>19 ratings and 3 reviews</Text>
       </View>
     </View>
    </View> 


<FlatList
  data={data}
  renderItem={({item}) => ( 
   <View style={ styles.product_detail_rating_outer }>
     <View style={ styles.product_detail_outer_2 }>
     <View style={ styles.product_detail_rating_total_block }>
        <View style={ styles.product_detail_rating_total }>
           <Text style={ styles.product_detail_rating_count}>
               4 <Icon style={styles.hedericon}
            size={12}
            color={'#fff'}
            name="md-star-sharp"/></Text>
       </View>

       <View>
          <Text style={ styles.product_detail_user }>
              Gopal Daiya
          </Text>
       </View>
      </View>

       <View style={{ flexDirection:'row', width:'100%'}}>
          <Text> Nice Products </Text> 
       </View>

       <View style={{ flexDirection:'row', paddingTop:4 }}>
         <View style={{ width:'74%', alignContent:'flex-start', justifyContent:'flex-start'}}>
          <Text  style={ styles.product_detail_color }> shubhankar pukaift </Text> 
          </View> 

          <View style={{ alignContent:'flex-end',  flexDirection:'row', justifyContent:'flex-end'}}>

           <View style={{ padding:4}}> 
             <Text style={ styles.product_detail_color }> <Icon style={{ flex:1 }}
              size={19}
              color={'rgba(135,135,135,1.00)'}
              name="ios-thumbs-up-outline"/> 12</Text>  
          </View> 
 
          <View  style={{ padding:4, paddingRight:0}}> 
              <Text  style={ styles.product_detail_color }> <Icon style={{ flex:1 }}
              size={19}
              color={'rgba(135,135,135,1.00)'}
              name="ios-thumbs-down-outline"/> 5</Text> 
              
        </View>
       </View>
      </View>

      <View style={ styles.product_detail_time_ago }>
         <View style={ styles.product_detail_time_ago_inner }>
            <Text  style={ styles.product_detail_color }>
            <Icon style={{ flex:1 }}
              size={15}
              color={'rgba(135,135,135,1.00)'}
              name="ios-checkmark-circle"/> Certified Buyer - 20 days ago </Text> 
          </View> 
       </View>
     </View>
     </View>
     )}
     keyExtractor={item => item.id}
     numColumns={numColumns} />

   </View>
   </View>  
  </View>
  </View>
</ScrollView>

  <View style={ styles.buynow_bottom_row}>
    <View style={{ flex:1, width:"100%",justifyContent:'center',}}> 
        <Pressable     onPress={() =>
        navigation.push('Login', {
          someParam: 'Some Param from previous Screen',
        })}
           style={styles.box_product_inner}>
           <View style={styles.nestedButtonView_bottom}>
                <Text style={styles.buynow_bottom}>Add to cart</Text>
             </View>
            </Pressable> 
          </View> 
          
       <View style={{ flex:1, width:100, backgroundColor:'#ff6a00' }}> 
          <Pressable onPress={() =>
           navigation.push('Login', {
           someParam: 'Some Param from previous Screen' })}>

          <View style={styles.nestedButtonView_bottom}>
            <Text style={styles.buynow_bottom,styles.buynow_button}> Buy Now </Text>
          </View>

         </Pressable> 
       </View>
     </View>
   </ScreenContainer> 
  );
};
  
const s = StyleSheet.create({
  container: {
    flex: 1,
    bottom:0,
    paddingTop: 0,
    borderWidth: 0,
    position: 'relative'
  },
});


export default Productdetail;
 
