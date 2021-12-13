import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { SearchScreen } from "./Screens/SearchScreen";

const navigator = createStackNavigator({
  Search : SearchScreen
}, {
  initialRouteName : 'Search',
  defaultNavigationOptions : {
    title : 'Restaurant Search'
  }
})

export default createAppContainer(navigator);