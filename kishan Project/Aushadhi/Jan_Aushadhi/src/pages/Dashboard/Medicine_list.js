import { Dimensions, Text, View, Image, TouchableOpacity, FlatList, Linking } from 'react-native'
import React, { Component } from 'react'
import AppTheme from '../../helper/AppTheme'
import OtherBrand_CustomView from './CustomView/OtherBrand_CustomView'
import Near_By_Store from './Near_By_Store'
import NearbyCustom_View from './CustomView/NearbyCustom_View'


export default class Medicine_list extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSelectedITem: true,
            otherinfo: '',
            Other_Brands: [
                {
                    id: 1,
                    name: 'Meftal-Spas Tablet',
                    Brands: 'Blue Cross Laboratories Ltd',
                    Unitsize: '10 ER TAB',
                    uri: 'https://www.practostatic.com/practopedia-images/v3/res-750/doxinate-tablet-30-s_47938f9a-0e23-48b6-b9bc-8fb75c4485e8.JPG',

                    otherinfo: {
                        price: '₹1.2',
                        Saving: '₹1',
                        discount: '0.5%',
                    }

                },
                {
                    id: 2,
                    name: 'Maxtra Syrup',
                    Brands: 'Zuventus Healthcare Ltd',
                    Unitsize: 'Phenylephrine (5mg/5ml)',
                    uri: 'https://5.imimg.com/data5/SELLER/Default/2022/1/QQ/DV/FB/105453881/paracetamol-tablets-500-mg-500x500.jpg',

                    otherinfo: {
                        price: '₹11.2',
                        Saving: '₹1',
                        discount: '0.5%',
                    }

                },
                {
                    id: 3,
                    name: 'Norflox-TZ RF Tablet',
                    Brands: 'Cipla Ltd',
                    Unitsize: 'strip of 10 tablets',
                    uri: 'https://newassets.apollo247.com/pub/media/catalog/product/c/o/con0004_1.jpg',

                    otherinfo: {
                        price: '₹22.2',
                        Saving: '₹1',
                        discount: '0.5%',
                    }

                },
                {
                    id: 4,
                    name: 'O2 Tablet',
                    Brands: 'Medley Pharmaceuticals',
                    Unitsize: 'strip of 10 tablets',
                    uri: 'https://5.imimg.com/data5/ZG/OP/DF/SELLER-24845096/janumet-50-500-tablet-500x500.jpg',

                    otherinfo: {
                        price: '₹22.2',
                        Saving: '₹1',
                        discount: '0.5%',
                    }

                },
                {
                    id: 5,
                    name: 'O2 Tablet',
                    Brands: 'Medley Pharmaceuticals',
                    Unitsize: 'strip of 10 tablets',
                    uri: 'https://5.imimg.com/data5/PD/CG/MY-25404749/betnovate-c-rs-29-500x500.jpg',

                    otherinfo: {
                        price: '₹22.2',
                        Saving: '₹1',
                        discount: '0.5%',
                    }

                },
                {
                    id: 6,
                    name: 'O2 Tablet',
                    Brands: 'Medley Pharmaceuticals',
                    Unitsize: 'strip of 10 tablets',
                    uri: 'https://davai24.com/wp-content/uploads/2021/05/Allegra-120mg-Tablet-10-SA.jpg',

                    otherinfo: {
                        price: '₹22.2',
                        Saving: '₹1',
                        discount: '0.5%',
                    }

                },

            ],
            Near_Store: [
                {
                    id: 1,
                    name: 'Jan Aushadhi Kendra',
                    km: '2 km',
                    PersonName:'Ram Patel',
                    Phone: '9978915260',
                    storecode: 'PMBJK00705',
                    email: 'janaushadhi.subhanpura@gmail.com',
                    address: 'Subhanpura Vadodara Gujarat,India pincode:390023',

                    person: 'https://thumbs.dreamstime.com/b/pharmacist-busy-using-mobile-phone-retail-pharma-medical-store-concept-relaxation-checking-stock-small-business-244349041.jpg',

                    uri: 'https://content.jdmagicbox.com/comp/vadodara/b1/0265px265.x265.180604161559.t8b1/catalogue/pradhan-mantri-bhartiya-janaushadhi-kendra-manjalpur-vadodara-chemists-zdib3p2yno.jpg?clr=203346'
                },
                {
                    id: 2,
                    shopname: 'kapil kumer',
                    name: 'Jan Suvidha Kendra Chhani',
                    km: '3 km',
                    Phone: '9724898481',
                    person: 'https://media.istockphoto.com/photos/indian-pharmacist-using-smart-phone-app-picture-id1191250840?k=20&m=1191250840&s=612x612&w=0&h=v_Eq5o3EicfPHeKV2DBIzQMARkfbdRPNoi3Q_cRN2Dg=',
                    PersonName:'Sohan Patel',
                 
                    storecode: 'PMBJK11205',
                    email: 'janaushadhi.kapiloza@gmail.com',
                    address: 'Hare Krishna Complex, K-117, Chhani Jakat Naka Cir, Vadodara, Gujarat 390024',
                    uri: 'https://feeds.abplive.com/onecms/images/uploaded-images/2022/04/24/e6a5cc6508a6fe34eb6750ebba58d1bc_original.jpg?impolicy=abp_images&imwidth=720'
                },
                {
                    id: 3,
                    name: 'Pradhanmantri Jan Aushadhi Kendra',
                    km: '6 km',
                    Phone: '9978917856',

                    person: 'https://static9.depositphotos.com/1006708/1095/i/600/depositphotos_10958885-stock-photo-pharmacist-and-client-at-pharmacy.jpg',
                    PersonName:'Riya Patel',
                 
                    storecode: 'PMBJK12205',
                    email: 'janaushadhi.Nliesh@gmail.com',
                    address: '6th Cross Road, Srirampuram, Bangalore - 560021, Near By Srirampura Police Station ',
                    uri: 'https://content3.jdmagicbox.com/comp/bangalore/k1/080pxx80.xx80.180521140141.y6k1/catalogue/jan-aushadhi-store-srirampuram-bangalore-chemists-jou5wnxme8.jpg?clr=2e2e38'
                },

                {
                    id: 4,
                    name: 'Jan Aushadhi Kendra',
                    km: '1000 km',
                    Phone: '9978917856',
                    PersonName:'Vikash Patel',
               
                    person: 'https://menshealth.pt/files/2021/09/The-Rock-1024x683.jpg',

                    storecode: 'PMBJK13205',
                    email: 'janaushadhi.Nliesh@gmail.com',
                    address: '6th Cross Road, Srirampuram, Bangalore - 560021, Near By Srirampura Police Station ',
                    uri: 'https://content.jdmagicbox.com/comp/delhi/k3/011pxx11.xx11.161126105455.q9k3/catalogue/jan-aushadhi-medical-store-sector-45-noida-chemists-cvcihgehcr.jpg?clr=3e3328'
                },
                {
                    id: 5,
                    name: 'Jan suvidha kendra',
                    km: '1.5 km',
                    Phone: '8078415856',
                    PersonName:'Kapil oza',
              
                    person: 'https://content3.jdmagicbox.com/comp/pune/f2/020pxx20.xx20.130110162807.e7f2/catalogue/nakoda-medical-stores-talegaon-dabhade-pune-chemists-bas6db9kr1.jpg',

                    storecode: 'PMBJK14205',
                    email: 'janaushadhi.kishan@gmail.com',
                    address: '6th Cross Road, Srirampuram, Bangalore - 560021, Near By Srirampura Police Station ',
                    uri: 'https://content.jdmagicbox.com/comp/ahmedabad/y8/079pxx79.xx79.170630120117.z1y8/catalogue/deendayal-prime-minister-jan-aushadhi-store-ghatlodiya-ahmedabad-chemists-4i2w27g.jpg'
                },

                {
                    id: 6,
                    name: 'Jan suvidha kendra',
                    km: '2.5 km',
                    Phone: '7878415856',

                    person: 'https://media.istockphoto.com/photos/man-in-grocery-aisle-of-supermarket-picture-id1054315218',
                    PersonName:'Rakesh Patel',
              
                    storecode: 'PMBJK15205',
                    email: 'janaushadhi.ram@gmail.com',
                    address: 'jan suvidha kendra bhadrasa ,kheda,thasra, near Amul sahkari Dairy pase, Bhadrasa, Gujarat 388230 ',
                    uri: 'http://thephoenixpostindia.com/wp-content/uploads/2019/01/Jan-Aushadhi-e1548819151955.jpg'
                },

                {
                    id: 7,
                    name: 'Jan suvidha kendra',
                    km: '2.5 km',
                    Phone: '7778416856',

                    person: 'https://media.istockphoto.com/photos/man-in-grocery-aisle-of-supermarket-picture-id1054315218',
                    PersonName:'Shivam Patel',
                    storecode: 'PMBJK15205',
                    email: 'janaushadhi.ram@gmail.com',
                    address: 'jan suvidha kendra bhadrasa ,kheda,thasra, near Amul sahkari Dairy pase, Bhadrasa, Gujarat 388230 ',
                    uri: 'https://content3.jdmagicbox.com/comp/bangalore/k1/080pxx80.xx80.180521140141.y6k1/catalogue/jan-aushadhi-store-srirampuram-bangalore-chemists-jou5wnxme8.jpg?clr=2e2e38'
                },
                {
                    id: 8,
                    name: 'Jan suvidha kendra',
                    km: '2.5 km',
                    Phone: '8928417856',
                    PersonName:'Ansh Patel',
                    person: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8k55gwb-QB26gROXQZoqT7_XFEJqVbw0ofOawRMlrawNeawa2_8cYGuHIVuN6Cdq8lcg&usqp=CAU',

                    storecode: 'PMBJK15205',
                    email: 'janaushadhi.mohan@gmail.com',
                    address: 'jan suvidha kendra bhadrasa ,kheda,thasra, near Amul sahkari Dairy pase, Bhadrasa, Gujarat 388230 ',
                    uri: 'https://content.jdmagicbox.com/comp/ahmedabad/k6/079pxx79.xx79.170630132903.w4k6/catalogue/deendayal-pradhanmantri-jan-aushadhi-ahmedabad-0lmheksjb3.jpg?clr=521414'
                },
                {
                    id: 9,
                    name: 'Jan suvidha kendra',
                    km: '2.5 km',
                    Phone: '6627818856',
                    PersonName:'Rohit Patel',
                    person: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8k55gwb-QB26gROXQZoqT7_XFEJqVbw0ofOawRMlrawNeawa2_8cYGuHIVuN6Cdq8lcg&usqp=CAU',

                    storecode: 'PMBJK15205',
                    email: 'janaushadhi.shree@gmail.com',
                    address: 'jan suvidha kendra bhadrasa ,kheda,thasra, near Amul sahkari Dairy pase, Bhadrasa, Gujarat 388230 ',
                    uri: 'https://i0.wp.com/orissadiary.com/wp-content/uploads/2020/05/5e8b0dae-9063-4f5e-b338-7b3a9f8d6b335HUE.jpg?fit=755%2C1024&ssl=1'
                },
            ]
        }
    }
    Shop_Number = (number) => {
        let phoneNumber = '';
        if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
        else { phoneNumber = `telprompt:${number}`; }
        Linking.openURL(phoneNumber);
    }
    componentDidMount() {
        console.log(JSON.stringify(this.props.route, null, 2))
    }
    render() {
        const NearbyCustom_View_Render_Item = ({ item }) => {
            return (
                <View >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Store_list', { storelist: item })}>
                        <View style={{ flexDirection: 'row', borderColor: AppTheme.APPCOLOR.GREY, borderRadius: 10, borderWidth: 1, margin: 2, marginBottom: 5 }}>
                            <Image style={{ width: 130 }} source={{ uri: item.uri }} />
                            <View style={{ flex: 1, backgroundColor: AppTheme.APPCOLOR.WHITE, alignContent: 'center' }}>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ color: AppTheme.APPCOLOR.BLACK, marginLeft: 9, marginVertical: 2, color: AppTheme.APPCOLOR.Wedgewood }}> {item.name}</Text>
                                    <View style={{ flexDirection: 'row', marginVertical: 5, marginLeft: 10 }} >
                                        <Image style={{ width: 18, height: 18, tintColor: AppTheme.APPCOLOR.Wedgewood }} source={require('../../assets/images/Dashboarddrawericons/location.png')} />
                                        <Text style={{ color: AppTheme.APPCOLOR.BLACK, marginHorizontal: 5 }}>{item.km}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => this.Shop_Number()}>
                                        <View style={{ flexDirection: 'row', marginVertical: 5, marginLeft: 10 }} >
                                            <Image style={{ width: 18, height: 18, tintColor: AppTheme.APPCOLOR.Wedgewood }} source={require('../../assets/images/Dashboarddrawericons/phone-call.png')} />
                                            <Text style={{ color: AppTheme.APPCOLOR.BLACK, marginHorizontal: 5 }}>{item.Phone}</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>
                            </View>
                            {/* <View style={{ flex: 1 }}>
                        <Image style={{ alignSelf: 'flex-end' }} source={require('../../../assets/images/Dashboarddrawericons/right-direction.png')}></Image>
                    </View> */}

                        </View>

                    </TouchableOpacity>
                </View>
            )
        }
        const OTHER_ITEM_Render_Item = ({ item }) => {
            return (

                <View >
                    <TouchableOpacity >
                        <View style={{ flexDirection: 'row', borderColor: AppTheme.APPCOLOR.GREY, borderRadius: 10, borderWidth: 1, height: Dimensions.get('screen').height * 0.145 }}>
                            <Image style={{ width: 125 }} source={{ uri: item.uri }} />
                            <View style={{ flex: 1, backgroundColor: AppTheme.APPCOLOR.WHITE, alignContent: 'center' }}>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ color: AppTheme.APPCOLOR.BLACK, marginLeft: 3, fontWeight: 'bold' }}> {item.name}</Text>
                                    <Text style={{ color: AppTheme.APPCOLOR.BLACK, marginLeft: 6, fontWeight: 'bold' }}>{item.Brands}</Text>
                                    <Text style={{ color: AppTheme.APPCOLOR.BLACK, marginLeft: 6, fontWeight: 'bold' }}>{item.Unitsize}</Text>

                                </View>
                                <View style={{ marginRight: 7, bottom: 5 }}>
                                    <Text style={{ color: AppTheme.APPCOLOR.RED, alignSelf: 'flex-end', right: 5 }}>{item.otherinfo.price}</Text>
                                    <View style={{ borderStyle: 'dashed', borderColor: AppTheme.APPCOLOR.Wedgewood, borderWidth: 1, width: Dimensions.get('screen').width * 0.30, alignSelf: 'flex-end' }}>
                                        <Text style={{ color: AppTheme.APPCOLOR.Wedgewood, alignSelf: 'center' }}>
                                            {"Saving:" + item.otherinfo.Saving}
                                            (<Text style={{ color: AppTheme.APPCOLOR.RED }}>{item.otherinfo.discount}</Text>)

                                        </Text>
                                        <Text style={{ alignSelf: 'flex-end', color: AppTheme.APPCOLOR.Wedgewood }}>(PerTab) </Text>

                                    </View>
                                </View>
                            </View>
                            {/* <View style={{ flex: 1 }}>
                        <Image style={{ alignSelf: 'flex-end' }} source={require('../../../assets/images/Dashboarddrawericons/right-direction.png')}></Image>
                    </View> */}

                        </View>
                    </TouchableOpacity>

                </View>
            )
        }
        return (
            <View>

                <View style={{ backgroundColor: AppTheme.APPCOLOR.WHITE, flexDirection: 'row', margin: 5, elevation: 2 }}>

                    <Image style={{ width: 100, height: 100 }} source={{ uri: this.props.route.params.list.uri }} />
                    <View style={{ justifyContent: 'center', flex: 1, margin: 10 }}>
                        <Text style={{ color: AppTheme.APPCOLOR.Wedgewood }}>{this.props.route.params.list.name}</Text>
                        <Text style={{ color: AppTheme.APPCOLOR.Wedgewood }}>{"Price :- " + this.props.route.params.list.price}</Text>
                        <Text style={{ color: AppTheme.APPCOLOR.Wedgewood }}>{"Unit size:-" + this.props.route.params.list.unitsize}</Text>

                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderWidth: 1, borderColor: AppTheme.APPCOLOR.Wedgewood, margin: 5, borderBottomLeftRadius: 9, borderTopLeftRadius: 9, borderBottomRightRadius: 9, borderTopRightRadius: 9 }}>

                    <TouchableOpacity style={{ backgroundColor: this.state.isSelectedITem === true ? AppTheme.APPCOLOR.Wedgewood : AppTheme.APPCOLOR.WHITE, width: '50%', borderBottomLeftRadius: 9, borderBottomLeftRadius: 9, borderTopLeftRadius: 9, padding: 7 }} onPress={() => { this.setState({ isSelectedITem: true }) }}>
                        <View >
                            <Text style={{ textAlign: 'center', color: this.state.isSelectedITem === true ? AppTheme.APPCOLOR.WHITE : AppTheme.APPCOLOR.TEXT }}  >OTHER BRANDS</Text>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: this.state.isSelectedITem === true ? AppTheme.APPCOLOR.WHITE : AppTheme.APPCOLOR.Wedgewood, width: '50%', padding: 5, borderBottomRightRadiusRadius: 9, borderBottomRightRadius: 9, borderTopRightRadius: 9 }} onPress={() => { this.setState({ isSelectedITem: false }) }}>
                        <View style={{}}>
                            <Text style={{ textAlign: 'center', color: this.state.isSelectedITem === true ? AppTheme.APPCOLOR.TEXT : AppTheme.APPCOLOR.WHITE }} >Near Store</Text>

                        </View>
                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-around' }}>
                    {this.state.isSelectedITem == true ? (

                        <FlatList
                            style={{ height: Dimensions.get('screen').height / 1.5 }}
                            data={this.state.Other_Brands}
                            renderItem={OTHER_ITEM_Render_Item}

                        />

                    ) : (
                        <FlatList
                            style={{ height: Dimensions.get('screen').height / 1.5 }}

                            data={this.state.Near_Store}
                            renderItem={NearbyCustom_View_Render_Item}

                        />
                    )
                    }

                </View>

            </View>
        )
    }
}