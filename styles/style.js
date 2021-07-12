
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  container_login: {
    flex: 1,
    backgroundColor:'#2874F0',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
   },

  top_category_bar: { 
    flexDirection: 'row', 
    width: '100%', 
    backgroundColor : '#fff'
   },

  top_category_inner_block: { 
    margin: 5,marginTop: 0
  },
  
  top_category_image :{ 
    resizeMode: 'contain', 
    width: 50, 
    height: 50, 
    margin: 2, 
    marginTop: 10
  },

  top_category_text_block: { 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    justifyContent: 'center'
  },

  top_category_text: { 
    color: '#494949', 
    fontWeight: '200', 
    fontSize: 11 
  },

 box_product :{
   flex: 1, alignItems: "center", justifyContent: "center", width: 105, borderColor: '#f0f0f0', borderWidth : 1, margin: 4
 },

 box_product_inner:{backgroundColor: "#fff", borderRadius: 10, overflow: "hidden"},
 
 box_product_img :{ height: 80, width: 95, resizeMode: 'contain', margin : 8, marginBottom : 0},

 box_product_inner_cont :{ padding: 10, width: '100%'},
 
 box_product_inner_title:{fontSize : 11},

 box_product_inner_title_new:{color: "green", paddingTop: 0, fontSize:12},

 box_horizontal_box:{flex: 1, alignItems: "center", justifyContent: "center",  borderColor: '#f0f0f0', borderWidth : 1, margin: 0, marginBottom : 2, marginTop : 2},
 
 box_horizontal_inner:{backgroundColor: "#f0f0f0", width:'100%', borderRadius: 0, overflow: "hidden"},

 box_horizontal_img:{  height: 230, width:  150, resizeMode: 'contain', margin : 0, marginBottom : 0},

 box_singal:{flex: 1, alignItems: "center", justifyContent: "center",  borderColor: '#f0f0f0', borderWidth : 1, margin: 0},
 
 box_singal_inner:{backgroundColor: "#ccc", width: '100%', borderRadius: 0, overflow: "hidden"},

 box_singal_img :{height: 160,  width: '100%', resizeMode: 'contain', margin : 0, marginBottom : 0},

 box_product_list :{
  flex: 1,  
  flexDirection: "row",
  flexWrap: "wrap", 
  width:'100%',
  alignItems: "flex-start", borderWidth:1, borderTopWidth:0, borderColor:'#e8e8ed', 
  justifyContent: "flex-start",  
},

box_product_list_inner:{ backgroundColor: "#fff", borderWidth:0, borderLeftWidth:0, borderTopWidth:0, 
borderColor: '#ccc' , padding:15, borderStyle: 'dotted', alignItems: "center", justifyContent: "center",  borderRadius: 0 },

box_product_list_img :{ height: 80, width: 950, resizeMode: 'contain', margin : 8, marginBottom : 0},

box_product_list_inner_cont :{ padding: 10, width: '100%', alignItems: "center", justifyContent: "center"},

box_product_list_inner_title:{fontSize : 11},

box_product_list_inner_title_new:{color: "green", paddingTop: 0, fontSize:12},

hedericon: { padding:8, paddingTop:15,},

 
logo:{
  fontSize:35,
  fontWeight:'bold',
  width:'100%',
  textAlign:'center',
  color:"#2874F0",
  marginBottom:50
},
 
login_logo :{
   height: 50,  width: '100%', resizeMode: 'contain', margin : 0, marginBottom : 0
 },

 inputView:{
  width:"80%",
  borderColor:'#fff',
  borderWidth:1,
  color:'#fff',
  borderRadius:25,
  height:50,
  marginBottom:20,
  justifyContent:"center",
  padding:20
},
inputText:{
  height:50,
  color:"#fff"
},
forgot:{
  color:"#fff",
  fontSize:14,
  paddingTop:15
},
loginBtn:{
  width:"80%",
  backgroundColor:"#F1DE0E",
  borderRadius:25,
  height:50,
  color:'black',
  alignItems:"center",
  justifyContent:"center",
  marginTop:20,
  marginBottom:10
},
loginText:{
  color:"black"
},

spinnerTextStyle: {
  color: '#FFF',
  width:'100%',
  textAlign:'center'
},

boxCon: {
  margin: 15,
  marginHorizontal: 10,
  marginBottom: 17.5,
  borderColor: '#FFFFFF',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 5,
  elevation: 5,
  borderRadius: 10
 },

 product_detail :{height: 200,  width: '100%', resizeMode: 'contain', margin : 0, marginBottom : 0},
 product_detail_title : { fontSize:18, fontWeight:'bold', marginBottom:5},
 product_detail_rating :{ backgroundColor:'rgb(0, 140, 0)',
 borderColor:'green', 
 color:'#fff',margin:10, padding:12,
 paddingTop:5,paddingBottom:4,marginLeft:0
},

product_detail_total_rating:{ lineHeight:45},
product_detail_amount:{ fontSize:30, fontWeight:'bold', color:'black'},
product_detail_amount_offer:{ lineHeight:38, fontSize:18,  color:'black', color:'rgba(135,135,135,1.00)',textDecorationLine:'line-through'},
product_detail_amount_discount:{ fontSize:14, fontWeight:'900', lineHeight:38, textAlign:'left', color:'green'},

product_detail_rating_outer:{ borderBottomColor:'#f0f0f0',  borderBottomWidth:1},
product_detail_outer_2:{paddingLeft:10},
product_detail_rating_total_block: {flexDirection:'row', paddingTop:12, paddingBottom:12},
product_detail_rating_total:{backgroundColor:'green', borderRadius:100},
product_detail_rating_count:{padding: 5, fontSize:14, paddingLeft :12, paddingRight:12, color:'#fff'},
product_detail_user:{ fontSize:15, lineHeight:25, fontWeight:'bold', paddingLeft:12, color:'#000'},
product_detail_time_ago:{flexDirection:'row', paddingBottom:8},
product_detail_time_ago_inner:{alignContent:'flex-start', justifyContent:'flex-start'},

prouct_detail_like: {
  shadowColor: "#000",
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  flex: 1,
  width : '100%',
  alignItems: 'flex-end',
  margin : 0,
  marginRight : 5,
  top:-10,
  justifyContent:  'flex-end',
},

product_detail_heading :{
  fontSize:20, fontWeight: "900", lineHeight :30, padding:3, lineHeight:40
},

product_detail_color:{ color: 'rgba(135,135,135,1.00)'},

notification_list_outer :{
  flexDirection: "row",
  flexWrap: "wrap", 
  width:'100%',
  padding:8,
  alignItems: "flex-start", borderWidth:1, borderTopWidth:0, borderColor:'#ccc', 
  justifyContent: "flex-start",   
},
notification_list:{ width:'100%', flexDirection:'row'},
notification_img :{ width:'22%' },
notification_img_inner :{ height: 52, width: 52, resizeMode: 'contain', margin : 8, padding:20, marginBottom : 0},
notification_cont :{  width:'100%' , paddingRight: 32, alignItems: "flex-start", justifyContent: "flex-start"},

notification_list_inner_title:{fontSize : 16, fontWeight:'600'},

notification_list_inner_title_new:{color: "#acacb2", paddingTop: 0, fontSize:13, lineHeight:19},

bottomNavigationView: {
  backgroundColor: '#fff',
  width: '100%',
  borderWidth:1,

  height: "100%",
  justifyContent: 'center',
  alignItems: 'center',
},
dialogContentView: {
  paddingLeft: 18,
  paddingRight: 18,
},
navigationBar: {
  borderBottomColor: '#b5b5b5',
  borderBottomWidth: 0.5,
  backgroundColor: '#ffffff',
},
navigationTitle: {
  padding: 10,
},
navigationButton: {
  padding: 10,
},
navigationLeftButton: {
  paddingLeft: 20,
  paddingRight: 40,
},
navigator: {
  flex: 1,
  // backgroundColor: '#000000',
},
customBackgroundModal: {
  opacity: 0.9,
  backgroundColor: '#000',
},

centeredView: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.2)',
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999999,
},

modalView: {
  position: 'absolute',
  bottom:0,
  zIndex: 2,
  elevation: 3555,
  width:'100%',
  backgroundColor: "white",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
},
button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2
},
buttonOpen: {
  backgroundColor: "#F194FF",
},
buttonClose: {
  backgroundColor: "#2196F3",
  marginTop:20,
  width:'100%'
},
filter_radio_button:{
  borderWidth:2
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  width:'100%'
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
},

top_filter: { flexDirection:'row', borderWidth:1, borderColor:'#ccc', },

buttonText: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
},

nestedButtonView: {
  flexDirection: 'row',
  paddingLeft: '25%',
  alignItems: 'center',
},

nestedButtonView_bottom: {
  flexDirection: 'row',
  lineHeight:50,
  height:50,
  width:'100%',
  textTransform:'uppercase',
  alignItems: 'center',
},

buynow_bottom_row: {
   flexDirection:'row', borderWidth:1, borderColor:'#e6e7e9',    //Its for IOS
   },

buynow_bottom :{
  width:'100%',
  textAlign:'center',
  textTransform:'uppercase',
  fontWeight:'bold'
},

buynow_button :{
  color:'#fff',
  width:'100%',
  textAlign:'center',
  textTransform:'uppercase',
  fontWeight:'bold'
},

iconLeft: {
  width: '40px',  
},

buttonText: {
  flex: 1,
  paddingRight: '40px',
  textAlign: 'center',
},

buy_product_offer_block:{
   width:'100%',
   borderWidth:1,
   padding:5,
   marginBottom:8,
   backgroundColor:'#fff',
   borderColor:'#f1eeee'
},

buy_product_offer: {
  flexDirection: 'row',
  paddingLeft: '0%',
  alignItems: 'center',
},

nestedButtonView_bottom: {
  flexDirection: 'row',
  lineHeight:50,
  height:50,
  width:'100%',
  textTransform:'uppercase',
  alignItems: 'center',
},


container_new: {
  flex: 1,
  paddingTop: 0,
  borderWidth: 0,
  position: 'relative'
},

prodct_size:{
  flexDirection : "row",
 },

prodct_size_chart:{
  padding:6,
  flex:1,
  textAlign:'center',
  alignItems:'center',
  borderWidth:1,
  margin:8,
},

prodct_detail:{
  padding:0,
  flex:1,
  width:"50%",
  alignItems:'flex-start',
  margin:8,
},

prodct_details:{
  width:'100%',
  fontWeight:'800', fontSize:18, paddingLeft:5, lineHeight:40
},

top_rated_block:{borderWidth:0,
  backgroundColor: 'linear-gradient(rgb(153, 227, 242), rgb(153, 227, 242))', margin: 0,padding:5,
  marginBottom:16,marginTop:6 
},

top_rated_bg: {flex: 1, height :50, resizeMode: "cover", justifyContent: "center", paddingTop:4},
top_rated_inner_outer:{top:11},
top_rated_inner:{flexDirection:'row', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop : 5, marginBottom : 6},
top_rated_left_title :{flex: 1, justifyContent: 'flex-end'},
top_rated_left_title_text:{fontSize: 18, fontWeight:'800', fontWeight : '500'},
top_rated_button_right:{flex: 1, alignItems : 'flex-end',  justifyContent: 'flex-end'},
top_raed_button:{backgroundColor : 'rgb(0, 132, 255)', width : 80, borderRadius :5, textAlign : 'center', padding : 8, marginRight : 8, color : '#fff'},
top_rated_item:{alignItems: "center", justifyContent: "center",   margin: 0,},
top_rated_item_inner: {flexDirection: 'column', flex: 1, width : "100%", backgroundColor: "#fff",  borderWidth : 1, borderColor : '#f0f0f0', overflow: "hidden"},
top_rated_img_outer:{alignItems: "center", justifyContent: "center", flexDirection: 'column', flex: 1, width : 180},
top_rated_img:{height: 100,
  width: 100, resizeMode: 'contain', margin : 8, marginBottom : 0},
top_rated_cnt:{padding: 10, width: '100%'},
top_rated_title:{ fontSize : 11,textAlign : 'center'},
top_rated_cont_inner:{ color: "green",textAlign : 'center', paddingTop: 0, fontSize:12},

top_rated_block_2:{  backgroundColor: 'linear-gradient(rgb(255, 208, 199), rgb(255, 208, 199))',margin: 0,padding:5,
marginBottom:16,marginTop:6 ,color:'#fff'},
top_raed_button_2:{backgroundColor : '#fff', color:'black', width : 80, borderRadius :5, textAlign : 'center', padding : 8, marginRight : 8,},
top_rated_left_title_text_2:{ color:'black',fontSize: 18, fontWeight:'800', fontWeight : '500'},

recent_icon:{
  resizeMode: 'contain', width: 18, height: 18, margin:1, alignItems : 'flex-end', justifyContent : 'flex-end'
},
recent_image: {
  resizeMode: 'contain', width: 80, height: 80, margin: 10
},
recent_view_box: {
  marginTop:0,
  backgroundColor: 'white',
  borderWidth:0,
  borderColor: '#f0f0f0',
  flexDirection: 'row',
  shadowColor: 'black',
  shadowOpacity: .1,
  shadowOffset: {
    height:1,
    width:-1
  },
  elevation:1
},
info: {
  flex:1,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
},
recent_name: {
  fontSize: 16,
  marginTop:18,
  color: '#333'
},
recent_row: {
  flexDirection: 'row',
  justifyContent: 'flex-start',
},
iconContainer: {
  flex: 1,
  alignItems: 'flex-start',
  margin : 2,
  justifyContent: 'flex-start',
},

recent_productdetail :{
   color : '#ccc',
   fontSize : 12,
   padding : 4,
   paddingTop :0,
   paddingLeft :0
},

iconContainer_new: {
  shadowColor: "#000",
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  flex: 1,
  width : '100%',
  alignItems: 'flex-end',
  margin : 2,
  marginRight : 20,
  justifyContent:  'flex-end',
},

product_list_wish_icon: {
  flex: 1,
  width : '100%',
  alignItems: 'flex-end',
  top:-8,
  right:-8,
  position:'relative',
  justifyContent:  'flex-end',
},


recent_like: {
  color: 'gray',
  fontSize : 10,
},
recent_like_color: {
  color: '#FF4500',
},

cardContainer: {
  backgroundColor: '#FFF',
  borderWidth: 0,
  flex: 1,
  margin: 0,
  padding: 0,
},
container: {
  flex: 1,
},
emailContainer: {
  backgroundColor: '#FFF',
  flex: 1,
  paddingTop: 30,
},
headerBackgroundImage: {
  paddingBottom: 20,
  paddingTop: 45,
},
headerContainer: {},
headerColumn: {
  backgroundColor: '#438afc',
  paddingBottom:20,
  ...Platform.select({
    ios: {
      alignItems: 'center',
      elevation: 1,
      marginTop: -1,
    },
    android: {
      alignItems: 'center',
    },
  }),
},
placeIcon: {
  color: 'white',
  fontSize: 32,
},
scroll: {
  backgroundColor: '#FFF',
},
telContainer: {
  backgroundColor: '#FFF',
  flex: 1,
  paddingTop: 30,
},
userAddressRow: {
  alignItems: 'center',
  flexDirection: 'row',
},
userCityRow: {
  backgroundColor: 'transparent',
},
userCityText: {
  color: '#a0c2fa',
  fontSize: 15,
  fontWeight: '600',
  textAlign: 'center',
},
userImage: {
  borderColor: '#FFF',
  borderRadius: 85,
  borderWidth: 3,
  height: 110,
  marginBottom: 15,
  marginTop:40,
  width: 110,
},
userNameText: {
  color: '#fff',
  fontSize: 22,
  fontWeight: 'bold',
  paddingBottom: 8,
  textAlign: 'center',
},

userMobileText: {
  color: '#fff',
  fontSize: 16,
  paddingBottom: 8,
  textAlign: 'center',
},
cardContainer: {
  paddingTop: 30,
  paddingBottom: 30,
  shadowColor: 'rgba(0, 0, 0, 0.5)',
  shadowOffset: { x: 0, y: 10 },
  shadowOpacity: 1,
  borderLeftColor: '#2874F0',
  borderLeftWidth: 5,
  alignSelf: 'stretch',
  backgroundColor: 'white',
  marginTop: 12,
},
cardContent: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: 20,
},

count_cart:{ position:'absolute', borderRadius:200, zIndex:999, top:4, right:3,
 backgroundColor:'red', width:'auto', padding: 0.2, paddingLeft:5.4, paddingRight:5.4, height:18, 
  borderWidth:1, borderColor:'#fff'},


count_cart_new:{ position:'absolute', borderRadius:200, zIndex:999, top:4, right:-44,
 backgroundColor:'red', width:'auto', padding: 0.2, paddingLeft:5.4, paddingRight:5.4, height:18, 
  borderWidth:1, borderColor:'#fff'},

  
  count_cart_total:{color:'#fff',fontSize:10, fontWeight:'bold'},

  cart_cont :{  width:'85%',  paddingLeft: 5, alignItems: "flex-start", justifyContent: "flex-start"},
  cart_img :{ width:'15%', alignItems:'flex-end', justifyContent:'flex-end' },
  cart_img_inner :{ height: 52, width: 52, alignContent:'flex-start', resizeMode: 'contain', margin : 8, padding:20, marginBottom : 0},

  mycart_list_outer :{
    flexDirection: "row",
    flexWrap: "wrap", 
    width:'100%',
    paddingTop:10,
    backgroundColor:'#fff',
    marginBottom:5,
    alignItems: "flex-start", borderWidth:0, borderTopWidth:0, 
    justifyContent: "flex-start",   
  },
  mycart_row:{ flexDirection:'row', borderWidth:1, borderColor:'#ccc', marginTop:25 },
  mycart_btn:{ flex:1, textAlign:'center' },
  my_cart_text:{ textAlign:'center', padding:12, color:'#1c1d1e'},
  search_container: {
    flex: 1,
    paddingTop: 0,
    borderWidth: 0,
    position: 'relative'
  },

 top_searchbar: { flexDirection:'row', position:'relative',  width:'100%', borderColor:'#2874F0' },
 top_searchbar_inner : { backgroundColor:'#2874F0', padding:5, width:'100%',  position: 'relative', top: 0},

 checkboxContainer: {
  flexDirection: "row",
  marginBottom: 20,
},
checkbox: {
  alignSelf: "center",
},
label: {
  margin: 8,
},

filter_checkbox:{ paddingTop:20},

});

export default styles;
