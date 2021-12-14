import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { ResultsScreen } from "./Screens/ResultsScreen";
import { SearchScreen } from "./Screens/SearchScreen";

const navigator = createStackNavigator({
  Search : SearchScreen,
  Results : ResultsScreen
}, {
  initialRouteName : 'Search',
  defaultNavigationOptions : {
    title : 'Restaurant Search'
  }
})

export default createAppContainer(navigator);