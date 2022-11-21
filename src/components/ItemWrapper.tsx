import React, { ReactNode } from 'react';
import { View , StyleSheet} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
interface ItemWrapperProps {
  index: number;
  children: ReactNode;
}

export function ItemWrapper({ children }: ItemWrapperProps) {
  
    return (
      <View
      
      style= {styles.card}
      >
        {children}

      </View>
    )

}

const styles= StyleSheet.create({

  card: {
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    height:64,
    alignItems:'center',
    backgroundColor:'#262626',
    borderRadius:8,
    marginBottom:8,
    marginHorizontal:24,



  }

})