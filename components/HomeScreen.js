import React, { useState } from 'react';
import { Component,useEffect  } from 'react';
import {
  Platform,
  TouchableOpacity,
  Touchable,
  Pressable,
  SafeAreaView, 
  Text,
  View,
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  Card,
  Button,
  TextInput,
  FlatList,
  Dimensions,Content,ImageBackground,
  BackHandler, Alert ,ToastAndroid,Animated 
} from 'react-native';

 import styles from '../styles/style';
 import Carousel from 'react-native-banner-carousel';
 import Icon from 'react-native-vector-icons/Ionicons';
 import Header from '../components/Header'

  const Blue = [];
  const Yellow = [];
  const HEADER_HEIGHT = 10;
  const headerStyle = {
    backgroundColor: '#e5e5e5',
    height: HEADER_HEIGHT
  }

  // top banner start
  
   const BannerWidth = Dimensions.get('window').width;
   const BannerHeight = 160;
 
   const images = [
       "https://rukminim1.flixcart.com/flap/1688/280/image/5a55bfde3a5acd85.jpg?q=50",
       "https://rukminim1.flixcart.com/flap/3376/560/image/813ce1ebdfb5d14d.jpg?q=50",
       "https://rukminim1.flixcart.com/flap/1688/280/image/b16c5ac856ebb5d9.jpg?q=50"
   ];
 
  // top banner end
  
 const Topproductcategoy = () => {

  const IMAGE_URL =
    'https://rukminim1.flixcart.com/image/650/750/kfk0e4w0/kids-slipper-flip-flop/g/z/7/4-dora-n-blue-aravon-original-imafvz5eeydqcedy.jpeg?q=90';

    const slides = [
      {
        key: '52 MB',
        title: 'Feshion ',
        uri: 'https://rukminim1.flixcart.com/image/240/160/k4ss2a80/shoe/p/q/y/dbb22-4-adidas-shopnk-cblack-ftwwht-original-imafnmr4rgf2nrgg.jpeg?q=60',
        backgroundColor: '#febe29',
      },
      {
        key: '14 MB',
        text: 'FREE',
        title: 'Electronics ',
        uri: 'https://rukminim1.flixcart.com/image/744/744/kgqvlow0/smartwatch/5/d/g/storm-android-ios-boat-original-imafwwzpctt2tbgq.jpeg?q=90',
        backgroundColor: '#22bcb5',
      },
      {
        key: '45 MB',
        title: 'Home',
        uri: 'https://rukminim1.flixcart.com/image/240/240/jefzonk0/rack-shelf/d/j/x/1-flicker-original-imaf3fghgfhep5uk.jpeg?q=60',
        backgroundColor: '#3395ff',
      },
      {
        key: '33 MB',
        title: 'Beauty',
        text: 'FREE',
        uri: 'https://rukminim1.flixcart.com/image/240/142/johi3680/combo-kit/h/m/n/wine-facial-kit-250-10-g-with-5-in-1-face-massager-free-combo-28-original-imaf9x8g6htefmhq.jpeg?q=60',
        backgroundColor: '#f6437b',
      },
      {
        key: '77 MB',
        title: 'Appliances ',
        uri: 'https://rukminim1.flixcart.com/image/120/120/k2p1q4w0/roti-khakra-maker/v/j/w/rm1001-900-watt-red-gi-shop-original-imaefm5tdfyuqszf.jpeg?q=80',
        backgroundColor: '#febe29',
      },
      {
        key: '52 MB',
        title: 'Feshion ',
        uri: 'https://rukminim1.flixcart.com/image/240/160/k4ss2a80/shoe/p/q/y/dbb22-4-adidas-shopnk-cblack-ftwwht-original-imafnmr4rgf2nrgg.jpeg?q=60',
        backgroundColor: '#febe29',
      },
      {
        key: '14 MB',
        text: 'FREE',
        title: 'Electronics ',
        uri: 'https://rukminim1.flixcart.com/image/744/744/kgqvlow0/smartwatch/5/d/g/storm-android-ios-boat-original-imafwwzpctt2tbgq.jpeg?q=90',
        backgroundColor: '#22bcb5',
      },
      {
        key: '45 MB',
        title: 'Home',
        uri: 'https://rukminim1.flixcart.com/image/240/240/jefzonk0/rack-shelf/d/j/x/1-flicker-original-imaf3fghgfhep5uk.jpeg?q=60',
        backgroundColor: '#3395ff',
      },
      {
        key: '33 MB',
        title: 'Beauty',
        text: 'FREE',
        uri: 'https://rukminim1.flixcart.com/image/240/142/johi3680/combo-kit/h/m/n/wine-facial-kit-250-10-g-with-5-in-1-face-massager-free-combo-28-original-imaf9x8g6htefmhq.jpeg?q=60',
        backgroundColor: '#f6437b',
      },
      {
        key: '77 MB',
        title: 'Appliances ',
        uri: 'https://rukminim1.flixcart.com/image/120/120/k2p1q4w0/roti-khakra-maker/v/j/w/rm1001-900-watt-red-gi-shop-original-imaefm5tdfyuqszf.jpeg?q=80',
        backgroundColor: '#febe29',
      },
    ];

  return (
      <View>
          <View style={styles.top_category_bar}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {slides.map((item, key) => (
                <View style={styles.top_category_inner_block}>
                  <Image
                    source={{
                      uri: item.uri,
                    }}
                    style={styles.top_category_image}
                  />
                  <View
                    style={ styles.top_category_text_block}>
                    <Text style={styles.top_category_text}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
      </View>
    );
  }

  const data_product = [
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
  const data_product_grid = 3;
  const size = Dimensions.get('window').width/data_product_grid;


  const data_horizontal_1 = [
    {id: 'e', value: 'Explore Now', offer: 'Up to 80% off', pic: 'https://rukminim1.flixcart.com/flap/207/315/image/8e0029cdf29895ba.jpg?q=80'},
    {id: 'e', value: 'Explore Now', offer: 'Up to 80% off', pic: 'https://rukminim1.flixcart.com/flap/207/315/image/b065bf5d3327cd12.jpg?q=80'},
    {id: 'f', value: 'Big Saving', offer: 'Up to 90% off', pic: 'https://rukminim1.flixcart.com/flap/414/630/image/86614e0d53861720.jpg?q=60'},
  ];
  const product_item_horizontal_1 = 3;
  const size_new = Dimensions.get('window').width/product_item_horizontal_1;


  const product_list_2 = [
    {id: 'e', value: 'Explore Now', offer: 'Up to 80% off', pic: 'https://rukminim1.flixcart.com/flap/207/294/image/f52b69fa16a4178e.jpg?q=80'},
    {id: 'f', value: 'Big Saving', offer: 'Up to 90% off', pic: 'https://rukminim1.flixcart.com/flap/207/294/image/9ed65d415fa8e183.jpg?q=80'},
    {id: 'f', value: 'Big Saving', offer: 'Up to 90% off', pic: 'https://rukminim1.flixcart.com/image/207/294/cf-ce-prod3/2f258888e1ac068bc880551e9cd0f408.JPEG?q=80'},
    {id: 'f', value: 'Big Saving', offer: 'Up to 90% off', pic: 'https://rukminim1.flixcart.com/flap/207/315/image/b095d3289c8196a9.jpg?q=80'},
  ];
  const product_list_horizontal_2 = 4;
  const size_new_scroll = Dimensions.get('window').width/product_list_horizontal_2;

  const singal_pic_1 = [
    {id: 'e', value: 'Explore Now', offer: 'Up to 80% off', pic: 'https://rukminim1.flixcart.com/flap/828/368/image/55dd8e3d643d61a4.jpg?q=60'},
  ];
  const numColumns_singal_pic_1 = 2;
  const size_new1 = Dimensions.get('window').width/numColumns_singal_pic_1;

  const top_rated_product = [
    {id: 'e', value: 'Mens Footwear', offer: 'Min 70% Off', pic: 'https://rukminim1.flixcart.com/image/120/120/k5vcya80pkrrdj/shoe/y/r/c/6-mrj1346-aadi-original-imafzdzekstdyvuq.jpeg?q=80'},
    {id: 'f', value: 'Wrist Watches', offer: 'Min 70% Off', pic: 'https://rukminim1.flixcart.com/image/120/120/jsc3ssw0/watch/z/f/y/1170-bl-br-fogg-original-imafdv97yfsrn9wt.jpeg?q=80'},
    {id: 'f', value: 'Sling Bags', offer: 'Min 70% Off', pic: 'https://rukminim1.flixcart.com/image/120/120/kc0u7bk0/sling-bag/g/n/d/latest-trend-party-wear-handbag-sling-bag-with-adjustable-strap-original-imaft85fje8shgxv.jpeg?q=80'},
    {id: 'f', value: 'Clutches & Wallets', offer: 'Min 70% Off', pic: 'https://rukminim1.flixcart.com/image/120/120/clutch/b/u/h/2pk-combo-jmd-clutch-5c-wallet-original-imaekkzhf7cjh6th.jpeg?q=80'},
  ];
  
  const top_rated_colum_1 = 2;
  const size_toprated_1 = Dimensions.get('window').width/top_rated_colum_1;

  const top_rated_bg_1 = { uri: "https://rukminim1.flixcart.com/reco/1242/276/images/Reco-99e3f2.jpg" };
  const top_rated_bg_2 = { uri: "https://rukminim1.flixcart.com/reco/1079/239/images/reco_ip_jacket.jpg" };
  

  export default class HomeScreen extends Component {

     state = {
      canBeClosed: false
  }

  componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
    
  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {

    if (this.props.navigation.isFocused()) {

        if (this.state.canBeClosed)
             
          BackHandler.exitApp();

          //return this.state.canBeClosed = false;
  
          else {
              setTimeout(() => { this.state.canBeClosed = false }, 3000);    
              ToastAndroid.show("Press Again To Exit !", ToastAndroid.SHORT);
               return this.state.canBeClosed = true
              //return () => backHandler.remove();
          }   
      }
  };

    
    static navigationOptions = ({ navigation }) => {

      const { params } = navigation.state;
      return {
          title:  'Home',
          headerStyle: {
              backgroundColor: 'red',
              padding:100
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            backgroundColor: 'red',
            fontWeight: 'bold',
          }}
      }

   //const HomeScreen = ({navigation}) => {

   renderPage(image, index) {
     
      return (
  
        <View key={index}>
              <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
          </View>        
      );
  }
  

  constructor(props) {
    super(props);
    this.state = {
      data: [
         {id:1, title : 'Smart Glasses', image: "https://rukminim1.flixcart.com/image/120/120/jzog9e80/smart-glass/f/d/p/mp3g001bt-shopper52-original-imafjn4fjsjsqyn9.jpeg?q=80"},
         {id:2, title : 'Cameras', image: "https://rukminim1.flixcart.com/image/120/120/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=80"},
         {id:3, title : 'Pen Drives', image: "https://rukminim1.flixcart.com/image/120/120/jzfvma80/pendrive/pendrive/y/3/f/sandisk-sdcz50-064g-i35-sdcz50-064g-b35-original-imafjgffgz9hgbzy.jpeg?q=80"},
      ],
    };
  }

  state = { isNavBarHidden: false, height: new Animated.Value(64) };

  setAnimation(disable) { 
    Animated.timing(this.state.height, { 
      duration: 100,
      toValue: disable ? 0 : 64
    }).start()
  };

   handleScroll(event) {   
      this.setAnimation((event.nativeEvent.contentOffset.y > 64));
      this.setState({ isNavBarHidden: !this.state.isNavBarHidden });
  }


  render() {

    console.disableYellowBox = true; 
    const { navigate } = this.props.navigation; 

      const ScreenContainer = ({ children }) => {
      return (
        <View style={styles.container}>
          { children }
        </View>
      );
    }
    
    return (

     <ScreenContainer>  

      <View style={ styles.top_searchbar}>
       <View style={ styles.top_searchbar_inner }>

        <Pressable style={{ width:'100%', }} onPress={() =>  
          this.props.navigation.navigate('Searchproducts', { paramKey: 'Hit Sale' }) } > 

         <View style={{ backgroundColor:'#fff', flexDirection:'row'}}>
        
          <Icon size={20}
            style={{ position:'relative', top:8,left:8, zIndex:9999}}
            color={'#242729'}
            name="search"/>
            
            <TextInput  
              editable = {false}
              style={{ borderWidth:1, borderColor:'#fff', margin:0, height:40, paddingLeft:10}}
              placeholder=" Search for products,Brands and More" 
              placeholderTextColor="#242729"
              autoCapitalize='none'
              autoCorrect={false}
              textContentType='emailAddress'
              keyboardType='email-address'/>
        </View>
       </Pressable>   
      </View>
      </View>

      <ScrollView>
       <View>
         <Topproductcategoy/>
       </View>

       <View>
        <Carousel
          autoplay
          autoplayTimeout={5000}
          loop
          index={0}
          pageSize={BannerWidth} >
          {images.map((image, index) => this.renderPage(image, index))}
      </Carousel>
     </View>


    <FlatList
      data={data_product}
      renderItem={({item}) => (
        <View style={ styles.box_product }>
          <TouchableOpacity onPress={() =>  
          this.props.navigation.navigate('Productslist', { paramKey: 'Hit Sale' }) } 
           style={styles.box_product_inner}>
              <View>
                <Image  source={{ uri : item.pic }} style={styles.box_product_img} />
              </View>
        
              <View style={styles.box_product_inner_cont}>
                <Text style={styles.box_product_inner_title}>{item.value} </Text>
                <Text style={styles.box_product_inner_title_new}>
                   {item.offer}
                </Text>
              </View>
            </TouchableOpacity> 
          </View>
      )}
      keyExtractor={item => item.id}
      numColumns={data_product_grid} />

  <View>
  <ScrollView showsHorizontalScrollIndicator={false}  horizontal> 
      <FlatList
        data={data_horizontal_1}
        renderItem={({item}) => (
          <View style={styles.box_horizontal_box}>
            <View style={styles.box_horizontal_inner}>
                <View>
                  <Image
                    source={{ uri : item.pic }}
                    style={ styles.box_horizontal_img }
                  />
                </View>
              </View> 
            </View>
        )}
        keyExtractor={item => item.id}
        numColumns={product_item_horizontal_1} />
        </ScrollView>
      </View>  


  <View style={styles.top_rated_block}>

  <ImageBackground source={top_rated_bg_1}  style={styles.top_rated_bg}>
    <View style={styles.top_rated_inner}>
      <View style={styles.top_rated_left_title}>
        <Text style={styles.top_rated_left_title_text}>Top Rated </Text>
      </View>

      <View style={styles.top_rated_button_right}>
        <Text style={styles.top_raed_button}> View All </Text>
      </View>
      </View>
    </ImageBackground> 


   <View style={ styles.top_rated_inner_outer}>       
    <FlatList
      data={top_rated_product}
      renderItem={({item}) => (
        <View style={styles.top_rated_item}>
          <View style={styles.top_rated_item_inner}>
              <View style={styles.top_rated_img_outer}>
                <Image
                  source={{ uri : item.pic }} style={styles.top_rated_img}
                />
              </View>
        
            <View style={styles.top_rated_cnt}>
                <Text style={styles.top_rated_title}>{item.value} </Text>
                <Text style={styles.top_rated_cont_inner}>
                   {item.offer}
                </Text>
              </View>
            </View> 
          </View>
      )}
      keyExtractor={item => item.id}
      numColumns={top_rated_colum_1} />
      </View>
      </View>   
      
        
    <FlatList
      data={singal_pic_1}
      renderItem={({item}) => (
        <View style={styles.box_singal}>
          <View style={styles.box_singal_inner}>
              <View>
                <Image
                  source={{ uri : item.pic }}
                  style={styles.box_singal_img}
                />
              </View>
            </View> 
          </View>
      )}
      keyExtractor={item => item.id}
      numColumns={numColumns_singal_pic_1} />



  <View style={styles.top_rated_block,styles.top_rated_block_2}>

  <ImageBackground source={top_rated_bg_2}  style={styles.top_rated_bg}>
    <View style={styles.top_rated_inner}>
      <View style={styles.top_rated_left_title}>
        <Text style={styles.top_rated_left_title_text_2}> Deals of the Day </Text>
      </View>

      <View style={styles.top_rated_button_right}>
        <Text style={styles.top_raed_button_2}> View All </Text>
      </View>
      </View>
    </ImageBackground> 

  <View style={ styles.top_rated_inner_outer}>       
    <FlatList
      data={top_rated_product}
      renderItem={({item}) => (
        <View style={styles.top_rated_item}>
          <View style={styles.top_rated_item_inner}>
              <View style={styles.top_rated_img_outer}>
                <Image
                  source={{ uri : item.pic }} style={styles.top_rated_img}
                />
              </View>
        
            <View style={styles.top_rated_cnt}>
                <Text style={styles.top_rated_title}>{item.value} </Text>
                <Text style={styles.top_rated_cont_inner}>
                  {item.offer}
                </Text>
              </View>
            </View> 
          </View>
      )}
      keyExtractor={item => item.id}
      numColumns={top_rated_colum_1} />
      </View>
      </View>   


<FlatList
      data={singal_pic_1}
      renderItem={({item}) => (
        <View style={styles.box_singal}>
          <View style={styles.box_singal_inner}>
              <View>
                <Image
                  source={{ uri : 'https://rukminim1.flixcart.com/flap/828/368/image/e6c6b512d1f567f8.jpg?q=60' }}
                  style={styles.box_singal_img}
                />
              </View>
            </View> 
          </View>
      )}
      keyExtractor={item => item.id}
      numColumns={numColumns_singal_pic_1} />


 <View>
  <ScrollView showsHorizontalScrollIndicator={false}  horizontal> 
      <FlatList
        data={product_list_2}
        renderItem={({item}) => (
          <View style={styles.box_horizontal_box}>
            <View style={styles.box_horizontal_inner}>
                <View>
                  <Image
                    source={{ uri : item.pic }}
                    style={ styles.box_horizontal_img }
                  />
                </View>
              </View> 
            </View>
        )}
        keyExtractor={item => item.id}
        numColumns={product_list_horizontal_2} />
        </ScrollView>
      </View>  


<View style={{ backgroundColor: '#fff', margin: 0,padding:5 }}>
 <View style={{flexDirection:'row', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop : 10, marginBottom : 16}}>
   <View style={{ flex: 1, justifyContent: 'flex-end'}}>
     <Text  style={{fontSize: 18, fontWeight : '1000', }} > Recently Viewed </Text>
   </View>

   <View style={{flex: 1, alignItems : 'flex-end',  justifyContent: 'flex-end'}}>
     <Text style={{ backgroundColor : 'rgb(0, 132, 255)', width : 80, borderRadius :5, textAlign : 'center', padding : 8, marginRight : 8, color : '#fff'}}> View All </Text>
   </View>
  </View>

   <FlatList 
        style={styles.container} 
        enableEmptySections={true}
        data={this.state.data}
        keyExtractor= {(item) => {
          return item.id;
        }}
        renderItem={({item}) => {
          return (
          <TouchableOpacity onPress={() =>  
           this.props.navigation.navigate('Productslist', { paramKey: 'Hit Sale' }) }>
              <View style={styles.recent_view_box}>
                <Image  style={styles.recent_image} source={{uri:item.image}} />
                <View style={styles.info}>
                  <Text  style={styles.recent_name}> { item.title }</Text>
                  
                  <View style={styles.recent_row}>
                    <View>
                      <View onPress={this.handlePress}>
                      <Text style={styles.recent_productdetail}> Based on Your Interest</Text>
                      </View>
                      <Text style={styles.iconFonts} style={{ color: "green",textAlign : 'left', paddingTop: 0, fontSize:14 }}> 50% off</Text>
                    </View>
                    
                     <View style={styles.iconContainer_new}>
                        <Icon
                      size={20}
                      color={'#242729'}
                      name="ios-heart-outline"/>
                  </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )
        }}/>

    </View>
   </ScrollView>
 </ScreenContainer>

    ); 
  }
}
 
 