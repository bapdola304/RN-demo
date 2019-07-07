import { Badge} from 'react-native-elements'
import { connect } from 'react-redux';
import React from 'react';
import { Image, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
class IconWithBadge extends React.Component {
   componentWillMount() {
       console.log('will');
       
   }
    render() {
     const { name, carts, color, size } = this.props;
     console.log(carts);
     
     return (
       <View style={{ width: 24, height: 24, margin: 5 }}>
         <Ionicons name={name} size={size} color={color} />
         <Badge
           status="success"
           containerStyle={{ position: 'absolute', top: -4, right: -4 }}
           value = { 2 }
         />
        
       </View>
     );
   }
 }
 const mapStateToProps = state => {
    return {
        carts: state.Carts
    }
  }
 export default connect(mapStateToProps, null)(IconWithBadge)

